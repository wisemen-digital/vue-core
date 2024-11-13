import type {
  AxiosInstance,
  AxiosStatic,
} from 'axios'

interface OAuth2ClientOptions {
  clientId: string
  isMock?: boolean
  axios: AxiosInstance | AxiosStatic
  clientSecret: string
  scopes?: string[]
  tokenEndpoint: string
}

export interface OAuth2ClientTokens {
  access_token: string
  expires_in: number
  refresh_token: string
  scope: string
  token_type: string
}

export type OAuth2ClientGrantType = 'ad' | 'password' | 'refresh_token'

interface ClientOptions {
  client_id: string
  client_secret: string
  code?: string
  grant_type: OAuth2ClientGrantType
  password?: string
  scope?: string
  state?: string
  username?: string
}

export interface OAuth2ClientTokensWithExpiration extends OAuth2ClientTokens {
  expires_at: number
}

interface OAuth2VueClientOptions {
  clientId: string
  isMock?: boolean
  axios: AxiosStatic
  clientSecret: string
  scopes?: string[]
  tokenEndpoint: string
}

const MOCK_TOKENS: OAuth2ClientTokensWithExpiration = {
  expires_at: 1000000,
  access_token: 'fake_access_token',
  expires_in: 1000000,
  refresh_token: 'fake_refresh_token',
  scope: '',
  token_type: 'fake_token',
}

export class OAuth2VueClient {
  private client: TokenStore | null = null
  private oAuthFactory: OAuth2Client

  constructor(private readonly options: OAuth2VueClientOptions) {
    this.oAuthFactory = new OAuth2Client({
      clientId: options.clientId,
      isMock: options.isMock,
      axios: options.axios,
      clientSecret: options.clientSecret,
      scopes: options.scopes,
      tokenEndpoint: options.tokenEndpoint,
    })

    const tokens = this.loadTokensFromLocalStorage()

    if (tokens !== null) {
      this.client = this.createClient(tokens)
      this.addAuthorizationHeader(tokens.access_token)
    }
  }

  private addAuthorizationHeader(token: string): void {
    this.options.axios.defaults.headers.Authorization = `Bearer ${token}`
  }

  private createClient(tokens: OAuth2ClientTokensWithExpiration): TokenStore {
    const client = new TokenStore(
      {
        clientId: this.options.clientId,
        isMock: this.options.isMock,
        axios: this.options.axios,
        clientSecret: this.options.clientSecret,
        scopes: this.options.scopes,
        tokenEndpoint: this.options.tokenEndpoint,
      },
      tokens,
    )

    client.onRefreshToken((tokens) => {
      this.saveTokensToLocalStorage(tokens)
    })

    return client
  }

  private loadTokensFromLocalStorage(): OAuth2ClientTokensWithExpiration | null {
    const tokens = localStorage.getItem('tokens')

    if (tokens === null) {
      return null
    }

    return JSON.parse(tokens) as OAuth2ClientTokensWithExpiration
  }

  private removeAuthorizationHeader(): void {
    this.options.axios.defaults.headers.Authorization = null
  }

  private removeClient(): void {
    this.client = null
  }

  private saveTokensToLocalStorage(tokens: OAuth2ClientTokensWithExpiration | null): void {
    if (tokens === null) {
      localStorage.removeItem('tokens')

      return
    }

    localStorage.setItem('tokens', JSON.stringify(tokens))
  }

  public getAxios(): AxiosInstance | AxiosStatic {
    return this.options.axios
  }

  public getClient(): TokenStore | null {
    return this.client
  }

  public isLoggedIn(): boolean {
    const accessToken = this.loadTokensFromLocalStorage()?.access_token

    if (this.options.isMock === true && accessToken === MOCK_TOKENS.access_token) {
      return true
    }

    const client = this.getClient()

    return client?.getTokens() != null
  }

