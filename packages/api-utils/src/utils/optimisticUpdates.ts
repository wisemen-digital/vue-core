import type { QueryClient } from '@tanstack/vue-query'
import { unref } from 'vue'

import type { AsyncResult as AsyncResultType } from '@/async-result/asyncResult'
import { AsyncResult } from '@/async-result/asyncResult'
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
    | null
    | undefined

/**
 * Options for optimistic update
 */
export interface OptimisticUpdateOptions<
  TEntity,
> {
  /**
   * How to match the entity to update:
   * - function: a predicate that returns true for the entity to update
   * - object: key-value pairs to match (e.g., { id: '123' } or { uuid: 'abc' })
   * - undefined: defaults to matching by 'id' from the value
   */
  by?: ByOption<TEntity>

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
   * Extract the raw entity from AsyncResult data
   */
  private extractEntityFromAsyncResult<TEntity>(
    data: AsyncResultType<TEntity, any> | TEntity | null | undefined,
  ): TEntity | null {
    if (data === undefined || data === null) {
      return null
    }

    // Check if it's an AsyncResult by checking for isOk method
    if (typeof data === 'object' && 'isOk' in data) {
      const asyncResult = data as AsyncResultType<TEntity, any>

      if (asyncResult.isOk()) {
        return asyncResult.getValue()
      }

      return null
    }

    // It's already a raw entity
    return data as TEntity
  }

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
   * Wrap a raw entity in an AsyncResult (preserving ok state)
   */
  private wrapEntityInAsyncResult<TEntity>(
    entity: TEntity,
  ): AsyncResultType<TEntity, any> {
    return AsyncResult.ok(entity)
  }

  /**
   * Get raw entity data from the query cache
   * Automatically extracts the entity from AsyncResult wrapper
   *
   * @example
   * ```typescript
   * const user = optimisticUpdates.get(['userDetail', { userUuid: '123' }] as const)
   * ```
   */
  get<
    TKey extends QueryKeysWithEntity,
    TEntity extends QueryKeyEntity<TKey> = QueryKeyEntity<TKey>,
  >(
    queryKey: readonly any[],
  ): TEntity | null {
    const data = this.queryClient.getQueryData<AsyncResultType<TEntity, any> | TEntity>(queryKey)

    return this.extractEntityFromAsyncResult(data)
  }

  /**
   * Invalidate queries to trigger a refetch
   */
  async invalidate<TKey extends QueryKeysWithEntity>(
    key: TKey,
    params?: Partial<QueryKeyParams<TKey>>,
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
            const queryValue = (queryKey[1] as any)[paramKey]

            return queryValue === paramValue
          })
        }

        return true
      },
    })
  }

  /**
   * Set raw entity data in the query cache
   * Automatically wraps the entity in AsyncResult
   *
   * @example
   * ```typescript
   * optimisticUpdates.set(['userDetail', { userUuid: '123' }] as const, userData)
   * ```
   */
  set<
    TKey extends QueryKeysWithEntity,
    TEntity extends QueryKeyEntity<TKey> = QueryKeyEntity<TKey>,
  >(
    queryKey: readonly any[],
    entity: TEntity,
  ): void {
    const wrappedData = this.wrapEntityInAsyncResult(entity)

    this.queryClient.setQueryData(queryKey, wrappedData)
  }

  /**
   * Update entity data in the query cache optimistically
   *
   * @example
   * ```typescript
   * // Update by id (from value)
   * optimisticUpdates.update('userDetail', {
   *   value: { id: '123', name: 'John Doe' }
   * })
   *
   * // Update using key-value matching
   * optimisticUpdates.update('userDetail', {
   *   value: { name: 'John Doe' },
   *   by: { uuid: 'abc-123' }
   * })
   *
   * // Update using a predicate function
   * optimisticUpdates.update('userList', {
   *   value: { isActive: false },
   *   by: (user) => user.email === 'john@example.com'
   * })
   * ```
   */
  update<
    TKey extends QueryKeysWithEntity,
    TEntity extends QueryKeyEntity<TKey> = QueryKeyEntity<TKey>,
  >(
    key: TKey,
    options: OptimisticUpdateOptions<TEntity>,
  ): void {
    const by = options.by ?? undefined
    const value = options.value

    // Get all queries matching this key
    const queries = this.queryClient.getQueryCache().findAll({
      predicate: (query) => {
        const queryKey = query.queryKey as any[]

        return queryKey[0] === key
      },
    })

    // Update each matching query
    for (const query of queries) {
      const currentData = query.state.data as AsyncResultType<TEntity, any> | TEntity | null

      // Extract raw entity from AsyncResult or use directly if raw
      const rawEntity = this.extractEntityFromAsyncResult(currentData)

      if (rawEntity === null) {
        continue
      }

      // Update the raw entity
      const updatedEntity = this.updateEntity(by, rawEntity, value)

      // Wrap back in AsyncResult
      const wrappedData = this.wrapEntityInAsyncResult(updatedEntity)

      this.queryClient.setQueryData(query.queryKey, wrappedData)
    }
  }
}

/**
 * Create an OptimisticUpdates instance
 */
export function createOptimisticUpdates(queryClient: QueryClient): OptimisticUpdates {
  return new OptimisticUpdates(queryClient)
}
