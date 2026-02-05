import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from 'vitest'

import type { OAuthClientOptions } from './oidc.type'
import { OidcClient } from './oidcClient'

const mockStateStoreCalls = vi.hoisted((): Array<{ prefix?: string
  store?: Storage }> => [])
const mockOidcClientSettings = vi.hoisted((): Array<Record<string, unknown>> => [])
const mockUserManagerInstances = vi.hoisted((): Array<unknown> => [])
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

    constructor(settings: Record<string, unknown>) {
      mockOidcClientSettings.push(settings)
    }
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
      mockUserManagerInstances.push(this)
    }
  }

  return {
    OidcClient,
    UserManager,
    WebStorageStateStore,
  }
})

const BASE_OPTIONS: OAuthClientOptions = {
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

async function flushPromises(count: number = 2): Promise<void> {
  for (let index = 0; index < count; index += 1) {
    await Promise.resolve()
  }
}

function createClient(options: Partial<OAuthClientOptions> = {}): OidcClient {
  return new OidcClient({
    ...BASE_OPTIONS,
    ...options,
  })
}

describe('oidcClient', () => {
  beforeEach(() => {
    vi.clearAllMocks()

    mockCreateSigninRequest.mockResolvedValue({
      url: 'https://issuer.example.com/authorize',
    })
    mockGetMetadata.mockResolvedValue({
      end_session_endpoint: 'https://issuer.example.com/oidc/v1/end_session',
      userinfo_endpoint: 'https://issuer.example.com/oidc/v1/userinfo',
    })
    mockGetUser.mockResolvedValue(null)
    mockClearStaleState.mockResolvedValue(null)
    mockRevokeTokens.mockResolvedValue(null)
    mockSigninRedirectCallback.mockResolvedValue({
      url_state: '/dashboard',
    })
    mockSigninSilent.mockResolvedValue(null)

    mockOidcClientSettings.length = 0
    mockStateStoreCalls.length = 0
    mockUserManagerInstances.length = 0
    mockUserManagerSettings.length = 0

    window.history.replaceState({}, '', 'https://app.example.com/')
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('creates clients with secure defaults and namespaced storage', () => {
    const client = createClient({
      scopes: [
        'profile',
        'email',
        'email',
      ],
      storage: 'session',
    })

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

  it('defaults prefix and scopes when omitted from config', () => {
    const client = new OidcClient({
      clientId: BASE_OPTIONS.clientId,
      baseUrl: BASE_OPTIONS.baseUrl,
      loginRedirectUri: BASE_OPTIONS.loginRedirectUri,
      postLogoutRedirectUri: BASE_OPTIONS.postLogoutRedirectUri,
    })

    expect(client).toBeInstanceOf(OidcClient)
    expect(mockUserManagerSettings[0]).toMatchObject({
      scope: 'openid profile email',
    })
    expect(mockStateStoreCalls).toContainEqual(expect.objectContaining({
      prefix: 'wisemen.auth.state.',
      store: window.localStorage,
    }))
  })

  it('throws when requested storage is unavailable and fallback is disallowed', () => {
    const localStorageGetSpy = vi.spyOn(window, 'localStorage', 'get')

    localStorageGetSpy.mockImplementation(() => {
      throw new Error('storage unavailable')
    })

    expect(() => createClient({
      storage: 'local',
      storageFallback: 'disallow',
    })).toThrowError(`Unable to use requested 'local' storage`)

    localStorageGetSpy.mockRestore()
  })

  it('rejects insecure configuration for non-localhost http URLs', () => {
    expect(() => new OidcClient({
      ...BASE_OPTIONS,
      baseUrl: 'http://issuer.example.com',
    })).toThrowError('baseUrl must use HTTPS')
  })

  it('allows customizing session monitoring and clock skew settings', () => {
    createClient({
      checkSessionIntervalInSeconds: 15,
      clockSkewInSeconds: 10,
      monitorSession: true,
    })

    expect(mockUserManagerSettings[0]).toMatchObject({
      checkSessionIntervalInSeconds: 15,
      monitorSession: true,
    })
  })

  it('clearAuthState clears user and stale state', async () => {
    const client = createClient()

    await client.clearAuthState()

    expect(mockRemoveUser).toHaveBeenCalledTimes(1)
    expect(mockClearStaleState).toHaveBeenCalledTimes(1)
  })

  it('ensureBrowserEnvironment validates browser globals', () => {
    const client = createClient()

    expect(() => client.ensureBrowserEnvironment()).not.toThrowError()
  })

  it('ensureBrowserEnvironment throws when called outside a browser environment', () => {
    const client = Object.create(OidcClient.prototype) as OidcClient

    vi.stubGlobal('window', undefined as unknown as Window & typeof globalThis)

    expect(() => client.ensureBrowserEnvironment()).toThrowError('OidcClient requires a browser environment')
  })

  it('getAccessToken returns an empty string when no user exists', async () => {
    const client = createClient()

    await expect(client.getAccessToken()).resolves.toBe('')
  })

  it('getAccessToken refreshes expired users once for concurrent callers', async () => {
    mockGetUser.mockResolvedValue({
      access_token: 'expired',
      expired: true,
    })
    mockSigninSilent.mockResolvedValue({
      access_token: 'fresh-token',
      expired: false,
    })

    const client = createClient()
    const [
      tokenA,
      tokenB,
    ] = await Promise.all([
      client.getAccessToken(),
      client.getAccessToken(),
    ])

    expect(tokenA).toBe('fresh-token')
    expect(tokenB).toBe('fresh-token')
    expect(mockSigninSilent).toHaveBeenCalledTimes(1)
  })

  it('emits refresh lifecycle events and keeps state for transient refresh errors', async () => {
    const onEvent = vi.fn()

    mockGetUser.mockResolvedValue({
      access_token: 'expired',
      expired: true,
    })
    mockSigninSilent.mockRejectedValue(new Error('NetworkError: Failed to fetch'))

    const client = createClient({
      onEvent,
    })

    await expect(client.getAccessToken()).resolves.toBe('')
    expect(mockRemoveUser).not.toHaveBeenCalled()
    expect(onEvent).toHaveBeenCalledWith({
      type: 'token_refresh_started',
    })
    expect(onEvent).toHaveBeenCalledWith(expect.objectContaining({
      terminal: false,
      type: 'token_refresh_failed',
    }))
  })

  it('clears auth state on terminal refresh errors', async () => {
    mockGetUser.mockResolvedValue({
      access_token: 'expired',
      expired: true,
    })
    mockSigninSilent.mockRejectedValue(new Error('login_required'))

    const client = createClient()

    await expect(client.getAccessToken()).resolves.toBe('')
    expect(mockRemoveUser).toHaveBeenCalledTimes(1)
    expect(mockClearStaleState).toHaveBeenCalledTimes(1)
  })

  it('keeps using the current token when proactive refresh fails but token is not yet expired', async () => {
    mockGetUser.mockResolvedValue({
      expires_at: Math.floor(Date.now() / 1000) + 5,
      access_token: 'still-valid-token',
      expired: false,
    })
    mockSigninSilent.mockRejectedValue(new Error('NetworkError: Failed to fetch'))

    const client = createClient({
      clockSkewInSeconds: 30,
    })

    await expect(client.getAccessToken()).resolves.toBe('still-valid-token')
    expect(mockRemoveUser).not.toHaveBeenCalled()
  })

  it('getClient returns the current user manager instance', () => {
    const client = createClient()

    expect(client.getClient()).toBe(mockUserManagerInstances[0])
  })

  it('getLoginUrl sanitizes state and filters reserved OIDC query params', async () => {
    const client = createClient()

    const loginUrl = await client.getLoginUrl({
      client_id: 'malicious-client',
      prompt: 'none',
      state: 'https://evil.example.com/steal',
      tenant: 'acme',
    })

    expect(loginUrl).toBe('https://issuer.example.com/authorize')
    expect(mockCreateSigninRequest).toHaveBeenCalledWith({
      extraQueryParams: {
        tenant: 'acme',
      },
      url_state: '/',
    })
  })

  it('getLogoutUrl uses discovered end-session metadata', async () => {
    const client = createClient()

    await flushPromises()

    const logoutUrl = new URL(client.getLogoutUrl())

    expect(logoutUrl.toString()).toContain('https://issuer.example.com/oidc/v1/end_session')
    expect(logoutUrl.searchParams.get('post_logout_redirect_uri')).toBe(BASE_OPTIONS.postLogoutRedirectUri)
    expect(logoutUrl.searchParams.get('client_id')).toBe(BASE_OPTIONS.clientId)
  })

  it('getLogoutUrl falls back to postLogoutRedirectUri when metadata is unavailable', async () => {
    mockGetMetadata.mockRejectedValue(new Error('metadata unavailable'))

    const client = createClient()

    await flushPromises()

    expect(client.getLogoutUrl()).toBe(BASE_OPTIONS.postLogoutRedirectUri)
  })

  it('getUserInfo requests user profile with bearer auth header', async () => {
    mockGetUser.mockResolvedValue({
      access_token: 'access-token',
      expired: false,
    })

    const userInfoResponse = {
      updated_at: 1_715_762_742,
      name: 'John Doe',
      email: 'john.doe@example.com',
      email_verified: true,
      family_name: 'Doe',
      given_name: 'John',
      locale: 'en',
      preferred_username: 'john.doe',
      sub: 'sub-id',
    }

    const fetchMock = vi.fn().mockResolvedValue(new Response(JSON.stringify(userInfoResponse), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 200,
    }))

    vi.stubGlobal('fetch', fetchMock)

    const client = createClient()
    const userInfo = await client.getUserInfo()

    expect(userInfo).toEqual(userInfoResponse)
    expect(fetchMock).toHaveBeenCalledTimes(1)

    const [
      userInfoUrl,
      requestOptions,
    ] = fetchMock.mock.calls[0] as [
      string,
      RequestInit,
    ]

    expect(userInfoUrl).toBe('https://issuer.example.com/oidc/v1/userinfo')
    expect((requestOptions.headers as Headers).get('Authorization')).toBe('Bearer access-token')
  })

  it('getUserInfo throws when no access token exists', async () => {
    const fetchMock = vi.fn()

    vi.stubGlobal('fetch', fetchMock)

    const client = createClient()

    await expect(client.getUserInfo()).rejects.toThrowError('Failed to fetch user info: access token is missing')
    expect(fetchMock).not.toHaveBeenCalled()
  })

  it('getUserInfo fails when metadata has no userinfo endpoint and no override is configured', async () => {
    mockGetMetadata.mockResolvedValue({
      end_session_endpoint: 'https://issuer.example.com/oidc/v1/end_session',
    })
    mockGetUser.mockResolvedValue({
      access_token: 'access-token',
      expired: false,
    })
    vi.stubGlobal('fetch', vi.fn())

    const client = createClient()

    await flushPromises()
    await expect(client.getUserInfo()).rejects.toThrowError(
      'userinfo_endpoint is missing from OIDC metadata and was not configured explicitly',
    )
  })

  it('getUserInfo clears auth state when userinfo endpoint returns an error', async () => {
    mockGetUser.mockResolvedValue({
      access_token: 'access-token',
      expired: false,
    })
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response(null, {
      status: 401,
    })))

    const client = createClient()

    await expect(client.getUserInfo()).rejects.toThrowError('Failed to fetch user info (401)')
    expect(mockRemoveUser).toHaveBeenCalledTimes(1)
    expect(mockClearStaleState).toHaveBeenCalledTimes(1)
  })

  it('handleRedirectCallback validates required state param and clears auth on failures', async () => {
    const client = createClient()

    window.history.replaceState({}, '', 'https://app.example.com/auth/callback?code=abc')

    await expect(client.handleRedirectCallback()).rejects.toThrowError('Missing state parameter in login callback URL')
    expect(mockRemoveUser).toHaveBeenCalledWith()
    expect(window.location.href).toBe('https://app.example.com/auth/callback')
  })

  it('handleRedirectCallback removes OIDC callback params after successful callback', async () => {
    const client = createClient()

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

  it('isLoggedIn returns true only when user has a non-empty access token', async () => {
    mockGetUser.mockResolvedValue({
      access_token: 'valid-token',
      expired: false,
    })

    const client = createClient()

    await expect(client.isLoggedIn()).resolves.toBeTruthy()

    mockGetUser.mockResolvedValue({
      access_token: '',
      expired: false,
    })

    await expect(client.isLoggedIn()).resolves.toBeFalsy()
  })

  it('isLoggedIn clears auth state and rethrows on underlying errors', async () => {
    mockGetUser.mockRejectedValue(new Error('user lookup failed'))

    const client = createClient()

    await expect(client.isLoggedIn()).rejects.toThrowError('user lookup failed')
    expect(mockRemoveUser).toHaveBeenCalledTimes(1)
    expect(mockClearStaleState).toHaveBeenCalledTimes(1)
  })

  it('logout always clears auth state, even when token revocation fails', async () => {
    mockRevokeTokens.mockRejectedValue(new Error('revocation failed'))

    const client = createClient()

    await expect(client.logout()).resolves.toBeUndefined()
    expect(mockRevokeTokens).toHaveBeenCalledTimes(1)
    expect(mockRemoveUser).toHaveBeenCalledTimes(1)
    expect(mockClearStaleState).toHaveBeenCalledTimes(1)
  })

  it('sanitizeRedirectUrl enforces allowed and blocked path rules', () => {
    const client = createClient({
      allowedPaths: [
        '/app/*',
        'https://app.example.com/portal?tab=1',
      ],
      blockedPaths: [
        '/app/admin/*',
      ],
    })

    expect(client.sanitizeRedirectUrl('/app/dashboard')).toBe('/app/dashboard')
    expect(client.sanitizeRedirectUrl('/app/admin/users')).toBe('/')
    expect(client.sanitizeRedirectUrl('https://evil.example.com/steal')).toBe('/')
    expect(client.sanitizeRedirectUrl('/outside')).toBe('/')
    expect(client.sanitizeRedirectUrl('/portal')).toBe('/portal')
  })

  it('setConfig recreates internal clients and re-runs metadata prefetch', async () => {
    const client = createClient()

    await flushPromises()

    client.setConfig({
      prefix: 'updated-prefix',
      scopes: [
        'email',
      ],
      silentRedirectUri: 'https://app.example.com/auth/silent-callback',
      storage: 'session',
    })
    await flushPromises()

    const updatedUserManagerSettings = mockUserManagerSettings[1]

    expect(mockUserManagerSettings).toHaveLength(2)
    expect(mockOidcClientSettings).toHaveLength(2)
    expect(mockGetMetadata).toHaveBeenCalledTimes(2)
    expect(updatedUserManagerSettings).toMatchObject({
      automaticSilentRenew: true,
      scope: 'openid email',
      silent_redirect_uri: 'https://app.example.com/auth/silent-callback',
    })
    expect(mockStateStoreCalls).toContainEqual(expect.objectContaining({
      prefix: 'updated-prefix.user.',
      store: window.sessionStorage,
    }))
  })
})
