import {
  defineComponent,
  h,
  onMounted,
  readonly,
  ref,
  shallowRef,
} from 'vue'
import type {
  RouteLocationNormalized,
  RouteLocationRaw,
} from 'vue-router'
import { useRoute } from 'vue-router'

import { OidcClient } from './oidcClient'
import type {
  VueAuthController,
  VueAuthOptions,
  VueAuthRouteNames,
  VueAuthRoutesOptions,
  VueAuthUserOptions,
} from './vueAuth.type'

const DEFAULT_BASE_PATH = '/auth'
const DEFAULT_CALLBACK_PATH = 'callback'
const DEFAULT_CALLBACK_ROUTE_NAME = 'auth-callback'
const DEFAULT_LOGIN_PATH = 'login'
const DEFAULT_LOGIN_ROUTE_NAME = 'auth-login'
const DEFAULT_LOGOUT_PATH = 'logout'
const DEFAULT_LOGOUT_ROUTE_NAME = 'auth-logout'
const DEFAULT_POST_LOGIN_ROUTE = '/'
const DEFAULT_REDIRECT_QUERY_PARAM = 'redirectUrl'

function getDefaultRoutesOptions(): Required<VueAuthRoutesOptions> {
  return {
    basePath: DEFAULT_BASE_PATH,
    callbackPath: DEFAULT_CALLBACK_PATH,
    callbackRouteName: DEFAULT_CALLBACK_ROUTE_NAME,
    loginPath: DEFAULT_LOGIN_PATH,
    loginRouteName: DEFAULT_LOGIN_ROUTE_NAME,
    logoutPath: DEFAULT_LOGOUT_PATH,
    logoutRouteName: DEFAULT_LOGOUT_ROUTE_NAME,
    postLoginRoute: DEFAULT_POST_LOGIN_ROUTE,
    redirectQueryParam: DEFAULT_REDIRECT_QUERY_PARAM,
  }
}

function isUnauthorizedError(error: unknown): boolean {
  if (typeof error !== 'object' || error === null) {
    return false
  }

  const errorObject = error as {
    errors?: Array<{
      code?: number | string
    }>
    status?: number | string
    statusCode?: number | string
  }
  const statusCode = errorObject.statusCode ?? errorObject.status

  if (statusCode === 401 || statusCode === '401') {
    return true
  }

  return errorObject.errors?.some((item) => item.code === 401 || item.code === '401') ?? false
}

function normalizeBasePath(path: string): string {
  const normalizedPath = path.trim()

  if (normalizedPath === '') {
    return DEFAULT_BASE_PATH
  }

  const pathWithPrefix = normalizedPath.startsWith('/')
    ? normalizedPath
    : `/${normalizedPath}`

  if (pathWithPrefix.length > 1 && pathWithPrefix.endsWith('/')) {
    return pathWithPrefix.slice(0, -1)
  }

  return pathWithPrefix
}

function normalizeChildPath(path: string): string {
  const normalizedPath = path.trim()

  if (normalizedPath === '') {
    return DEFAULT_LOGIN_PATH
  }

  return normalizedPath.replace(/^\/+/, '')
}

function getRoutePath(basePath: string, childPath: string): string {
  return `${basePath}/${childPath}`.replace(/\/+/g, '/')
}

function getRedirectFromQuery(rawValue: unknown): string | undefined {
  if (Array.isArray(rawValue)) {
    return typeof rawValue[0] === 'string'
      ? rawValue[0]
      : undefined
  }

  return typeof rawValue === 'string'
    ? rawValue
    : undefined
}

function resolveClient<TUser>(options: VueAuthOptions<TUser>): OidcClient {
  if ('client' in options && options.client !== undefined) {
    return options.client
  }

  return new OidcClient(options.oidc)
}

function renderCallbackStatusView(): ReturnType<typeof h> {
  return h('div', {
    class: 'vue-core-auth-view',
  }, 'Completing sign in...')
}

function renderLoginStatusView(): ReturnType<typeof h> {
  return h('div', {
    class: 'vue-core-auth-view',
  }, 'Redirecting to sign in...')
}

function renderLogoutStatusView(): ReturnType<typeof h> {
  return h('div', {
    class: 'vue-core-auth-view',
  }, 'Signing out...')
}

