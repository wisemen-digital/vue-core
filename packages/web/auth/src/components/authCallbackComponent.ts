import type { VNode } from 'vue'
import {
  defineComponent,
  h,
  onMounted,
} from 'vue'
import { useRouter } from 'vue-router'

import { useAuthCallback } from '../composables/useAuthCallback'
import { getAuthInstance } from '../plugin/createAuth'

/**
 * Built-in OAuth2 callback handler component.
 *
 * Reads `code` and `state` from the URL, exchanges the code for tokens,
 * then navigates to the home route (or the sanitized `state` redirect URL).
 * On failure, clears auth state and navigates to the login route.
 *
 * Renders its default slot — pass a loading indicator as slot content.
 * If no slot is provided, renders an empty div.
 *
 * Used automatically by `createAuthRoutes()`. Can be overridden via the
 * `callbackComponent` option if you need custom error handling or UI.
 *
 * @example
 * ```ts
 * // Via createAuthRoutes (recommended)
 * createAuthRoutes({ loginComponent: MyLoginView })
 *
 * // Direct use in a route definition
 * { path: 'callback', component: AuthCallbackComponent }
 *
 * // With custom loading UI via slot
 * <AuthCallbackComponent>
 *   <MySpinner />
 * </AuthCallbackComponent>
 * ```
 */
export const AuthCallbackComponent = defineComponent({
  name: 'AuthCallbackComponent',

  setup(_, {
    slots,
  }) {
    const auth = getAuthInstance()
    const router = useRouter()

    const {
      handleCallback,
    } = useAuthCallback({
      onError: async () => {
        auth.logout()

        await router.push({
          name: auth.routes.login,
        })
      },
      onSuccess: async (redirectUrl) => {
        if (redirectUrl !== null) {
          window.location.replace(redirectUrl)

          return
        }

        await router.push({
          name: auth.routes.home,
        })
      },
    })

    onMounted(handleCallback)

    return (): VNode | VNode[] => slots.default?.() ?? h('div')
  },
})
