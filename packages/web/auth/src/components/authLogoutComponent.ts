import type { VNode } from 'vue'
import {
  defineComponent,
  h,
  onMounted,
} from 'vue'
import { useRouter } from 'vue-router'

import { getAuthInstance } from '../plugin/createAuth'

/**
 * Built-in logout handler component.
 *
 * Clears the auth state and navigates to the configured login route on mount.
 * Renders its default slot — pass a loading indicator or transition content.
 * If no slot is provided, renders an empty div.
 *
 * Used automatically by `createAuthRoutes()`. Can be overridden via the
 * `logoutComponent` option if you need custom logout UI or side effects.
 *
 * @example
 * ```ts
 * // Via createAuthRoutes (recommended)
 * createAuthRoutes({ loginComponent: MyLoginView })
 *
 * // Direct use in a route definition
 * { path: 'logout', component: AuthLogoutComponent }
 * ```
 */
export const AuthLogoutComponent = defineComponent({
  name: 'AuthLogoutComponent',

  setup(_, {
    slots,
  }) {
    const auth = getAuthInstance()
    const router = useRouter()

    onMounted(async () => {
      auth.logout()

      await router.push({
        name: auth.routes.login,
      })
    })

    return (): VNode | VNode[] => slots.default?.() ?? h('div')
  },
})
