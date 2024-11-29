import type { AxiosInstance } from 'axios'

import type { OAuth2Tokens } from '../apiClient'
import type { ZitadelUser } from '../zitadel.type'
import type {
  FetchStrategy,
  FetchStrategyGetNewAccessTokenOptions,
  FetchStrategyGetUserInfoOptions,
  FetchStrategyLoginWithCodeOptions,
} from './fetchStrategy.type'

export class AxiosFetchStrategy implements FetchStrategy<AxiosInstance> {
  private axios: AxiosInstance
  constructor(axiosInstance: AxiosInstance) {
    this.axios = axiosInstance
  }

  public getFetchInstance(): AxiosInstance {
    return this.axios
  }

  public async getNewAccessToken(options: FetchStrategyGetNewAccessTokenOptions): Promise<OAuth2Tokens> {
    const response = await this.axios.post<OAuth2Tokens>(
      options.url,
      {
        client_id: options.clientId,
        grant_type: 'refresh_token',
        refresh_token: options.refreshToken,
        scope: options.scope,
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    )

    return response.data
  }

  public async getUserInfo(options: FetchStrategyGetUserInfoOptions): Promise<ZitadelUser> {
    const response = await this.axios.get(options.url, {
      headers: {
        Authorization: `Bearer ${options.accessToken}`,
      },
    })

    return response.data
  }

  public async loginWithCode(options: FetchStrategyLoginWithCodeOptions): Promise<OAuth2Tokens> {
    const response = await this.axios.post<OAuth2Tokens>(options.url, {
      client_id: options.clientId,
      code: options.code,
      code_verifier: options.codeVerifier,
      grant_type: 'authorization_code',
      redirect_uri: options.redirectUri,
    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })

    return response.data
  }

  public removeAuthorizationHeader(): void {
    this.axios.defaults.headers.Authorization = null
  }

  public setAuthorizationHeader(accessToken: string): void {
    this.axios.defaults.headers.Authorization = `Bearer ${accessToken}`
  }
}
