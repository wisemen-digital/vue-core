import type {
  StateStore,
  User,
  UserManagerSettings,
} from 'oidc-client-ts'
import {
  OidcClient as OidcClientTs,
  UserManager,
  WebStorageStateStore,
} from 'oidc-client-ts'

import type {
  OAuthClientOptions,
  OidcUser,
} from './oidc.type'

const DEFAULT_PREFIX = 'wisemen.auth'

const DEFAULT_SCOPES = [
  'openid',
  'profile',
  'email',
] as const
const DEFAULT_USER_INFO_TIMEOUT_MS = 10_000

const OIDC_CALLBACK_QUERY_PARAMS = [
  'code',
  'state',
  'session_state',
  'iss',
  'error',
  'error_description',
  'error_uri',
] as const

const RESERVED_OIDC_QUERY_PARAMS = new Set([
  'acr_values',
  'claims',
  'client_id',
  'code_challenge',
  'code_challenge_method',
  'display',
  'id_token_hint',
  'login_hint',
  'max_age',
  'nonce',
  'prompt',
  'redirect_uri',
  'request',
  'request_uri',
  'resource',
  'response_mode',
  'response_type',
  'scope',
  'state',
  'ui_locales',
])

interface NormalizedOAuthClientOptions extends OAuthClientOptions {
  allowedPaths: string[]
  blockedPaths: string[]
  prefix: string
  requireHttps: boolean
  scopes: string[]
  storage: 'local' | 'session'
}

class MemoryStorage implements Storage {
  private readonly storage = new Map<string, string>()

  public clear(): void {
    this.storage.clear()
  }

  public getItem(key: string): string | null {
    return this.storage.get(key) ?? null
  }

  public key(index: number): string | null {
    return Array.from(this.storage.keys())[index] ?? null
  }

  public get length(): number {
    return this.storage.size
  }

  public removeItem(key: string): void {
    this.storage.delete(key)
  }

  public setItem(key: string, value: string): void {
    this.storage.set(key, value)
  }
}

export class OidcClient {
  private config: NormalizedOAuthClientOptions
  private endSessionEndpoint: string | null = null
  private metadataResolved = false
  private oidcClient: OidcClientTs
  private readonly oidcStorage: Storage
  private refreshPromise: Promise<User | null> | null = null
  private userManager: UserManager

  /**
   * Creates a new OIDC client instance with validated and normalized configuration.
   */
  constructor(options: OAuthClientOptions) {
    this.ensureBrowserEnvironment()

    this.config = this.normalizeConfig(options)
    this.oidcStorage = this.resolveStorage(this.config.storage)

    this.userManager = this.createUserManager(this.config)
    this.oidcClient = this.createOidcClient(this.config)
    this.prefetchMetadata()
  }

  private createOidcClient(config: NormalizedOAuthClientOptions): OidcClientTs {
    const settings: UserManagerSettings = {
      client_id: config.clientId,
      authority: config.baseUrl,
      redirect_uri: config.loginRedirectUri,
      response_type: 'code',
      scope: this.getScopes(config.scopes),
      stateStore: this.createStateStore(config.prefix),
    }

    return new OidcClientTs(settings)
  }

  private createStateStore(prefix: string): StateStore {
    return new WebStorageStateStore({
      prefix: `${prefix}.state.`,
      store: this.oidcStorage,
    })
  }

  private createUserManager(config: NormalizedOAuthClientOptions): UserManager {
    const hasSilentRedirectUri = config.silentRedirectUri !== undefined
    const settings: UserManagerSettings = {
      client_id: config.clientId,
      authority: config.baseUrl,
      automaticSilentRenew: config.automaticSilentRenew ?? hasSilentRedirectUri,
      checkSessionIntervalInSeconds: 60,
      loadUserInfo: false,
      monitorSession: false,
      post_logout_redirect_uri: config.postLogoutRedirectUri,
      redirect_uri: config.loginRedirectUri,
      response_type: 'code',
      revokeTokensOnSignout: true,
      scope: this.getScopes(config.scopes),
      silent_redirect_uri: config.silentRedirectUri,
      stateStore: this.createStateStore(config.prefix),
      userStore: new WebStorageStateStore({
        prefix: `${config.prefix}.user.`,
        store: this.oidcStorage,
      }),
    }

    return new UserManager(settings)
  }

  private getBrowserStorage(type: 'local' | 'session'): Storage | null {
    try {
      return type === 'local' ? window.localStorage : window.sessionStorage
    }
    catch {
      return null
    }
  }

