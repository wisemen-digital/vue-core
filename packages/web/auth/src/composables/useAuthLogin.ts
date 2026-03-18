import {
  computed,
  ref,
} from 'vue'

import { getAuthInstance } from '../plugin/createAuth'

/**
 * Composable that handles initiating the OAuth2 login flow.
 *
 * Manages loading state and redirects the browser to the identity provider.
 * Loading state is set to true on sign-in and intentionally never reset on success
 * since the page navigates away. It is reset on error so the UI can recover.
 *
 * @example
 * ```ts
 * // Standard login with optional redirect
 * const { isLoading, signIn } = useAuthLogin()
 * await signIn(route.query.redirectUrl as string)
 *
 * // Identity provider (social) login
 * const { isLoading, signInWithIdentityProvider } = useAuthLogin()
 * await signInWithIdentityProvider('google-idp-id')
 *
 * // Login with custom scopes (e.g. internal org)
 * await signIn(undefined, INTERNAL_SCOPES)
 * ```
 */
export function useAuthLogin() {
  const auth = getAuthInstance()
  const isLoading = ref(false)

  async function signIn(redirectUrl?: string, overrideScopes?: string[]): Promise<void> {
    isLoading.value = true

    try {
      const loginUrl = await auth.getLoginUrl(redirectUrl, overrideScopes)

      window.location.replace(loginUrl)
    }
    catch (error) {
      isLoading.value = false

      throw error
    }
  }

  async function signInWithIdentityProvider(idpId: string): Promise<void> {
    isLoading.value = true

    try {
      const loginUrl = await auth.getIdentityProviderLoginUrl(idpId)

      window.location.replace(loginUrl)
    }
    catch (error) {
      isLoading.value = false

      throw error
    }
  }

  return {
    isLoading: computed<boolean>(() => isLoading.value),
    signIn,
    signInWithIdentityProvider,
  }
}
