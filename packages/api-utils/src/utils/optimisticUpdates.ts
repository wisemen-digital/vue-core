import type { QueryClient } from '@tanstack/vue-query'
import type { MaybeRef } from 'vue'
import { unref } from 'vue'

import type {
  QueryKeyEntity,
  QueryKeyParams,
  QueryKeysWithEntity,
} from '@/types/queryKeys.type'

/**
 * Predicate function type that takes an entity and returns boolean
 */
type PredicateFn<TEntity> = TEntity extends any[]
  ? (item: TEntity[number]) => boolean
  : (item: TEntity) => boolean

/**
 * Type for matching by key-value pair
 */
type MatchByKeyValue<TEntity> = TEntity extends any[]
  ? Partial<Record<keyof TEntity[number], any>>
  : Partial<Record<keyof TEntity, any>>

/**
 * Options for the "by" parameter - can be a predicate function or key-value object
 */
type ByOption<TEntity>
  = MatchByKeyValue<TEntity>
    | PredicateFn<TEntity>
    | undefined

/**
 * Options for optimistic update
 */
export interface OptimisticUpdateOptions<
  TKey extends QueryKeysWithEntity,
  TEntity extends QueryKeyEntity<TKey> = QueryKeyEntity<TKey>,
> {
  /**
   * How to match the entity to update:
   * - function: a predicate that returns true for the entity to update
   * - object: key-value pairs to match (e.g., { id: '123' } or { uuid: 'abc' })
   * - undefined: defaults to matching by 'id' from the value
   */
  by?: ByOption<TEntity>

  /**
   * The query key to update
   */
  key: TKey

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
    value: any,
  ): boolean {
    // If by is a function, use it as predicate
    if (typeof by === 'function') {
      return by(item)
    }

    // If by is an object, match all key-value pairs
    if (by && typeof by === 'object') {
      return Object.entries(by).every(([
        key,
        matchValue,
      ]) => {
        const itemValue = item[key as keyof TItem]
        const currentValue = unref(itemValue)
        const expectedValue = unref(matchValue)

        return currentValue === expectedValue
      })
    }

    // Default: match by 'id' from value
    const idFromValue = (value as any).id
    const itemId = item['id' as keyof TItem]

    if (idFromValue !== undefined && itemId !== undefined) {
      return unref(itemId) === unref(idFromValue)
    }

    return false
  }

  /**
   * Internal method to update entity based on the "by" option
   */
  private updateEntity<TEntity>(
    by: ByOption<TEntity>,
    currentData: TEntity,
    value: any,
  ): TEntity {
    // Handle array entities
    if (Array.isArray(currentData)) {
      return currentData.map((item) => {
        const shouldUpdate = this.shouldUpdateItem(by, item, value)

        return shouldUpdate
          ? {
              ...item,
              ...value,
            }
          : item
      }) as TEntity
    }

    // Handle single entity
    const shouldUpdate = this.shouldUpdateItem(by, currentData, value)

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
   * // Update by id (from value)
   * optimisticUpdates.update({
   *   key: 'userDetail',
   *   value: { id: '123', name: 'John Doe' }
   * })
   *
   * // Update using key-value matching
   * optimisticUpdates.update({
   *   key: 'userDetail',
   *   value: { name: 'John Doe' },
   *   by: { uuid: 'abc-123' }
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
  >(options: OptimisticUpdateOptions<TKey, TEntity>): void {
    const {
      by,
      key,
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

      const updatedData = this.updateEntity(by, currentData, value)

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
