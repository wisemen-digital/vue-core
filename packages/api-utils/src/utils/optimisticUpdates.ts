import type { QueryClient } from '@tanstack/vue-query'
import type { MaybeRef } from 'vue'
import { unref } from 'vue'

import type {
  QueryKeyEntity,
  QueryKeyParams,
  QueryKeysWithEntity,
} from '@/types/queryKeys.type'

/**
 * Type helper to extract all possible keys from an entity type
 */
type EntityKeys<T> = T extends (infer U)[]
  ? keyof U
  : keyof T

/**
 * Type helper to extract the value type for a given key
 */
type EntityValue<T, K> = T extends (infer U)[]
  ? K extends keyof U
    ? U[K]
    : never
  : K extends keyof T
    ? T[K]
    : never

/**
 * Predicate function type that takes an entity and returns boolean
 */
type PredicateFn<TEntity> = TEntity extends any[]
  ? (item: TEntity[number]) => boolean
  : (item: TEntity) => boolean

/**
 * Options for the "by" parameter - can be a key name, a predicate function, or undefined (defaults to 'id')
 */
type ByOption<TEntity>
  = EntityKeys<TEntity>
    | PredicateFn<TEntity>
    | undefined
/**
 * Options for optimistic update
 */
export interface OptimisticUpdateOptions<
  TKey extends QueryKeysWithEntity,
  TEntity extends QueryKeyEntity<TKey> = QueryKeyEntity<TKey>,
  TBy extends ByOption<TEntity> = ByOption<TEntity>,
> {
  /**
   * How to match the entity to update:
   * - string: the property name to match (defaults to 'id')
   * - function: a predicate that returns true for the entity to update
   * - undefined: defaults to 'id'
   */
  by?: TBy

  /**
   * The query key to update
   */
  key: TKey

  /**
   * The value to match against when "by" is a string key
   * Required when updating arrays or when by is specified as a string
   */
  match?: TBy extends EntityKeys<TEntity>
    ? EntityValue<TEntity, TBy>
    : TBy extends PredicateFn<TEntity>
      ? never
      : EntityValue<TEntity, 'id'>

  /**
   * The new value to set (for single entities) or merge (for arrays)
   */
  value: TEntity extends any[] ? Partial<TEntity[number]> : Partial<TEntity>
}

/**
 * OptimisticUpdates utility class for type-safe optimistic updates
 */
export class OptimisticUpdates {
  constructor(private readonly queryClient: QueryClient) {}

  /**
   * Determine if an item should be updated
   */
  private shouldUpdateItem<TItem>(
    by: ByOption<any>,
    item: TItem,
    match: any,
  ): boolean {
    // If by is a function, use it as predicate
    if (typeof by === 'function') {
      return by(item)
    }

    // If by is a string or undefined, use it as a key (default to 'id')
    const key = (by ?? 'id') as keyof TItem
    const itemValue = item[key]

    // Unwrap Vue refs if needed
    const matchValue = unref(match)
    const currentValue = unref(itemValue)

    return currentValue === matchValue
  }

  /**
   * Internal method to update entity based on the "by" option
   */
  private updateEntity<TEntity>(
    by: ByOption<TEntity>,
    currentData: TEntity,
    match: any,
    value: any,
  ): TEntity {
    // Handle array entities
    if (Array.isArray(currentData)) {
      return currentData.map((item) => {
        const shouldUpdate = this.shouldUpdateItem(by, item, match)

        return shouldUpdate
          ? {
              ...item,
              ...value,
            }
          : item
      }) as TEntity
    }

    // Handle single entity
    const shouldUpdate = this.shouldUpdateItem(by, currentData, match)

    if (shouldUpdate) {
      return {
        ...currentData,
        ...value,
      } as TEntity
    }

    return currentData
  }

  /**
   * Invalidate queries to trigger a refetch
   */
  async invalidate<TKey extends QueryKeysWithEntity>(
    key: TKey,
    params?: Partial<MaybeRef<QueryKeyParams<TKey>>>,
  ): Promise<void> {
    await this.queryClient.invalidateQueries({
      predicate: (query) => {
        const queryKey = query.queryKey as any[]

        if (queryKey[0] !== key) {
          return false
        }

        // If params provided, also match on params
        if (params && queryKey[1]) {
          return Object.entries(params).every((
            [
              paramKey,
              paramValue,
            ],
          ) => {
            const queryValue = unref((queryKey[1] as any)[paramKey])
            const matchValue = unref(paramValue)

            return queryValue === matchValue
          })
        }

        return true
      },
    })
  }

  /**
   * Update entity data in the query cache optimistically
   *
   * @example
   * ```typescript
   * // Update a single entity by id (default)
   * optimisticUpdates.update({
   *   key: 'userDetail',
   *   value: { name: 'John Doe' },
   *   match: '123'
   * })
   *
   * // Update using a custom key
   * optimisticUpdates.update({
   *   key: 'userDetail',
   *   value: { name: 'John Doe' },
   *   by: 'uuid',
   *   match: 'abc-123'
   * })
   *
   * // Update using a predicate function
   * optimisticUpdates.update({
   *   key: 'userList',
   *   value: { isActive: false },
   *   by: (user) => user.email === 'john@example.com'
   * })
   * ```
   */
  update<
    TKey extends QueryKeysWithEntity,
    TEntity extends QueryKeyEntity<TKey> = QueryKeyEntity<TKey>,
    TBy extends ByOption<TEntity> = ByOption<TEntity>,
  >(options: OptimisticUpdateOptions<TKey, TEntity, TBy>): void {
    const {
      by,
      key,
      match,
      value,
    } = options

    // Get all queries matching this key
    const queries = this.queryClient.getQueryCache().findAll({
      predicate: (query) => {
        const queryKey = query.queryKey as any[]

        return queryKey[0] === key
      },
    })

    // Update each matching query
    for (const query of queries) {
      const currentData = query.state.data as TEntity | undefined

      if (currentData === undefined || currentData === null) {
        continue
      }

      const updatedData = this.updateEntity(by, currentData, match, value)

      this.queryClient.setQueryData(query.queryKey, updatedData)
    }
  }
}

/**
 * Create an OptimisticUpdates instance
 */
export function createOptimisticUpdates(queryClient: QueryClient): OptimisticUpdates {
  return new OptimisticUpdates(queryClient)
}
