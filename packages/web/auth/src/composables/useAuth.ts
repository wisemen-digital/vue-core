import type { AuthPlugin } from '../plugin/authPlugin.type'
import { getAuthInstance } from '../plugin/createAuth'

/**
 * Composable to access the auth plugin instance.
 * Returns the full auth API including reactive state, login/logout methods,
 * and middleware.
 *
 * Must be called after `createAuth()` has been invoked.
 */
export function useAuth<TUser = unknown>(): AuthPlugin<TUser> {
  return getAuthInstance<TUser>()
}
