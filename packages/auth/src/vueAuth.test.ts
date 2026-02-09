import {
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from 'vitest'

import type { OidcClient } from './oidcClient'
import { createVueAuth } from './vueAuth'

function createMockClient(options?: {
  isLoggedIn?: boolean
  accessToken?: string
  callbackRedirectTarget?: string
}): OidcClient {
  const client = {
    isLoggedIn: vi.fn().mockResolvedValue(options?.isLoggedIn ?? false),
    clearAuthState: vi.fn().mockImplementation(async () => {}),
    getAccessToken: vi.fn().mockResolvedValue(options?.accessToken ?? 'access-token'),
    getLoginUrl: vi.fn().mockResolvedValue('https://issuer.example.com/login'),
    handleRedirectCallback: vi.fn().mockResolvedValue(options?.callbackRedirectTarget ?? '/dashboard'),
    logout: vi.fn().mockImplementation(async () => {}),
    sanitizeRedirectUrl: vi.fn((redirectTarget: string, fallback: string) => redirectTarget || fallback),
    setConfig: vi.fn(),
  } satisfies Partial<OidcClient>

  return client as unknown as OidcClient
}

describe('createVueAuth', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    window.history.replaceState({}, '', 'https://app.example.com/orders')
  })

  it('creates default auth routes', () => {
    const auth = createVueAuth({
      client: createMockClient(),
    })

    expect(auth.routeNames).toEqual({
      callback: 'auth-callback',
      login: 'auth-login',
      logout: 'auth-logout',
    })
    expect(auth.routes[0]).toMatchObject({
      path: '/auth',
      redirect: {
        name: 'auth-login',
      },
    })
  })

  it('requireAuthGuard redirects unauthenticated users to login with redirect query', async () => {
    const auth = createVueAuth({
      client: createMockClient({
        isLoggedIn: false,
      }),
    })

    await expect(auth.requireAuthGuard({
      fullPath: '/orders/123',
    } as never, {} as never)).resolves.toEqual({
      name: 'auth-login',
      query: {
        redirectUrl: '/orders/123',
      },
    })
  })

  it('redirectIfAuthenticatedGuard redirects authenticated users to post-login route', async () => {
    const auth = createVueAuth({
      client: createMockClient({
        isLoggedIn: true,
      }),
      routes: {
        postLoginRoute: {
          name: 'index',
        },
      },
    })

    await expect(auth.redirectIfAuthenticatedGuard({} as never, {} as never)).resolves.toEqual({
      name: 'index',
    })
  })

  it('ensureAuthenticated loads user through adapter and stores it in package state', async () => {
    const setCurrentUser = vi.fn()
    const auth = createVueAuth({
      client: createMockClient({
        isLoggedIn: true,
      }),
      user: {
        fetchCurrentUser: () => Promise.resolve({
          id: 'user-1',
        }),
        setCurrentUser,
      },
    })

    await expect(auth.ensureAuthenticated()).resolves.toBeTruthy()
    expect(setCurrentUser).toHaveBeenCalledWith({
      id: 'user-1',
    })
    expect(auth.getCurrentUser()).toEqual({
      id: 'user-1',
    })
    expect(auth.user.value).toEqual({
      id: 'user-1',
    })
  })

  it('refetchCurrentUser reloads user and updates package state', async () => {
    const fetchCurrentUser = vi.fn()
      .mockResolvedValueOnce({
        id: 'user-1',
      })
      .mockResolvedValueOnce({
        id: 'user-2',
      })
    const setCurrentUser = vi.fn()
    const auth = createVueAuth({
      client: createMockClient({
        isLoggedIn: true,
      }),
      user: {
        fetchCurrentUser,
        setCurrentUser,
      },
    })

    await expect(auth.ensureAuthenticated()).resolves.toBeTruthy()
    await expect(auth.refetchCurrentUser()).resolves.toEqual({
      id: 'user-2',
    })

    expect(fetchCurrentUser).toHaveBeenCalledTimes(2)
    expect(setCurrentUser).toHaveBeenCalledTimes(2)
    expect(auth.getCurrentUser()).toEqual({
      id: 'user-2',
    })
  })

  it('refetchCurrentUser clears auth state when adapter returns unauthorized error', async () => {
    const clearAuthState = vi.fn().mockImplementation(async () => {})
    const client = createMockClient({
      isLoggedIn: true,
    })

    client.clearAuthState = clearAuthState

    const auth = createVueAuth({
      client,
      user: {
        fetchCurrentUser: vi.fn().mockRejectedValue({
          statusCode: 401,
        }),
      },
    })

    await expect(auth.refetchCurrentUser()).resolves.toBeNull()
    expect(clearAuthState).toHaveBeenCalledTimes(1)
    expect(auth.user.value).toBeNull()
  })

  it('handleUnauthorized is single-flight and clears the session once', async () => {
    let resolveClearStatePromise: ((value: PromiseLike<void> | void) => void) | undefined
    const clearAuthState = vi.fn().mockReturnValue(new Promise<void>((resolve) => {
      resolveClearStatePromise = resolve
    }))
    const client = createMockClient()

    client.clearAuthState = clearAuthState

    const auth = createVueAuth({
      client,
    })

    const firstUnauthorizedPromise = auth.handleUnauthorized('/orders')
    const secondUnauthorizedPromise = auth.handleUnauthorized('/orders')

    expect(clearAuthState).toHaveBeenCalledTimes(1)
    resolveClearStatePromise?.()

    await Promise.all([
      firstUnauthorizedPromise,
      secondUnauthorizedPromise,
    ])

    expect(clearAuthState).toHaveBeenCalledTimes(1)
  })
})
