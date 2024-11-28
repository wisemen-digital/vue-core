/* eslint-disable no-console */
import type { AxiosInstance } from 'axios'

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
}

interface Token {
  exp: number
}

export const CODE_VERIFIER_KEY = 'code_verifier'
const LOCAL_STORAGE_KEY = 'tokens'

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

    return response.data
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
    localStorage.removeItem(LOCAL_STORAGE_KEY)
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
    const tokens = localStorage.getItem(LOCAL_STORAGE_KEY)

    if (tokens === null) {
      return null
    }

    return JSON.parse(tokens as string) as OAuth2Tokens
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
    const codeVerifier = localStorage.getItem(CODE_VERIFIER_KEY)

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

    localStorage.removeItem(CODE_VERIFIER_KEY)

    this.setTokens(response.data)
  }

  public setMockTokens(): void {
    const mockTokens = {
      expires_at: 0,
      access_token: '',
      id_token: '',
      refresh_token: '',
      scope: '',
      token_type: '',
    }

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(mockTokens))
  }

  public setTokens(tokens: OAuth2Tokens): void {
    const expirationInSecondsSinceUnixEpoch = decodeToken(tokens.id_token).exp

    const tokensWithExpiration = {
      expires_at: expirationInSecondsSinceUnixEpoch * 1000,
      access_token: tokens.access_token,
      id_token: tokens.id_token,
      refresh_token: tokens.refresh_token,
      scope: tokens.scope,
      token_type: tokens.token_type,
    }

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tokensWithExpiration))
  }
}