async function completeCallbackFlow<TUser>(
  controller: Pick<VueAuthController<TUser>, 'handleCallback' | 'handleUnauthorized'>,
  onError: (error: unknown) => void,
): Promise<void> {
  try {
    const redirectTarget = await controller.handleCallback()

    window.location.replace(redirectTarget)
  }
  catch (error) {
    onError(error)
    await controller.handleUnauthorized()
  }
}

export function createVueAuth<TUser>(options: VueAuthOptions<TUser>): VueAuthController<TUser> {
  const client = resolveClient(options)
  const routesOptions = {
    ...getDefaultRoutesOptions(),
    ...options.routes,
  }
  const normalizedBasePath = normalizeBasePath(routesOptions.basePath)
  const loginPath = normalizeChildPath(routesOptions.loginPath)
  const callbackPath = normalizeChildPath(routesOptions.callbackPath)
  const logoutPath = normalizeChildPath(routesOptions.logoutPath)
  const routeNames: VueAuthRouteNames = {
    callback: routesOptions.callbackRouteName,
    login: routesOptions.loginRouteName,
    logout: routesOptions.logoutRouteName,
  }
  const userOptions: VueAuthUserOptions<TUser> | undefined = options.user

  const currentUser = shallowRef<TUser | null>(null)
  const isUserLoading = ref<boolean>(false)
  let unauthorizedPromise: Promise<void> | null = null

  if (options.onEvent !== undefined) {
    client.setConfig({
      onEvent: options.onEvent,
    })
  }

  function onError(error: unknown): void {
    options.onError?.(error)
  }

  function sanitizeRedirectTarget(redirectTarget: string | undefined): string | undefined {
    if (redirectTarget === undefined || redirectTarget === '') {
      return undefined
    }

    return client.sanitizeRedirectUrl(redirectTarget, '/')
  }

  function getLoginRouteLocation(redirectTarget?: string): RouteLocationRaw {
    const sanitizedRedirectTarget = sanitizeRedirectTarget(redirectTarget)

    if (sanitizedRedirectTarget === undefined) {
      return {
        name: routeNames.login,
      }
    }

    return {
      name: routeNames.login,
      query: {
        [routesOptions.redirectQueryParam]: sanitizedRedirectTarget,
      },
    }
  }

  function getLoginRouteUrl(redirectTarget?: string): string {
    const loginUrl = new URL(getRoutePath(normalizedBasePath, loginPath), window.location.origin)
    const sanitizedRedirectTarget = sanitizeRedirectTarget(redirectTarget)

    if (sanitizedRedirectTarget !== undefined) {
      loginUrl.searchParams.set(routesOptions.redirectQueryParam, sanitizedRedirectTarget)
    }

    return loginUrl.toString()
  }

  async function clearCurrentUser(): Promise<void> {
    isUserLoading.value = false
    currentUser.value = null
    userOptions?.clearCurrentUser?.()

    await options.onSessionCleared?.()
  }

  async function clearSession(): Promise<void> {
    try {
      await client.clearAuthState()
    }
    catch (error) {
      onError(error)
    }

    await clearCurrentUser()
  }

  async function isAuthenticated(): Promise<boolean> {
    try {
      return await client.isLoggedIn()
    }
    catch (error) {
      onError(error)
      await clearSession()

      return false
    }
  }

  async function ensureAuthenticated(): Promise<boolean> {
    const isLoggedIn = await isAuthenticated()

    if (!isLoggedIn) {
      return false
    }

    if (userOptions === undefined) {
      return true
    }

    if (currentUser.value !== null) {
      return true
    }

    try {
      isUserLoading.value = true

      const fetchedUser = await userOptions.fetchCurrentUser()

      currentUser.value = fetchedUser
      userOptions.setCurrentUser?.(fetchedUser)

      return true
    }
    catch (error) {
      if (userOptions.isUnauthorizedError?.(error) ?? isUnauthorizedError(error)) {
        await clearSession()

        return false
      }

      onError(error)

      return false
    }
    finally {
      isUserLoading.value = false
    }
  }

  async function login(redirectTarget?: string): Promise<void> {
    const sanitizedRedirectTarget = sanitizeRedirectTarget(redirectTarget)

    try {
      const loginUrl = options.getLoginUrl !== undefined
        ? await options.getLoginUrl(sanitizedRedirectTarget)
        : await client.getLoginUrl(sanitizedRedirectTarget)

      window.location.replace(loginUrl)
    }
    catch (error) {
      onError(error)
    }
  }

  async function handleCallback(): Promise<string> {
    const redirectTarget = await client.handleRedirectCallback()
    const hasSession = await ensureAuthenticated()

    if (!hasSession) {
      throw new Error('Failed to establish an authenticated session after callback')
    }

    return redirectTarget
  }

  async function logout(logoutOptions?: {
    redirectTarget?: string
    shouldRedirectToLogin?: boolean
  }): Promise<void> {
    const shouldRedirectToLogin = logoutOptions?.shouldRedirectToLogin ?? true

    try {
      await client.logout()
    }
    catch (error) {
      onError(error)
      await clearSession()
    }

    await clearCurrentUser()

    if (!shouldRedirectToLogin) {
      return
    }

    window.location.replace(getLoginRouteUrl(logoutOptions?.redirectTarget))
  }

  async function handleUnauthorized(redirectTarget?: string): Promise<void> {
    if (unauthorizedPromise !== null) {
      return await unauthorizedPromise
    }

    unauthorizedPromise = (async (): Promise<void> => {
      await clearSession()

      if (window.location.pathname.startsWith(normalizedBasePath)) {
        return
      }

      const fallbackRedirectTarget = `${window.location.pathname}${window.location.search}${window.location.hash}`

      window.location.replace(getLoginRouteUrl(redirectTarget ?? fallbackRedirectTarget))
    })()
      .finally(() => {
        unauthorizedPromise = null
      })

    return await unauthorizedPromise
  }

  async function getAccessToken(): Promise<string> {
    try {
      return await client.getAccessToken()
    }
    catch (error) {
      onError(error)

      return ''
    }
  }

  async function requireAuthGuard(
    to: RouteLocationNormalized,
    _from: RouteLocationNormalized,
  ): Promise<RouteLocationRaw | void> {
    const isAllowed = await ensureAuthenticated()

    if (isAllowed) {
      return
    }

    return getLoginRouteLocation(to.fullPath)
  }

  async function redirectIfAuthenticatedGuard(
    _to: RouteLocationNormalized,
    _from: RouteLocationNormalized,
  ): Promise<RouteLocationRaw | void> {
    const isAllowed = await ensureAuthenticated()

    if (!isAllowed) {
      return
    }

    return routesOptions.postLoginRoute
  }

  const controller: VueAuthController<TUser> = {
    isAuthenticated,
    isUserLoading: readonly(isUserLoading),
    clearSession,
    ensureAuthenticated,
    getAccessToken,
    getCurrentUser: () => currentUser.value,
    getLoginRouteLocation,
    handleCallback,
    handleUnauthorized,
    login,
    logout,
    redirectIfAuthenticatedGuard,
    requireAuthGuard,
    routeNames,
    routes: [],
    user: readonly(currentUser) as Readonly<typeof currentUser>,
  }

  const defaultLoginComponent = defineComponent({
    name: 'VueCoreAuthLoginView',
    setup() {
      const route = useRoute()

      onMounted(() => {
        const redirectQueryParam = getRedirectFromQuery(route.query[routesOptions.redirectQueryParam])

        void controller.login(redirectQueryParam)
      })

      return renderLoginStatusView
    },
  })

  const defaultCallbackComponent = defineComponent({
    name: 'VueCoreAuthCallbackView',
    setup() {
      onMounted(() => {
        void completeCallbackFlow(controller, onError)
      })

      return renderCallbackStatusView
    },
  })

  const defaultLogoutComponent = defineComponent({
    name: 'VueCoreAuthLogoutView',
    setup() {
      onMounted(() => {
        void controller.logout()
      })

      return renderLogoutStatusView
    },
  })

  controller.routes = [
    {
      path: normalizedBasePath,
      redirect: {
        name: routeNames.login,
      },
      children: [
        {
          name: routeNames.login,
          beforeEnter: controller.redirectIfAuthenticatedGuard,
          path: loginPath,
          component: options.components?.login ?? defaultLoginComponent,
        },
        {
          name: routeNames.callback,
          path: callbackPath,
          component: options.components?.callback ?? defaultCallbackComponent,
        },
        {
          name: routeNames.logout,
          path: logoutPath,
          component: options.components?.logout ?? defaultLogoutComponent,
        },
      ],
    },
  ]

  return controller
}
