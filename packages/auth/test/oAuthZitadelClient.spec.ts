import { Buffer } from 'node:buffer'

import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from 'vitest'

import type {
  OAuth2VueClientOptions,
  ZitadelUser,
} from '../src'
import { ZitadelClient } from '../src'
import type { OAuth2Tokens } from '../src/apiClient'

let mockAxios: AxiosMockAdapter

interface Token {
  exp: number
}

function encodeJwt(token: Token): string {
  const header = Buffer.from(JSON.stringify({ alg: 'RS256', typ: 'JWT' })).toString('base64')

  const payload = Buffer.from(JSON.stringify(token)).toString('base64')

  return `${header}.${payload}.signature`
}

const mockAccessToken = encodeJwt({ exp: Date.now() })
const mockExpiresAt = Date.now() + 1000

const mockTokens: OAuth2Tokens = {
  expires_at: mockExpiresAt,
  access_token: mockAccessToken,
  id_token: 'id_token_value',
  refresh_token: 'refresh_token_value',
  scope: 'openid',
  token_type: 'Bearer',
}

const BASE_URL = 'http://auth.base.url'

const axiosInstance = axios.create({
  baseURL: BASE_URL,
})

const clientOptions: OAuth2VueClientOptions = {
  clientId: 'client_id_value',
  organizationId: 'organization_id_value',
  axios: axiosInstance,
  baseUrl: BASE_URL,
  loginRedirectUri: '/login',
  offline: false,
  postLogoutRedirectUri: '/post-logout',
}

describe('oAuth2ZitadelClient', () => {
  let client: ZitadelClient

  beforeEach(() => {
    // eslint-disable-next-line ts/ban-ts-comment
    // @ts-ignore MockAdapter is not typed correctly https://github.com/ctimmerm/axios-mock-adapter/issues/400
    mockAxios = new AxiosMockAdapter(axiosInstance)
    client = new ZitadelClient(clientOptions)
  })

  afterEach(() => {
    mockAxios.reset()
  })

  describe('constructor', () => {
    it('should initialize a new TokenStore with the correct clientId and tokenEndpoint', () => {
      const tokenStore = client.getClient()

      expect(tokenStore).not.toBeNull()
    })

    it('should set the Authorization header if tokens exist', () => {
      localStorage.setItem('tokens', JSON.stringify(mockTokens))

      const zitadelClient = new ZitadelClient(clientOptions)

      const authorizationHeader = zitadelClient.getAxios().defaults.headers.Authorization

      expect(authorizationHeader).toBe(`Bearer ${mockAccessToken}`)
    })

    it('should not set the Authorization header if tokens do not exist', () => {
      localStorage.removeItem('tokens')

      const zitadelClient = new ZitadelClient(clientOptions)

      const authorizationHeader = zitadelClient.getAxios().defaults.headers.Authorization

      expect(authorizationHeader).toBeUndefined()
    })
  })

  describe('getLoginUrl', () => {
    it('should generate the login URL with PKCE challenge', async () => {
      const pkceSpy = vi.spyOn(client, 'getLoginUrl').mockResolvedValueOnce('code_challenge_value')
      const url = await client.getLoginUrl()

      expect(pkceSpy).toHaveBeenCalledWith()
      expect(url).toContain('code_challenge_value')
      pkceSpy.mockRestore()
    })
  })

  describe('getLogoutUrl', () => {
    it('should generate the logout URL', () => {
      const url = client.getLogoutUrl()

      expect(url).toContain('http://auth.base.url/oidc/v1/end_session?client_id=client_id_value&post_logout_redirect_uri=%2Fpost-logout')
    })
  })

  describe('getUserInfo', () => {
    it('should fetch user info from the userInfo endpoint', async () => {
      localStorage.setItem('tokens', JSON.stringify(mockTokens))

      const user: ZitadelUser = {
        updated_at: 0,
        name: 'test',
        email: 'test@test.com',
        email_verified: false,
        family_name: 'test',
        given_name: 'test',
        locale: 'en',
        preferred_username: 'test',
        sub: 'test',
      }

      mockAxios.onGet('/oidc/v1/userinfo').reply(200, user)

      const userInfo = await client.getUserInfo()

      expect(userInfo).toStrictEqual(user)
    })

    it('should throw an error if client is not logged in', async () => {
      localStorage.removeItem('tokens')
      client.logout()

      await expect(client.getUserInfo()).rejects.toThrow('Client is not initialized')
    })
  })

  describe('loginWithCode', () => {
    it('should perform login using authorization code', async () => {
      localStorage.setItem('code_verifier', 'code_verifier_value')

      mockAxios.onPost('/oauth/v2/token').reply(200, mockTokens)

      await client.loginWithCode('authorization_code_value')

      const storedTokens = JSON.parse(localStorage.getItem('tokens') as string)

      const axiosInstance = client.getAxios()

      expect(storedTokens.access_token).toBe(mockAccessToken)
      expect(axiosInstance.defaults.headers.Authorization).toBe(`Bearer ${mockAccessToken}`)
    })
  })

  describe('logout', () => {
    it('should clear tokens on logout', () => {
      const zitadelClient = new ZitadelClient(clientOptions)

      localStorage.setItem('tokens', JSON.stringify(mockTokens))

      expect(zitadelClient.getClient().getTokens()).toStrictEqual(mockTokens)

      zitadelClient.logout()

      expect(localStorage.getItem('tokens')).toBeNull()
    })
  })

  describe('isLoggedIn', () => {
    it('should return true if tokens exist', () => {
      localStorage.setItem('tokens', JSON.stringify(mockTokens))

      expect(client.isLoggedIn()).toBeTruthy()
    })

    it('should return false if tokens do not exist', () => {
      localStorage.removeItem('tokens')

      expect(client.isLoggedIn()).toBeFalsy()
    })
  })
})
