import type { AxiosInstance } from 'axios'

import type { OAuth2Tokens } from '../apiClient'
import type { ZitadelUser } from '../zitadel.type'
import type {
  FetchStrategy,
  FetchStrategyGetNewAccessTokenOptions,
  FetchStrategyGetUserInfoOptions,
  FetchStrategyLoginWithCodeOptions,
} from './fetchStrategy.type'

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

export function useAxiosFetchStrategy(axiosInstance: AxiosInstance): FetchStrategy<AxiosInstance> {
  const axios = axiosInstance

  async function getNewAccessToken(options: FetchStrategyGetNewAccessTokenOptions): Promise<OAuth2Tokens> {
    const response = await axios.post<OAuth2Tokens>(
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

  async function getUserInfo(options: FetchStrategyGetUserInfoOptions): Promise<ZitadelUser> {
    const response = await axios.get(options.url, {
      headers: {
        Authorization: `Bearer ${options.accessToken}`,
      },
    })

    return response.data
  }

  function setAuthorizationHeader(accessToken: string): void {
    axios.defaults.headers.Authorization = `Bearer ${accessToken}`
  }

  async function loginWithCode(options: FetchStrategyLoginWithCodeOptions): Promise<OAuth2Tokens> {
    const response = await axios.post<OAuth2Tokens>(options.url, {
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

  function removeAuthorizationHeader(): void {
    axios.defaults.headers.Authorization = null
  }

  function getFetchInstance(): AxiosInstance {
    return axios
  }

  return {
    getFetchInstance,
    getNewAccessToken,
    getUserInfo,
    loginWithCode,
    removeAuthorizationHeader,
    setAuthorizationHeader,
  }
}
