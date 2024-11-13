import axios from 'axios'
import {
  describe,
  expect,
  it,
  vi,
} from 'vitest'

import { OAuth2VueClient } from '../src'
import type { OAuth2ClientTokensWithExpiration } from '../src/oAuthClient'

describe('oAuth2VueClient', () => {
  const CLIENT_ID = 'client_id'
  const CLIENT_SECRET = 'client_secret'
  const TOKEN_ENDPOINT = `auth`

  const MOCK_TOKENS: OAuth2ClientTokensWithExpiration = {
    expires_at: Date.now() + 3600 * 1000,
    access_token: 'access_token',
    expires_in: 3600,
    refresh_token: 'refresh_token',
    scope: 'scope',
    token_type: 'token_type',
  }

  describe('constructor', () => {
    it('creates a new client using the constructor', () => {
      expect(1).toBe(1)

      const oAuthClient = new OAuth2VueClient({
        clientId: CLIENT_ID,
        axios,
        clientSecret: CLIENT_SECRET,
        tokenEndpoint: TOKEN_ENDPOINT,
      })

      expect(oAuthClient).toBeDefined()
    })

    it('should not add the authorization header to axios in the constructor if they do not exist', () => {
      localStorage.removeItem('tokens')

      const oAuthClient = new OAuth2VueClient({
        clientId: CLIENT_ID,
        axios,
        clientSecret: CLIENT_SECRET,
        tokenEndpoint: TOKEN_ENDPOINT,
      })

      const actualHeaders = oAuthClient.getAxios().defaults.headers.Authorization

      expect(actualHeaders).toBeUndefined()
    })

    it('should add the authorization header to axios in the constructor if they exist', () => {
      localStorage.setItem('tokens', JSON.stringify(MOCK_TOKENS))

      const oAuthClient = new OAuth2VueClient({
        clientId: CLIENT_ID,
        axios,
        clientSecret: CLIENT_SECRET,
        tokenEndpoint: TOKEN_ENDPOINT,
      })

      const actualHeaders = oAuthClient.getAxios().defaults.headers.Authorization

      expect(actualHeaders).toBe('Bearer access_token')
    })
  })

  it('authenticates using a password', async () => {
    const oAuthClient = new OAuth2VueClient({
      clientId: CLIENT_ID,
      axios,
      clientSecret: CLIENT_SECRET,
      tokenEndpoint: TOKEN_ENDPOINT,
    })

    vi.spyOn(axios, 'post').mockResolvedValue({ data: MOCK_TOKENS })

    await oAuthClient.loginPassword('username', 'password')

    const actualTokens = oAuthClient.getClient()?.getTokens()

    const expectedTokens = {
      ...MOCK_TOKENS,
      expires_at: actualTokens?.expires_at,
    }

    expect(actualTokens).toStrictEqual(expectedTokens)
  })

  it('adds tokens to localStorage on login', async () => {
    const oAuthClient = new OAuth2VueClient({
      clientId: CLIENT_ID,
      axios,
      clientSecret: CLIENT_SECRET,
      tokenEndpoint: TOKEN_ENDPOINT,
    })

    vi.spyOn(axios, 'post').mockResolvedValue({ data: MOCK_TOKENS })

    await oAuthClient.loginPassword('username', 'password')

    const actualTokens = JSON.parse(localStorage.getItem('tokens') as string) as OAuth2ClientTokensWithExpiration

    const expectedTokens = {
      ...MOCK_TOKENS,
      expires_at: actualTokens.expires_at,
    }

    expect(actualTokens).toStrictEqual(expectedTokens)
  })

  it('removes tokens from localStorage on logout', async () => {
    const oAuthClient = new OAuth2VueClient({
      clientId: CLIENT_ID,
      axios,
      clientSecret: CLIENT_SECRET,
      tokenEndpoint: TOKEN_ENDPOINT,
    })

    vi.spyOn(axios, 'post').mockResolvedValue({ data: MOCK_TOKENS })

    await oAuthClient.loginPassword('username', 'password')

    expect(localStorage.getItem('tokens')).not.toBeNull()

    oAuthClient.logout()

    expect(localStorage.getItem('tokens')).toBeNull()
  })
})
