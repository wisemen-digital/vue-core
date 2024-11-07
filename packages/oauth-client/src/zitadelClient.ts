/* eslint-disable no-console */
import type {
  InternalAxiosRequestConfig,
} from 'axios'
import pkceChallenge from 'pkce-challenge'

import { ApiClient } from './apiClient'
import type {
  OAuth2VueClientOptions,
  ZitadelUser,
} from './zitadel.type'

export class ZitadelClient {
  private client: ApiClient | null = null
  private readonly offline: boolean

  constructor(private readonly options: OAuth2VueClientOptions) {
    this.offline = options.offline ?? false
    this.client = new ApiClient(
      {
        clientId: this.options.clientId,
        axios: this.options.axios,
        baseUrl: this.options.baseUrl,
        redirectUri: this.options.loginRedirectUri,
        scopes: this.options.scopes ?? this.getDefaultScopes(),
      },
    )
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

  async addAuthorizationHeader(
    config: InternalAxiosRequestConfig<unknown>,
  ): Promise<InternalAxiosRequestConfig<unknown>> {
    const client = this.getClient()

    if (client === null) {
      return config
    }

    if (this.offline) {
      return config
    }

    try {
      const token = await client.getAccessToken()

      config.headers.Authorization = `Bearer ${token}`
    }
    catch (error) {
      console.log('Failed to get access token, logging out', error)
      this.client?.clearTokens()

      throw new Error('Failed to get access token')
    }

    return config
  }

  public getClient(): ApiClient {
    if (this.client === null) {
      throw new Error('Client is not initialized')
    }

    return this.client
  }

  public async getIdentityProviderLoginUrl(idpId: string): Promise<string> {
    const searchParams = new URLSearchParams()

    const codes = await pkceChallenge()

    const scopes = this.options.scopes ?? this.getDefaultScopes()

    scopes.push(`urn:zitadel:iam:org:idp:id:${idpId}`)

    localStorage.setItem('code_verifier', codes.code_verifier)

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

    localStorage.setItem('code_verifier', codes.code_verifier)

    searchParams.append('client_id', this.options.clientId)
    searchParams.append('redirect_uri', this.options.loginRedirectUri)
    searchParams.append('response_type', 'code')
    searchParams.append('prompt', 'login')
    searchParams.append('scope', scopes.join(' '))
    searchParams.append('code_challenge', codes.code_challenge)
    searchParams.append('code_challenge_method', 'S256')

    return `${this.options.baseUrl}/oauth/v2/authorize?${searchParams.toString()}`
  }

  public getLogoutUrl(): string {
    const searchParams = new URLSearchParams()

    searchParams.append('client_id', this.options.clientId)
    searchParams.append('post_logout_redirect_uri', this.options.postLogoutRedirectUri)

    return `${this.options.baseUrl}/oidc/v1/end_session?${searchParams.toString()}`
  }

  async getUserInfo(): Promise<ZitadelUser> {
    try {
      return await this.getClient().getUserInfo()
    }
    catch (error) {
      this.logout()

      throw error
    }
  }

  public isLoggedIn(): boolean {
    if (this.options.offline === true) {
      return true
    }

    return this.client?.getTokens() != null
  }

  public loginOffline(): void {
    if (this.client === null) {
      throw new Error('Client is not initialized')
    }

    this.client.setMockTokens()
  }

  public async loginWithCode(code: string): Promise<void> {
    if (this.options.offline === true) {
      this.loginOffline()

      return
    }

    await this.getClient().loginWithCode(code)
  }

  public logout(): void {
    this.client?.clearTokens()
    this.client = null
  }
}