  public async loginAuthorisation(code: string, state: string, grantType: OAuth2ClientGrantType): Promise<void> {
    if (this.options.isMock === true) {
      this.saveTokensToLocalStorage(MOCK_TOKENS)

      return
    }

    const client = await this.oAuthFactory.loginAuthorization(code, state, grantType)

    const tokens = client.getTokens()

    this.saveTokensToLocalStorage(tokens)
    this.client = this.createClient(tokens)

    this.addAuthorizationHeader(tokens.access_token)
  }

  public async loginPassword(username: string, password: string): Promise<void> {
    if (this.options.isMock === true) {
      this.saveTokensToLocalStorage(MOCK_TOKENS)

      return
    }

    const client = await this.oAuthFactory.loginPassword(username, password)

    const tokens = client.getTokens()

    this.saveTokensToLocalStorage(tokens)
    this.client = this.createClient(tokens)

    this.addAuthorizationHeader(tokens.access_token)
  }

  public logout(): void {
    this.saveTokensToLocalStorage(null)
    this.removeClient()
    this.removeAuthorizationHeader()
  }
}

class TokenStore {
  private _promise: Promise<void> | null = null
  private onTokensRefreshedCallback: ((tokens: OAuth2ClientTokensWithExpiration) => void) | null = null

  constructor(private readonly options: OAuth2ClientOptions, private tokens: OAuth2ClientTokensWithExpiration) {
  }

  private accessTokenExpired(): boolean {
    return Date.now() >= this.tokens.expires_at
  }

  private async getNewAccessToken(refreshToken: string): Promise<OAuth2ClientTokensWithExpiration> {
    const request = {
      client_id: this.options.clientId,
      client_secret: this.options.clientSecret,
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
      scope: this.options.scopes?.join(' '),
    }

    const response = await this.options.axios.post<OAuth2ClientTokens>(
      this.options.tokenEndpoint,
      request,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    )

    return {
      expires_at: Date.now() + response.data.expires_in * 1000,
      access_token: response.data.access_token,
      expires_in: response.data.expires_in,
      refresh_token: response.data.refresh_token,
      scope: response.data.scope,
      token_type: response.data.token_type,
    }
  }

  private getRefreshToken(): string {
    return this.tokens.refresh_token
  }

  private async refreshToken(): Promise<void> {
    if (this.options.isMock === true) {
      return
    }

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
          console.error('Failed to refresh access token, trying again...')

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

  private setTokens(tokens: OAuth2ClientTokensWithExpiration): void {
    this.tokens = tokens
    this.onTokensRefreshedCallback?.(tokens)
  }

  public async getAccessToken(): Promise<string> {
    if (this.accessTokenExpired()) {
      await this.refreshToken()
    }

    return this.tokens.access_token
  }

  public getTokens(): OAuth2ClientTokensWithExpiration {
    return this.tokens
  }

  public onRefreshToken(callback: (tokens: OAuth2ClientTokensWithExpiration) => void): void {
    this.onTokensRefreshedCallback = callback
  }
}

class OAuth2Client {
  constructor(private readonly options: OAuth2ClientOptions) {}

  private async login(clientOptions: ClientOptions): Promise<TokenStore> {
    const { data } = await this.options.axios.post<OAuth2ClientTokens>(this.options.tokenEndpoint, clientOptions, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })

    return new TokenStore(this.options, {
      ...data,
      expires_at: Date.now() + data.expires_in * 1000,
    })
  }

  public async loginAuthorization(code: string, state: string, grantType: OAuth2ClientGrantType): Promise<TokenStore> {
    return await this.login({
      client_id: this.options.clientId,
      client_secret: this.options.clientSecret,
      code,
      grant_type: grantType,
      scope: this.options.scopes?.join(' '),
      state,
    })
  }

  public async loginPassword(username: string, password: string): Promise<TokenStore> {
    return await this.login({
      client_id: this.options.clientId,
      client_secret: this.options.clientSecret,
      grant_type: 'password',
      password,
      scope: this.options.scopes?.join(' '),
      username,
    })
  }
}
