/* eslint-disable no-console */

import type { FetchStrategy } from './fetch-strategy/fetchStrategy.type'
import { localStorageTokensStrategy } from './tokens-strategy/localStorage.tokensStrategy'
import type { TokensStrategy } from './tokens-strategy/tokensStrategy.type'
import type {
  ZitadelUser,
} from './zitadel.type'

export interface OAuth2Tokens {
  expires_at: number
  access_token: string
  id_token: string
  refresh_token: string
  scope: string
  token_type: string
}

interface ApiClientOptions<TFetchInstance> {
  clientId: string
  baseUrl: string
  fetchStrategy: FetchStrategy<TFetchInstance>
  redirectUri: string
  scopes?: string[]
  tokensStrategy?: TokensStrategy
}

export class ApiClient<TFetchInstance> {
  private _promise: Promise<void> | null = null

  constructor(private readonly options: ApiClientOptions<TFetchInstance>) {}

  /*
  * @returns base url without trailing slash
  */
  private getBaseUrl(): string {
    return this.options.baseUrl.replace(/\/$/, '')
  }

  private async getNewAccessToken(refreshToken: string): Promise<OAuth2Tokens> {
    return await this.options.fetchStrategy.getNewAccessToken({
      clientId: this.options.clientId,
      refreshToken,
      scope: this.options.scopes?.join(' '),
      url: `${this.getBaseUrl()}/oauth/v2/token`,
    })
  }

  private getTokensStrategy(): TokensStrategy {
    return this.options.tokensStrategy ?? localStorageTokensStrategy
  }

  private async refreshToken(): Promise<void> {
    if (this._promise != null) {
      return this._promise
    }

    this._promise = new Promise((resolve, reject) => {
      this.getNewAccessToken(this.getRefreshToken())
        .then((tokens) => {
          this.setTokens(tokens)
          resolve()
        })
        .catch(() => {
          console.log('Failed to refresh access token, trying again...')

          setTimeout(() => {
            this.getNewAccessToken(this.getRefreshToken())
              .then((tokens) => {
                this.setTokens(tokens)
                resolve()
              })
              .catch(() => {
                reject(new Error('Failed to refresh access token'))
              })
          }, 1000)
        })
        .finally(() => {
          this._promise = null
        })
    })

    return await this._promise
  }

  public clearTokens(): void {
    this.getTokensStrategy().removeTokens()
  }

  public async getAccessToken(): Promise<string> {
    if (this.isAccessTokenExpired()) {
      await this.refreshToken()
    }

    const tokens = this.getTokens()

    if (tokens === null) {
      throw new Error('No tokens found')
    }

    return tokens.access_token
  }

  public getRefreshToken(): string {
    const tokens = this.getTokens()

    if (tokens === null) {
      throw new Error('No tokens found')
    }

    return tokens.refresh_token
  }

  public getTokens(): OAuth2Tokens | null {
    return this.getTokensStrategy().getTokens()
  }

  async getUserInfo(): Promise<ZitadelUser> {
    const accessToken = await this.getAccessToken()

    const response = await this.options.fetchStrategy.getUserInfo({
      accessToken,
      url: `${this.getBaseUrl()}/oidc/v1/userinfo`,
    })

    return response
  }

  public isAccessTokenExpired(): boolean {
    const tokens = this.getTokens()

    if (tokens === null) {
      return true
    }

    return Date.now() >= tokens.expires_at
  }

  public async loginWithCode(code: string): Promise<void> {
    const codeVerifier = this.getTokensStrategy().getCodeVerifier()

    if (codeVerifier === null) {
      throw new Error('Code verifier is not set')
    }

    const response = await this.options.fetchStrategy.loginWithCode({
      clientId: this.options.clientId,
      code,
      codeVerifier,
      redirectUri: this.options.redirectUri,
      url: `${this.getBaseUrl()}/oauth/v2/token`,
    })

    this.setTokens(response)

    this.getTokensStrategy().removeCodeVerifier()
  }

  public setMockTokens(): void {
    this.setTokens({
      expires_at: 0,
      access_token: '',
      id_token: '',
      refresh_token: '',
      scope: '',
      token_type: '',
    })
  }

  public setTokens(tokens?: OAuth2Tokens): void {
    if (tokens === undefined) {
      return
    }

    this.getTokensStrategy().setTokens(tokens)
  }
}
