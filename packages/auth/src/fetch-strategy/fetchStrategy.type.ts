import type { OAuth2Tokens } from '../apiClient'
import type { ZitadelUser } from '../zitadel.type'

export interface FetchStrategyGetNewAccessTokenOptions {
  clientId: string
  refreshToken: string
  scope?: string
  url: string
}

export interface FetchStrategyGetUserInfoOptions {
  accessToken: string
  url: string
}

export interface FetchStrategyLoginWithCodeOptions {
  clientId: string
  code: string
  codeVerifier: string
  redirectUri: string
  url: string
}
export interface FetchStrategy<TFetchInstance> {

  getFetchInstance: () => TFetchInstance
  getNewAccessToken: (options: FetchStrategyGetNewAccessTokenOptions) => Promise<OAuth2Tokens>
  getUserInfo: (options: FetchStrategyGetUserInfoOptions) => Promise<ZitadelUser>
  loginWithCode: (options: FetchStrategyLoginWithCodeOptions) => Promise<OAuth2Tokens>
  removeAuthorizationHeader: () => void
  setAuthorizationHeader: (accessToken: string) => void
}
