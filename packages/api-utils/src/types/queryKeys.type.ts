import type { Ref } from 'vue'

/**
 * Base interface for defining query keys with their associated entities
 *
 * @example
 * ```typescript
 * declare module '@wisemen/vue-core-api-utils' {
 *   interface QueryKeys {
 *     userDetail: {
 *       params: { userUuid: ComputedRef<UserUuid> }
 *       entity: User
 *     }
 *     productList: {
 *       params: { category: ComputedRef<string> }
 *       entity: Product[]
 *     }
 *   }
 * }
 * ```
 */
export interface QueryKeys {}

/**
 * Generic helper types for libraries/factories that want to infer query key typing
 * from a user-provided config object (instead of relying on module augmentation).
 */

/**
 * Extract the entity type from a query-keys config for a specific key.
 */
export type QueryKeyEntityFromConfig<
  TQueryKeys extends object,
  TKey extends PropertyKey,
> = TKey extends keyof TQueryKeys
  ? TQueryKeys[TKey] extends { entity: infer E }
    ? E
    : never
  : never

/**
 * Extract the params type from a query-keys config for a specific key.
 */
export type QueryKeyParamsFromConfig<
  TQueryKeys extends object,
  TKey extends PropertyKey,
> = TKey extends keyof TQueryKeys
  ? TQueryKeys[TKey] extends { params: infer P }
    ? P
    : void
  : never

/**
 * Get all keys that have an associated entity in a query-keys config.
 */
export type QueryKeysWithEntityFromConfig<TQueryKeys extends object> = (
  {
    [K in keyof TQueryKeys]: TQueryKeys[K] extends { entity: any }
      ? K
      : never
  }[keyof TQueryKeys]
) & string

/**
 * Extract the parameters object from a query key definition
 */
export type QueryKeyParams<TKey extends keyof QueryKeys> = QueryKeys[TKey] extends { params: infer P }
  ? Ref<P>
  : QueryKeys[TKey]

/**
 * Extract the entity type from a query key definition
 */
export type QueryKeyEntity<TKey extends keyof QueryKeys> = QueryKeys[TKey] extends { entity: infer E }
  ? E
  : never

/**
 * Check if a query key has an associated entity
 */
export type HasEntity<TKey extends keyof QueryKeys> = QueryKeys[TKey] extends { entity: any }
  ? TKey
  : never

/**
 * Get all query keys that have an associated entity
 */
export type QueryKeysWithEntity = {
  [K in keyof QueryKeys]: HasEntity<K>
}[keyof QueryKeys]
