import type {
  User,
  UserManagerSettings,
} from 'oidc-client-ts'
import {
  OidcClient as OidcClientTs,
  UserManager,
  WebStorageStateStore,
} from 'oidc-client-ts'

import type {
  OAuth2VueClientOptions,
  OidcUser,
} from './oidc.type'

const DEFAULT_SCOPES = [
  'openid',
  'profile',
  'email',
] as const

export class OidcClient {
  private config: OAuth2VueClientOptions
  private endSessionEndpoint: string | null = null
  private metadataResolved = false
  private offline: boolean
  private oidcClient: OidcClientTs
  private refreshPromise: Promise<User | null> | null = null
  private userManager: UserManager

  constructor(options: OAuth2VueClientOptions) {
    this.config = options
    this.offline = options.offline ?? false
    this.userManager = this.createUserManager(options)
    this.oidcClient = this.createOidcClient(options)
    this.prefetchMetadata()
  }

  private createOidcClient(config: OAuth2VueClientOptions): OidcClientTs {
    const settings: UserManagerSettings = {
      client_id: config.clientId,
      authority: config.baseUrl,
      redirect_uri: config.loginRedirectUri,
      response_type: 'code',
      scope: this.getScopes(config.scopes),
      userStore: new WebStorageStateStore({
        store: window.localStorage,
      }),
    }

    return new OidcClientTs(settings)
  }

  private createUserManager(config: OAuth2VueClientOptions): UserManager {
    const settings: UserManagerSettings = {
      client_id: config.clientId,
      authority: config.baseUrl,
      automaticSilentRenew: true,
      checkSessionIntervalInSeconds: 60,
      loadUserInfo: false,
      monitorSession: false,
      post_logout_redirect_uri: config.postLogoutRedirectUri,
      redirect_uri: config.loginRedirectUri,
      response_type: 'code',
      scope: this.getScopes(config.scopes),
      userStore: new WebStorageStateStore({
        prefix: config.prefix,
        store: window.localStorage,
      }),
    }

    return new UserManager(settings)
  }

  private getScopes(scopes: string[]): string {
    const scopeList = scopes.length > 0 ? scopes : DEFAULT_SCOPES

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
      const user = await this.userManager.signinSilent()

      return user
    }
    catch {
      await this.userManager.removeUser()

      return null
    }
  }

  public async getAccessToken(): Promise<string> {
    if (this.offline) {
      return ''
    }

    const user = await this.getValidUser()

    return user?.access_token ?? ''
  }

  public getClient(): UserManager {
    return this.userManager
  }

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

      Object.assign(extraQueryParams, restQueryParams)
    }

    const request = await this.oidcClient.createSigninRequest({
      extraQueryParams,
      request_type: 'code id_token',
      url_state: urlState,
    })

    return request.url
  }

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

  async getUserInfo(): Promise<OidcUser> {
    const accessToken = await this.getAccessToken()
    const response = await fetch(`${this.config.baseUrl.replace(/\/$/, '')}/oidc/v1/userinfo`, {
      headers: new Headers({
        Authorization: `Bearer ${accessToken}`,
      }),
    })

    if (!response.ok) {
      this.logout()

      throw new Error('Failed to fetch user info')
    }

    return await response.json() as OidcUser
  }

  public async isLoggedIn(): Promise<boolean> {
    if (this.offline) {
      return true
    }

    const user = await this.getValidUser()

    return user !== null && user.access_token !== ''
  }

  public loginOffline(): void {
    // Offline mode is handled in isLoggedIn/getAccessToken; no persisted user state is required.
  }

  public async loginWithCode(code?: string): Promise<void> {
    if (this.offline) {
      this.loginOffline()

      return
    }

    try {
      const callbackUrl = new URL(window.location.href)

      if (code !== undefined) {
        callbackUrl.searchParams.set('code', code)
      }

      await this.userManager.signinRedirectCallback(callbackUrl.toString())
    }
    catch (error) {
      this.logout()

      throw error
    }
  }

  public logout(): void {
    void this.userManager.removeUser()
  }

  public sanitizeRedirectUrl(redirectUrl: string, fallbackUrl: string = '/'): string {
    try {
      const targetUrl = new URL(redirectUrl, window.location.origin)

      if (targetUrl.origin !== window.location.origin) {
        return fallbackUrl
      }

      const isBlocked = (this.config.blockedPaths ?? []).some((blockedPath) => {
        if (blockedPath.endsWith('/*')) {
          return targetUrl.pathname.startsWith(blockedPath.slice(0, -1))
        }

        return targetUrl.pathname === blockedPath || targetUrl.pathname.startsWith(`${blockedPath}/`)
      })

      if (isBlocked) {
        return fallbackUrl
      }

      const allowedPaths = this.config.allowedPaths ?? []

      if (allowedPaths.length > 0) {
        const isAllowed = allowedPaths.some((allowedPath) => {
          if (allowedPath.endsWith('/*')) {
            return targetUrl.pathname.startsWith(allowedPath.slice(0, -1))
          }

          return targetUrl.pathname === allowedPath
        })

        if (!isAllowed) {
          return fallbackUrl
        }
      }

      return `${targetUrl.pathname}${targetUrl.search}${targetUrl.hash}`
    }
    catch {
      return fallbackUrl
    }
  }

  public setConfig(options: Partial<OAuth2VueClientOptions>): void {
    this.config = {
      ...this.config,
      ...options,
    }
    this.offline = this.config.offline ?? false

    if (options.baseUrl !== undefined) {
      localStorage.setItem('oidcIssuer', options.baseUrl)
    }

    if (options.clientId !== undefined) {
      localStorage.setItem('oidcClientId', options.clientId)
    }

    if (options.scopes !== undefined) {
      localStorage.setItem('oidcScopes', JSON.stringify(options.scopes))
    }

    this.userManager = this.createUserManager(this.config)
    this.oidcClient = this.createOidcClient(this.config)
    this.metadataResolved = false
    this.endSessionEndpoint = null
    this.prefetchMetadata()
  }
}
