import type { Component } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

import { AuthCallbackComponent } from '../components/authCallbackComponent'
import { AuthLogoutComponent } from '../components/authLogoutComponent'
import type { MiddlewareFn } from '../middleware/middleware.type'
import { getAuthInstance } from '../plugin/createAuth'

function guestMiddleware(to?: any, from?: any): ReturnType<MiddlewareFn> {
  return getAuthInstance().guestMiddleware(to, from)
}

export interface AuthRoutesOptions {
  /**
   * Override the built-in OAuth2 callback handler.
   * Use this if you need custom error handling, UI, or side effects on callback.
   * Defaults to `AuthCallbackComponent`.
   */
  callbackComponent?: (() => Promise<any>) | Component

  /**
   * Your branded login view. Accepts a sync component or a lazy import factory.
   * This is the only component that must be supplied — it varies per project.
   *
   * @example
   * loginComponent: () => import('@/modules/auth/views/AuthLoginView.vue')
   */
  loginComponent: (() => Promise<any>) | Component

  /**
   * Override the built-in logout handler.
   * Use this if you need custom logout UI or side effects.
   * Defaults to `AuthLogoutComponent`.
   */
  logoutComponent?: (() => Promise<any>) | Component

  /**
   * Customize route names.
   * The login name must match the `routes.login` value you passed to `createAuth()`.
   */
  names?: {
    /** Default: 'auth-callback' */
    callback?: string
    /** Default: 'auth-login' */
    login?: string
    /** Default: 'auth-logout' */
    logout?: string
  }

  /**
   * Customize URL path segments.
   * All paths are relative to `base`.
   */
  paths?: {
    /** Base path prefix. Default: '/auth' */
    base?: string
    /** Callback path segment. Default: 'callback' → '/auth/callback' */
    callback?: string
    /** Login path segment. Default: 'login' → '/auth/login' */
    login?: string
    /** Logout path segment. Default: 'logout' → '/auth/logout' */
    logout?: string
  }
}

/**
 * Generates the standard auth route tree for your Vue Router config.
 *
 * Produces three routes under a common base path:
 * - **login** — your branded login view, protected by the guest middleware
 * - **callback** — OAuth2 authorization code handler (built-in, overridable)
 * - **logout** — clears auth state and redirects to login (built-in, overridable)
 *
 * Route names default to `auth-login`, `auth-callback`, `auth-logout` to match
 * the `createAuth()` defaults. If you use custom names in `createAuth({ routes })`,
 * pass matching `names` here.
 *
 * @example
 * ```ts
 * // router.ts
 * import { createAuthRoutes } from '@wisemen/vue-core-auth'
 *
 * const router = createRouter({
 *   routes: [
 *     ...createAuthRoutes({
 *       loginComponent: () => import('@/modules/auth/views/AuthLoginView.vue'),
 *     }),
 *     ...appRoutes,
 *   ],
 * })
 *
 * auth.setupRouter(router)
 * ```
 */
export function createAuthRoutes(options: AuthRoutesOptions): RouteRecordRaw[] {
  const base = options.paths?.base ?? '/auth'

  const names = {
    callback: options.names?.callback ?? 'auth-callback',
    login: options.names?.login ?? 'auth-login',
    logout: options.names?.logout ?? 'auth-logout',
  }

  return [
    {
      path: base,
      redirect: {
        name: names.login,
      },
      children: [
        {
          name: names.login,
          path: options.paths?.login ?? 'login',
          component: options.loginComponent,
          meta: {
            middleware: [
              guestMiddleware,
            ],
          },
        },
        {
          name: names.callback,
          path: options.paths?.callback ?? 'callback',
          component: options.callbackComponent ?? AuthCallbackComponent,
        },
        {
          name: names.logout,
          path: options.paths?.logout ?? 'logout',
          component: options.logoutComponent ?? AuthLogoutComponent,
        },
      ],
    },
  ]
}
