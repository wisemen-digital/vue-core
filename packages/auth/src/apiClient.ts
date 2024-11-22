/* eslint-disable no-console */
import type { AxiosInstance } from 'axios'

import { localStorageStrategy } from './localStorageStrategy'
import type { TokensStrategy } from './tokensStrategy.type'
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

interface ApiClientOptions {
  clientId: string
  axios: AxiosInstance
  baseUrl: string
  redirectUri: string
  scopes?: string[]
  tokensStrategy?: TokensStrategy
}

interface Token {
  exp: number
}

function decodeToken(token: string): Token {
  const base64Url = token.split('.')[1]
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map((c) => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`)
      .join(''),
  )

  return JSON.parse(jsonPayload)
}

export class ApiClient {
  private _promise: Promise<void> | null = null

  constructor(private readonly options: ApiClientOptions) {}

  /*
  * @returns base url without trailing slash
  */
  private getBaseUrl(): string {
    return this.options.baseUrl.replace(/\/$/, '')
  }

  private async getNewAccessToken(refreshToken: string): Promise<OAuth2Tokens> {
    const response = await this.options.axios.post<OAuth2Tokens>(
      `${this.getBaseUrl()}/oauth/v2/token`,
      {
        client_id: this.options.clientId,
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
        scope: this.options.scopes?.join(' '),
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    )

    const decodedToken = decodeToken(response.data.access_token)

    return {
      expires_at: decodedToken.exp * 1000,
      access_token: response.data.access_token,
      id_token: response.data.id_token,
      refresh_token: response.data.refresh_token,
      scope: response.data.scope,
      token_type: response.data.token_type,
    }
  }

  private getTokensStrategy(): TokensStrategy {
    return this.options.tokensStrategy ?? localStorageStrategy
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

    const response = await this.options.axios.get(`${this.getBaseUrl()}/oidc/v1/userinfo`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })

    return response.data
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

    const response = await this.options.axios.post<OAuth2Tokens>(`${this.getBaseUrl()}/oauth/v2/token`, {
      client_id: this.options.clientId,
      code,
      code_verifier: codeVerifier,
      grant_type: 'authorization_code',
      redirect_uri: this.options.redirectUri,
    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })

    this.setTokens(response.data)

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
