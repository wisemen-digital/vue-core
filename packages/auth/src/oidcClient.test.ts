import {
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from 'vitest'

import { OidcClient } from './oidcClient'

const mockStateStoreCalls = vi.hoisted((): Array<{ prefix?: string
  store?: Storage }> => [])
const mockCreateSigninRequest = vi.hoisted(() => vi.fn())
const mockGetMetadata = vi.hoisted(() => vi.fn())
const mockGetUser = vi.hoisted(() => vi.fn())
const mockClearStaleState = vi.hoisted(() => vi.fn())
const mockRemoveUser = vi.hoisted(() => vi.fn())
const mockRevokeTokens = vi.hoisted(() => vi.fn())
const mockSigninRedirectCallback = vi.hoisted(() => vi.fn())
const mockSigninSilent = vi.hoisted(() => vi.fn())
const mockUserManagerSettings = vi.hoisted((): Array<Record<string, unknown>> => [])

vi.mock('oidc-client-ts', () => {
  class WebStorageStateStore {
    constructor(options: { prefix?: string
      store?: Storage }) {
      mockStateStoreCalls.push(options)
    }
  }

  class OidcClient {
    createSigninRequest = mockCreateSigninRequest

    constructor(_settings: Record<string, unknown>) {}
  }

  class UserManager {
    clearStaleState = mockClearStaleState

    getUser = mockGetUser

    public readonly metadataService = {
      getMetadata: mockGetMetadata,
    }

    removeUser = mockRemoveUser
    revokeTokens = mockRevokeTokens
    signinRedirectCallback = mockSigninRedirectCallback
    signinSilent = mockSigninSilent
    constructor(settings: Record<string, unknown>) {
      mockUserManagerSettings.push(settings)
    }
  }

  return {
    OidcClient,
    UserManager,
    WebStorageStateStore,
  }
})

const BASE_OPTIONS = {
  clientId: 'client-id',
  baseUrl: 'https://issuer.example.com',
  loginRedirectUri: 'https://app.example.com/auth/callback',
  postLogoutRedirectUri: 'https://app.example.com/auth/logout',
  prefix: 'test-prefix',
  scopes: [
    'profile',
    'email',
  ],
}

describe('oidcClient', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockCreateSigninRequest.mockResolvedValue({
      url: 'https://issuer.example.com/authorize',
    })
    mockGetMetadata.mockResolvedValue({
      end_session_endpoint: 'https://issuer.example.com/oidc/v1/end_session',
    })
    mockGetUser.mockResolvedValue(null)
    mockClearStaleState.mockResolvedValue()
    mockRevokeTokens.mockResolvedValue()
    mockSigninRedirectCallback.mockResolvedValue({
      url_state: '/dashboard',
    })
    mockSigninSilent.mockResolvedValue(null)

    mockStateStoreCalls.length = 0
    mockUserManagerSettings.length = 0

    window.history.replaceState({}, '', 'https://app.example.com/')
  })

  it('uses secure defaults and storage namespaces', () => {
    // Missing openid is auto-fixed and storage keys use the configured prefix.
    const client = new OidcClient(BASE_OPTIONS)

    const userManagerSettings = mockUserManagerSettings[0]

    expect(client).toBeInstanceOf(OidcClient)
    expect(userManagerSettings).toBeDefined()
    expect(userManagerSettings.scope).toBe('openid profile email')
    expect(userManagerSettings.automaticSilentRenew).toBeFalsy()
    expect(mockStateStoreCalls).toHaveLength(3)
    expect(mockStateStoreCalls).toContainEqual(expect.objectContaining({
      prefix: 'test-prefix.state.',
      store: window.sessionStorage,
    }))
    expect(mockStateStoreCalls).toContainEqual(expect.objectContaining({
      prefix: 'test-prefix.user.',
      store: window.sessionStorage,
    }))
  })

  it('rejects insecure configuration for non-localhost http URLs', () => {
    expect(() => new OidcClient({
      ...BASE_OPTIONS,
      baseUrl: 'http://issuer.example.com',
    })).toThrowError('baseUrl must use HTTPS')
  })

  it('filters reserved OIDC params from custom query params', async () => {
    const client = new OidcClient(BASE_OPTIONS)

    await client.getLoginUrl({
      client_id: 'malicious-client',
      prompt: 'none',
      state: '/dashboard',
      tenant: 'acme',
    })

    expect(mockCreateSigninRequest).toHaveBeenCalledWith({
      extraQueryParams: {
        tenant: 'acme',
      },
      url_state: '/dashboard',
    })
  })

  it('requires state in callback URL and clears auth state on callback failures', async () => {
    const client = new OidcClient(BASE_OPTIONS)

    window.history.replaceState({}, '', 'https://app.example.com/auth/callback?code=abc')

    await expect(client.handleRedirectCallback()).rejects.toThrowError('Missing state parameter in login callback URL')
    expect(mockRemoveUser).toHaveBeenCalledWith()
  })

  it('cleans OIDC callback params from URL after successful login callback', async () => {
    const client = new OidcClient(BASE_OPTIONS)

    window.history.replaceState(
      {},
      '',
      'https://app.example.com/auth/callback?code=abc&state=state123&iss=https%3A%2F%2Fissuer.example.com',
    )

    const redirectTarget = await client.handleRedirectCallback()

    expect(mockSigninRedirectCallback).toHaveBeenCalledTimes(1)
    expect(redirectTarget).toBe('/dashboard')
    expect(window.location.href).toBe('https://app.example.com/auth/callback')
  })

  it('returns a sanitized fallback target when callback url_state is unsafe', async () => {
    const client = new OidcClient(BASE_OPTIONS)

    mockSigninRedirectCallback.mockResolvedValue({
      url_state: 'https://evil.example.com/steal',
    })
    window.history.replaceState({}, '', 'https://app.example.com/auth/callback?code=abc&state=state123')

    await expect(client.handleRedirectCallback()).resolves.toBe('/')
  })

  it('sanitizes redirects against blocked and cross-origin targets', () => {
    const client = new OidcClient({
      ...BASE_OPTIONS,
      allowedPaths: [
        '/app/*',
      ],
      blockedPaths: [
        '/app/admin/*',
      ],
    })

    expect(client.sanitizeRedirectUrl('/app/dashboard')).toBe('/app/dashboard')
    expect(client.sanitizeRedirectUrl('/app/admin/users')).toBe('/')
    expect(client.sanitizeRedirectUrl('https://evil.example.com/steal')).toBe('/')
    expect(client.sanitizeRedirectUrl('/outside')).toBe('/')
  })

  it('revokes tokens and clears auth state on logout', async () => {
    const client = new OidcClient(BASE_OPTIONS)

    client.logout()
    await Promise.resolve()
    await Promise.resolve()

    expect(mockRevokeTokens).toHaveBeenCalledTimes(1)
    expect(mockRemoveUser).toHaveBeenCalledTimes(1)
    expect(mockClearStaleState).toHaveBeenCalledTimes(1)
  })
})
