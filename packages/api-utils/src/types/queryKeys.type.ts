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
 * Extract the parameters object from a query key definition
 */
export type QueryKeyParams<TKey extends keyof QueryKeys> = QueryKeys[TKey] extends { params: infer P }
  ? P
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
