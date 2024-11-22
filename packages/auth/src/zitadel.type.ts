import type { AxiosInstance } from 'axios'

import type { TokensStrategy } from './tokensStrategy.type'

export interface ZitadelUser {
  updated_at: number
  name: string
  email: string
  email_verified: boolean
  family_name: string
  given_name: string
  locale: null | string
  preferred_username: string
  sub: string
}

export interface OAuth2VueClientOptions {
  /*
  * The client ID
  */
  clientId: string
  /*
  * The organization ID
  */
  organizationId: string
  /*
  * The Axios instance to use for requests
  */
  axios: AxiosInstance
  /*
  * The base URL of the OAuth2 server
  */
  baseUrl: string
  /*
  * The URL to redirect to after login
  */
  loginRedirectUri: string
  /*
   * If offline is true, the client wil bypass everything and work without a real login
   */
  offline?: boolean
  /*
  * The URL to redirect to after logout
  */
  postLogoutRedirectUri: string
  /*
  * The scopes to request from the OAuth2 server
  * Default: ['openid', 'profile', 'email', 'offline_access', `urn:zitadel:iam:org:id:${organizationId}`]
  */
  scopes?: string[]

  /*
  * The tokens strategy to use
  * Default: localStorageStrategy
  */
  tokensStrategy?: TokensStrategy

}
