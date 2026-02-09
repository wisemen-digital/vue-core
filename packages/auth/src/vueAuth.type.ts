import type {
  Component,
  Ref,
} from 'vue'
import type {
  RouteLocationNormalized,
  RouteLocationRaw,
  RouteRecordRaw,
} from 'vue-router'

import type {
  OAuthClientEvent,
  OAuthClientOptions,
} from './oidc.type'
import type { OidcClient } from './oidcClient'

export interface VueAuthRouteNames {
  callback: string
  login: string
  logout: string
}

export interface VueAuthRoutesOptions {
  basePath?: string
  callbackPath?: string
  callbackRouteName?: string
  loginPath?: string
  loginRouteName?: string
  logoutPath?: string
  logoutRouteName?: string
  postLoginRoute?: RouteLocationRaw
  redirectQueryParam?: string
}

export interface VueAuthRouteComponents {
  callback?: Component
  login?: Component
  logout?: Component
}

export interface VueAuthUserOptions<TUser> {
  isUnauthorizedError?: (error: unknown) => boolean
  clearCurrentUser?: () => void
  fetchCurrentUser: () => Promise<TUser>
  setCurrentUser?: (user: TUser) => void
}

interface VueAuthClientOptions {
  client: OidcClient
  oidc?: never
}

interface VueAuthOidcOptions {
  client?: never
  oidc: OAuthClientOptions
}

export type VueAuthOptions<TUser> = (VueAuthClientOptions | VueAuthOidcOptions) & {
  components?: VueAuthRouteComponents
  getLoginUrl?: (redirectTarget?: string) => Promise<string>
  routes?: VueAuthRoutesOptions
  user?: VueAuthUserOptions<TUser>
  onError?: (error: unknown) => void
  onEvent?: (event: OAuthClientEvent) => void
  onSessionCleared?: () => Promise<void> | void
}

export type VueAuthGuard = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
) => Promise<RouteLocationRaw | void> | RouteLocationRaw | void

export interface VueAuthController<TUser> {
  isAuthenticated: () => Promise<boolean>
  isUserLoading: Readonly<Ref<boolean>>
  clearSession: () => Promise<void>
  ensureAuthenticated: () => Promise<boolean>
  getAccessToken: () => Promise<string>
  getCurrentUser: () => TUser | null
  getLoginRouteLocation: (redirectTarget?: string) => RouteLocationRaw
  handleCallback: () => Promise<string>
  handleUnauthorized: (redirectTarget?: string) => Promise<void>
  login: (redirectTarget?: string) => Promise<void>
  logout: (options?: {
    redirectTarget?: string
    shouldRedirectToLogin?: boolean
  }) => Promise<void>
  redirectIfAuthenticatedGuard: VueAuthGuard
  refetchCurrentUser: () => Promise<TUser | null>
  requireAuthGuard: VueAuthGuard
  routeNames: VueAuthRouteNames
  routes: RouteRecordRaw[]
  user: Readonly<Ref<TUser | null>>
}
