import pkceChallenge from 'pkce-challenge'

import { ApiClient } from './apiClient'
import { LocalStorageTokensStrategy } from './tokens-strategy/localStorage.tokensStrategy'
import type { TokensStrategy } from './tokens-strategy/tokensStrategy.type'
import type {
  OAuth2VueClientOptions,
  ZitadelUser,
} from './zitadel.type'

export class ZitadelClient<TFetchInstance> {
  private client: ApiClient<TFetchInstance> | null = null
  private readonly offline: boolean
  private tokensStrategy: TokensStrategy

  constructor(private readonly options: OAuth2VueClientOptions<TFetchInstance>) {
    this.offline = options.offline ?? false

    this.tokensStrategy = this.options.tokensStrategy ?? new LocalStorageTokensStrategy()
    this.client = new ApiClient<TFetchInstance>(
      {
        clientId: this.options.clientId,
        baseUrl: this.options.baseUrl,
        fetchStrategy: this.options.fetchStrategy,
        redirectUri: this.options.loginRedirectUri,
        scopes: this.options.scopes ?? this.getDefaultScopes(),
        tokensStrategy: this.tokensStrategy,
      },
    )
  }

  private async addAuthorizationHeader(): Promise<void> {
    const client = this.getClient()

    if (client === null || this.offline) {
      return
    }

    try {
      const token = await client.getAccessToken()

      this.options.fetchStrategy.setAuthorizationHeader(token)
    }
    catch (error) {
      console.error('Failed to get access token, logging out', error)

      this.logout()

      throw new Error('Failed to get access token')
    }
  }

  private getDefaultScopes(): string[] {
    return [
      'openid',
      'profile',
      'email',
      'offline_access',
      `urn:zitadel:iam:org:id:${this.options.organizationId}`,
    ]
  }

  private getTokensStrategy(): TokensStrategy {
    return this.tokensStrategy
  }

  private removeAuthorizationHeader(): void {
    this.options.fetchStrategy.removeAuthorizationHeader()
  }

  /*
  * Get the access token
  * This will return the access token from the identity provider
  * If the access token is expired, it will try to refresh it
  * If it fails, it will throw an error
  */
  public async getAccessToken(): Promise<string> {
    if (this.client === null) {
      throw new Error('Client is not initialized')
    }

    return await this.client.getAccessToken()
  }

  /*
  * Get the client
  * This will return the client that is used to make requests to the identity provider
  */
  public getClient(): ApiClient<TFetchInstance> {
    if (this.client === null) {
      throw new Error('Client is not initialized')
    }

    return this.client
  }

  /*
  * Get the fetch instance
  * This will return the fetch instance that is used to make requests to the identity provider
  */
  public getFetchInstance(): TFetchInstance {
    return this.options.fetchStrategy.getFetchInstance()
  }

  public async getIdentityProviderLoginUrl(idpId: string): Promise<string> {
    const searchParams = new URLSearchParams()

    const codes = await pkceChallenge()

    const scopes = this.options.scopes ?? this.getDefaultScopes()

    scopes.push(`urn:zitadel:iam:org:idp:id:${idpId}`)

    this.getTokensStrategy().setCodeVerifier(codes.code_verifier)

    searchParams.append('client_id', this.options.clientId)
    searchParams.append('redirect_uri', this.options.loginRedirectUri)
    searchParams.append('response_type', 'code')
    searchParams.append('scope', scopes.join(' '))
    searchParams.append('code_challenge', codes.code_challenge)
    searchParams.append('code_challenge_method', 'S256')

    return `${this.options.baseUrl}/oauth/v2/authorize?${searchParams.toString()}`
  }

  public async getLoginUrl(): Promise<string> {
    const searchParams = new URLSearchParams()

    const codes = await pkceChallenge()

    const scopes = this.options.scopes ?? this.getDefaultScopes()

    this.getTokensStrategy().setCodeVerifier(codes.code_verifier)

    searchParams.append('client_id', this.options.clientId)
    searchParams.append('redirect_uri', this.options.loginRedirectUri)
    searchParams.append('response_type', 'code')
    searchParams.append('prompt', 'login')
    searchParams.append('scope', scopes.join(' '))
    searchParams.append('code_challenge', codes.code_challenge)
    searchParams.append('code_challenge_method', 'S256')

    return `${this.options.baseUrl}/oauth/v2/authorize?${searchParams.toString()}`
  }

  /*
  * Get the logout URL
  * Use this to redirect the user to the logout page of the identity provider
  */
  public getLogoutUrl(): string {
    const searchParams = new URLSearchParams()

    searchParams.append('client_id', this.options.clientId)
    searchParams.append('post_logout_redirect_uri', this.options.postLogoutRedirectUri)

    return `${this.options.baseUrl}/oidc/v1/end_session?${searchParams.toString()}`
  }

  /*
  * Get the user info
  * This will return the user info from the identity provider
  */
  async getUserInfo(): Promise<ZitadelUser> {
    try {
      return await this.getClient().getUserInfo()
    }
    catch (error) {
      this.logout()

      throw error
    }
  }

  /*
  * Check if the user is logged in
  * If the access token is expired, it will try to refresh it and add it to the fetch instance headers
  * If it fails, it will log the user out
  */
  public async isLoggedIn(): Promise<boolean> {
    if (this.options.offline === true) {
      return true
    }

    if (this.client === null) {
      return false
    }

    if (this.getClient().getTokens() === null) {
      return false
    }

    try {
      const token = await this.client.getAccessToken()

      this.options.fetchStrategy.setAuthorizationHeader(token)

      return true
    }
    catch (error) {
      console.error('Failed to get access token, logging out', error)

      this.logout()

      return false
    }
  }

  /*
  * Login the user offline by setting mock tokens
  */
  public loginOffline(): void {
    if (this.client === null) {
      throw new Error('Client is not initialized')
    }

    this.client.setMockTokens()
  }

  /*
  * Login the user with the code from the identity provider
  * It will get the access token and add it to the fetch instance headers
  */
  public async loginWithCode(code: string): Promise<void> {
    if (this.options.offline === true) {
      this.loginOffline()

      return
    }

    try {
      await this.getClient().loginWithCode(code)

      await this.addAuthorizationHeader()
    }
    catch (error) {
      this.logout()

      throw error
    }
  }

  /*
  * Logout the user by clearing the tokens and removing the authorization header
  */
  public logout(): void {
    this.client?.clearTokens()
    this.client = null
    this.removeAuthorizationHeader()
  }
}