  private getScopes(scopes: string[]): string {
    const scopeList = scopes.length > 0
      ? scopes
      : [
          ...DEFAULT_SCOPES,
        ]

    return [
      ...new Set(scopeList),
    ].join(' ')
  }

  private async getValidUser(): Promise<User | null> {
    const user = await this.userManager.getUser()

    if (user === null) {
      return null
    }

    if (!user.expired) {
      return user
    }

    if (this.refreshPromise === null) {
      this.refreshPromise = this.refreshUser()
        .finally(() => {
          this.refreshPromise = null
        })
    }

    return await this.refreshPromise
  }

  private getWindowOrigin(): string {
    return window.location.origin
  }

  private isHttpsOrLocalhost(url: URL): boolean {
    if (url.protocol === 'https:') {
      return true
    }

    if (url.protocol !== 'http:') {
      return false
    }

    return url.hostname === 'localhost' || url.hostname === '127.0.0.1'
  }

  private isPathAllowed(pathname: string): boolean {
    const allowedPaths = this.config.allowedPaths

    if (allowedPaths.length === 0) {
      return true
    }

    return allowedPaths.some((allowedPath) => this.matchesPathRule(pathname, allowedPath))
  }

  private isPathBlocked(pathname: string): boolean {
    return this.config.blockedPaths.some((blockedPath) => this.matchesPathRule(pathname, blockedPath))
  }

  private matchesPathRule(pathname: string, pathRule: string): boolean {
    if (pathRule.endsWith('/*')) {
      return pathname.startsWith(pathRule.slice(0, -1))
    }

    return pathname === pathRule || pathname.startsWith(`${pathRule}/`)
  }

  private normalizeConfig(options: OAuthClientOptions): NormalizedOAuthClientOptions {
    const clientId = this.normalizeRequiredString(options.clientId, 'clientId')
    const requireHttps = options.requireHttps ?? true
    const baseUrl = this.normalizeUrl(options.baseUrl, 'baseUrl', requireHttps)
    const loginRedirectUri = this.normalizeUrl(options.loginRedirectUri, 'loginRedirectUri', requireHttps)
    const postLogoutRedirectUri = this.normalizeUrl(options.postLogoutRedirectUri, 'postLogoutRedirectUri', requireHttps)
    const silentRedirectUri = options.silentRedirectUri !== undefined
      ? this.normalizeUrl(options.silentRedirectUri, 'silentRedirectUri', requireHttps)
      : undefined
    const scopes = this.normalizeScopes(options.scopes)

    return {
      ...options,
      clientId,
      allowedPaths: this.normalizePathRules(options.allowedPaths),
      baseUrl,
      blockedPaths: this.normalizePathRules(options.blockedPaths),
      loginRedirectUri,
      postLogoutRedirectUri,
      prefix: this.normalizePrefix(options.prefix),
      requireHttps,
      scopes,
      silentRedirectUri,
      storage: options.storage ?? 'local',
    }
  }

  private normalizePathRules(pathRules?: string[]): string[] {
    if (pathRules === undefined) {
      return []
    }

    return [
      ...new Set(pathRules
        .map((pathRule) => {
          const trimmedPathRule = pathRule.trim()

          if (trimmedPathRule === '') {
            return null
          }

          if (trimmedPathRule.startsWith('/')) {
            return trimmedPathRule
          }

          try {
            const ruleUrl = new URL(trimmedPathRule)

            if (ruleUrl.origin !== this.getWindowOrigin()) {
              throw new Error(`Path rule '${trimmedPathRule}' is not same-origin`)
            }

            return `${ruleUrl.pathname}${ruleUrl.search}${ruleUrl.hash}`
          }
          catch {
            throw new Error(`Path rule '${trimmedPathRule}' must start with '/' or be a same-origin URL`)
          }
        })
        .filter((pathRule): pathRule is string => pathRule !== null)),
    ]
  }

  private normalizePrefix(prefix?: string): string {
    if (prefix === undefined) {
      return DEFAULT_PREFIX
    }

    const normalizedPrefix = prefix.trim()

    if (normalizedPrefix === '') {
      throw new Error('prefix must not be empty')
    }

    return normalizedPrefix
  }

  private normalizeQueryParams(queryParams: Record<string, string>): Record<string, string> {
    return Object.entries(queryParams).reduce<Record<string, string>>((accumulator, [
      key,
      value,
    ]) => {
      const normalizedKey = key.trim()

      if (normalizedKey === '' || RESERVED_OIDC_QUERY_PARAMS.has(normalizedKey)) {
        return accumulator
      }

      accumulator[normalizedKey] = value

      return accumulator
    }, {})
  }

