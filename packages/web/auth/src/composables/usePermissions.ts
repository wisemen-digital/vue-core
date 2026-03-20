import { getAuthInstance } from '../plugin/createAuth'

/**
 * Composable for checking user permissions.
 *
 * Accepts an optional generic type parameter `TPermission` to constrain
 * permission keys to a known union type, giving you type safety and autocomplete.
 *
 * @example
 * ```ts
 * // Untyped (accepts any string)
 * const { has } = usePermissions()
 * if (has('manage_users')) { ... }
 *
 * // Typed (constrained to your permission union)
 * type Permission = 'manage_users' | 'view_users' | 'admin'
 * const { has } = usePermissions<Permission>()
 * if (has('manage_users')) { ... }   // ✓
 * if (has('typo_permission')) { ... } // ✗ TypeScript error
 *
 * // OR logic with array
 * if (has(['manage_users', 'view_users'])) { ... }
 * ```
 */
export function usePermissions<TPermission extends string = string>(): {
  has: (permission: TPermission | TPermission[]) => boolean
} {
  const auth = getAuthInstance()

  return {
    has: (permission: TPermission | TPermission[]) => auth.hasPermission(permission),
  }
}
