import { getAuthInstance } from '../plugin/createAuth'

export interface UseAuthCallbackOptions {
  /**
   * Called when the callback fails (missing code, token exchange error, etc.).
   * Use this to show an error message and navigate away.
   */
  onError: (error: unknown) => Promise<void> | void
  /**
   * Called after a successful login. Use this to navigate to the home route.
   */
  onSuccess: (redirectUrl: string | null) => Promise<void> | void
}

/**
 * Composable that handles the OAuth2 authorization code callback.
 *
 * Reads `code` and `state` from the current URL search params, exchanges
 * the code for tokens, and calls the appropriate callback.
 *
 * Designed to be called in `onMounted` of your callback view.
 *
 * @example
 * ```ts
 * const { handleCallback } = useAuthCallback({
 *   onSuccess: async (redirectUrl) => {
 *     await router.push(redirectUrl ?? '/')
 *   },
 *   onError: async () => {
 *     await router.push({ name: 'auth-logout' })
 *   },
 * })
 *
 * onMounted(handleCallback)
 * ```
 */
export function useAuthCallback(options: UseAuthCallbackOptions): {
  handleCallback: () => Promise<void>
} {
  const auth = getAuthInstance()

  async function handleCallback(): Promise<void> {
    const params = new URLSearchParams(window.location.search)
    const code = params.get('code')
    const state = params.get('state')

    const isAlreadyLoggedIn = await auth.isLoggedIn()

    if (isAlreadyLoggedIn) {
      await options.onSuccess(null)

      return
    }

    if (code === null) {
      await options.onError(new Error('No authorization code in callback URL'))

      return
    }

    try {
      await auth.loginWithCode(code)
    }
    catch (error) {
      await options.onError(error)

      return
    }

    const safeRedirectUrl = state !== null
      ? auth.sanitizeRedirectUrl(state, '/')
      : null

    await options.onSuccess(safeRedirectUrl)
  }

  return {
    handleCallback,
  }
}