  private normalizeRequiredString(value: string, fieldName: string): string {
    const normalizedValue = value.trim()

    if (normalizedValue === '') {
      throw new Error(`${fieldName} must not be empty`)
    }

    return normalizedValue
  }

  private normalizeScopes(scopes: string[]): string[] {
    const normalizedScopes = [
      ...new Set(scopes
        .map((scope) => scope.trim())
        .filter((scope) => scope !== '')),
    ]

    if (!normalizedScopes.includes('openid')) {
      normalizedScopes.unshift('openid')
    }

    if (normalizedScopes.length === 0) {
      return [
        ...DEFAULT_SCOPES,
      ]
    }

    return normalizedScopes
  }

  private normalizeUrl(value: string, fieldName: string, requireHttps: boolean): string {
    const normalizedValue = this.normalizeRequiredString(value, fieldName)
    const parsedUrl = new URL(normalizedValue)

    if (requireHttps && !this.isHttpsOrLocalhost(parsedUrl)) {
      throw new Error(`${fieldName} must use HTTPS (localhost/127.0.0.1 over HTTP is allowed)`)
    }

    return parsedUrl.toString()
  }

  private prefetchMetadata(): void {
    if (this.metadataResolved) {
      return
    }

    void this.userManager.metadataService.getMetadata()
      .then((metadata) => {
        this.endSessionEndpoint = metadata.end_session_endpoint ?? null
        this.metadataResolved = true
      })
      .catch(() => {
        this.metadataResolved = true
      })
  }

  private async refreshUser(): Promise<User | null> {
    try {
      return await this.userManager.signinSilent()
    }
    catch {
      await this.clearAuthState()

      return null
    }
  }

  private removeOidcCallbackParamsFromCurrentUrl(): void {
    const currentUrl = new URL(window.location.href)
    let shouldReplace = false

    for (const param of OIDC_CALLBACK_QUERY_PARAMS) {
      if (currentUrl.searchParams.has(param)) {
        currentUrl.searchParams.delete(param)
        shouldReplace = true
      }
    }

    if (!shouldReplace) {
      return
    }

    const cleanPath = `${currentUrl.pathname}${currentUrl.search}${currentUrl.hash}`

    window.history.replaceState(window.history.state, document.title, cleanPath)
  }

  private resolveStorage(type: 'local' | 'session'): Storage {
    const requestedStorage = this.getBrowserStorage(type)

    if (requestedStorage !== null && this.storageIsWritable(requestedStorage)) {
      return requestedStorage
    }

    const fallbackStorage = this.getBrowserStorage(type === 'session' ? 'local' : 'session')

    if (fallbackStorage !== null && this.storageIsWritable(fallbackStorage)) {
      return fallbackStorage
    }

    return new MemoryStorage()
  }

  private async revokeAndClearAuthState(): Promise<void> {
    try {
      await this.userManager.revokeTokens()
    }
    catch {
      // Ignore revocation failures and still clear local auth state.
    }

    await this.clearAuthState()
  }

  private storageIsWritable(storage: Storage): boolean {
    const testStorageKey = `${DEFAULT_PREFIX}.storage-probe`

    try {
      storage.setItem(testStorageKey, '1')
      storage.removeItem(testStorageKey)

      return true
    }
    catch {
      return false
    }
  }

  /**
   * Clears current user data and stale OIDC state from storage.
   */
  public async clearAuthState(): Promise<void> {
    await this.userManager.removeUser()
    await this.userManager.clearStaleState()
  }

  /**
   * Throws when called outside a browser environment.
   */
  public ensureBrowserEnvironment(): void {
    if (typeof window === 'undefined') {
      throw new TypeError('OidcClient requires a browser environment')
    }
  }

  /**
   * Returns a valid access token, refreshing it silently when needed.
   * Returns an empty string when no authenticated user exists.
   */
  public async getAccessToken(): Promise<string> {
    const user = await this.getValidUser()

    return user?.access_token ?? ''
  }

  /**
   * Returns the underlying `UserManager` instance for advanced integrations.
   */
  public getClient(): UserManager {
    return this.userManager
  }

  /**
   * Builds the login URL and stores request state for callback validation.
   * Pass a string (or `state` in an object) to round-trip a redirect target.
   */
  public async getLoginUrl(queryParams?: string | Record<string, string> | null): Promise<string> {
    const extraQueryParams: Record<string, string> = {}
    let urlState: string | undefined

    if (typeof queryParams === 'string') {
      urlState = this.sanitizeRedirectUrl(queryParams, '/')
    }
    else if (queryParams !== null && queryParams !== undefined) {
      const {
        state,
        ...restQueryParams
      } = queryParams

      if (typeof state === 'string') {
        urlState = this.sanitizeRedirectUrl(state, '/')
      }

      Object.assign(extraQueryParams, this.normalizeQueryParams(restQueryParams))
    }

    const request = await this.oidcClient.createSigninRequest({
      extraQueryParams,
      url_state: urlState,
    })

    return request.url
  }

  /**
   * Returns the logout URL for the identity provider.
   */
  public getLogoutUrl(): string {
    if (this.endSessionEndpoint !== null) {
      const url = new URL(this.endSessionEndpoint)

      if (this.config.postLogoutRedirectUri !== '') {
        url.searchParams.set('post_logout_redirect_uri', this.config.postLogoutRedirectUri)
      }

      if (this.config.clientId !== '') {
        url.searchParams.set('client_id', this.config.clientId)
      }

      return url.toString()
    }

    return this.config.postLogoutRedirectUri
  }

  /**
   * Fetches user profile information from the userinfo endpoint.
   * Clears auth state and throws when the request fails.
   */
  public async getUserInfo(): Promise<OidcUser> {
    const accessToken = await this.getAccessToken()

    if (accessToken === '') {
      throw new Error('Failed to fetch user info: access token is missing')
    }

    const abortController = new AbortController()
    const timeout = window.setTimeout(() => {
      abortController.abort()
    }, DEFAULT_USER_INFO_TIMEOUT_MS)

    try {
      const response = await fetch(`${this.config.baseUrl.replace(/\/$/, '')}/oidc/v1/userinfo`, {
        headers: new Headers({
          Authorization: `Bearer ${accessToken}`,
        }),
        signal: abortController.signal,
      })

      if (!response.ok) {
        await this.clearAuthState()

        throw new Error(`Failed to fetch user info (${response.status})`)
      }

      return await response.json() as OidcUser
    }
    finally {
      window.clearTimeout(timeout)
    }
  }

  /**
   * Processes the OIDC redirect callback and returns a sanitized redirect target.
   */
  public async handleRedirectCallback(): Promise<string> {
    try {
      const callbackUrl = new URL(window.location.href)

      if (!callbackUrl.searchParams.has('state')) {
        throw new Error('Missing state parameter in login callback URL')
      }

      const user = await this.userManager.signinRedirectCallback(callbackUrl.toString())

      this.removeOidcCallbackParamsFromCurrentUrl()

      return this.sanitizeRedirectUrl(typeof user?.url_state === 'string' ? user.url_state : '/', '/')
    }
    catch (error) {
      await this.clearAuthState()

      throw error
    }
  }

  /**
   * Returns whether an authenticated user with a non-empty access token exists.
   */
  public async isLoggedIn(): Promise<boolean> {
    try {
      const user = await this.getValidUser()

      return user !== null && user.access_token !== ''
    }
    catch (error) {
      await this.clearAuthState()

      throw error
    }
  }

  /**
   * Revokes server-side tokens when possible and clears local auth state.
   */
  public async logout(): Promise<void> {
    await this.revokeAndClearAuthState()
  }

  /**
   * Validates and normalizes a redirect URL to a safe in-app path.
   */
  public sanitizeRedirectUrl(redirectUrl: string, fallbackUrl: string = '/'): string {
    try {
      const targetUrl = new URL(redirectUrl, this.getWindowOrigin())

      if (targetUrl.origin !== this.getWindowOrigin()) {
        return fallbackUrl
      }

      if (this.isPathBlocked(targetUrl.pathname)) {
        return fallbackUrl
      }

      if (!this.isPathAllowed(targetUrl.pathname)) {
        return fallbackUrl
      }

      return `${targetUrl.pathname}${targetUrl.search}${targetUrl.hash}`
    }
    catch {
      return fallbackUrl
    }
  }

  /**
   * Updates client configuration and recreates internal OIDC clients.
   */
  public setConfig(options: Partial<OAuthClientOptions>): void {
    this.config = this.normalizeConfig({
      ...this.config,
      ...options,
    })
    this.refreshPromise = null

    this.userManager = this.createUserManager(this.config)
    this.oidcClient = this.createOidcClient(this.config)
    this.metadataResolved = false
    this.endSessionEndpoint = null
    this.prefetchMetadata()
  }
}
