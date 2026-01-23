import type {
  QueryClient,
  QueryKey,
} from '@tanstack/vue-query'
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
 * Union type for query key parameter - either just the key or the full tuple with params
 */
type QueryKeyOrTuple<TKey extends QueryKeysWithEntity>
  = | TKey
    | readonly [TKey, Partial<QueryKeyParams<TKey>>]

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
   * // Get all userDetail queries
   * const allUsers = optimisticUpdates.get('userDetail')
   *
   * // Get specific userDetail query
   * const user = optimisticUpdates.get(['userDetail', { userUuid: '123' }] as const)
   * ```
   */

  // Overload: key only - returns array or single entity depending on queries
  get<TKey extends QueryKeysWithEntity>(
    queryKey: TKey,
  ): QueryKeyEntity<TKey>[]
  // Overload: full tuple with params - returns single entity or array
  get<TKey extends QueryKeysWithEntity>(
    queryKey: readonly [TKey, Partial<QueryKeyParams<TKey>>],
  ): QueryKeyEntity<TKey> | null
  // Implementation
  get<TKey extends QueryKeysWithEntity>(
    queryKey: QueryKeyOrTuple<TKey>,
  ): QueryKeyEntity<TKey> | QueryKeyEntity<TKey>[] | null {
    // If it's just a key string, get all matching queries
    if (typeof queryKey === 'string') {
      const allQueries = this.queryClient.getQueryCache().findAll({
        predicate: (query) => {
          const qKey = query.queryKey as any[]

          return qKey[0] === queryKey
        },
      })

      const results: any[] = []

      for (const query of allQueries) {
        const data = query.state.data as any
        const entity = this.extractEntityFromAsyncResult(data)

        if (entity !== null) {
          results.push(entity)
        }
      }

      return results
    }

    // If it's a tuple [key, params], get specific query
    const data = this.queryClient.getQueryData<any>(queryKey)

    return this.extractEntityFromAsyncResult(data)
  }

  /**
   * Invalidate queries to trigger a refetch
   *
   * When using just the key, invalidates ALL queries with that key
   * When using key + params tuple, invalidates SPECIFIC query
   *
   * @example
   * ```typescript
   * // Invalidate all userDetail queries
   * await optimisticUpdates.invalidate('userDetail')
   *
   * // Invalidate specific query
   * await optimisticUpdates.invalidate(['userDetail', { userUuid: '123' }] as const)
   * ```
   */

  // Overload: key only - invalidates all matching queries
  async invalidate<TKey extends QueryKeysWithEntity>(key: TKey): Promise<void>
  // Overload: full tuple with params - invalidates specific query
  async invalidate<TKey extends QueryKeysWithEntity>(
    keyTuple: readonly [TKey, Partial<QueryKeyParams<TKey>>],
  ): Promise<void>
  // Implementation
  async invalidate<TKey extends QueryKeysWithEntity>(
    keyOrTuple: QueryKeyOrTuple<TKey>,
  ): Promise<void> {
    const isSpecific = Array.isArray(keyOrTuple)
    const key = isSpecific ? (keyOrTuple as any[])[0] : keyOrTuple
    const params = isSpecific ? (keyOrTuple as any[])[1] : null

    await this.queryClient.invalidateQueries({
      predicate: (query) => {
        const queryKey = query.queryKey as any[]

        if (queryKey[0] !== key) {
          return false
        }

        // If specific query requested, match params too
        if (isSpecific && params && queryKey[1]) {
          return Object.entries(params).every(([
            paramKey,
            paramValue,
          ]) => {
            return (queryKey[1] as any)[paramKey] === paramValue
          })
        }

        // If not specific, match all with this key
        return !isSpecific
      },
    })
  }

  /**
   * Set raw entity data in the query cache
   * Automatically wraps the entity in AsyncResult
   *
   * @example
   * ```typescript
   * // Set all userDetail queries (array of entities)
   * optimisticUpdates.set('userDetail', [user1, user2])
   *
   * // Set specific userDetail query
   * optimisticUpdates.set(['userDetail', { userUuid: '123' }] as const, userData)
   * ```
   */

  // Overload: key only - expects array
  set<TKey extends QueryKeysWithEntity>(
    queryKey: TKey,
    entities: QueryKeyEntity<TKey>[],
  ): void
  // Overload: full tuple with params - expects single entity or array
  set<TKey extends QueryKeysWithEntity>(
    queryKey: readonly [TKey, Partial<QueryKeyParams<TKey>>],
    entity: QueryKeyEntity<TKey>,
  ): void
  // Implementation
  set<TKey extends QueryKeysWithEntity>(
    queryKey: QueryKeyOrTuple<TKey>,
    entity: any,
  ): void {
    const wrappedData = this.wrapEntityInAsyncResult(entity)

    this.queryClient.setQueryData(queryKey as QueryKey, wrappedData)
  }

  /**
   * Update entity data in the query cache optimistically
   *
   * When using just the key, updates ALL queries with that key
   * When using key + params tuple, updates SPECIFIC query
   *
   * @example
   * ```typescript
   * // Update all userDetail queries by id
   * optimisticUpdates.update('userDetail', {
   *   value: { id: '123', name: 'John Doe' }
   * })
   *
   * // Update specific query by key + params
   * optimisticUpdates.update(['userDetail', { userUuid: '123' }] as const, {
   *   value: { name: 'John Doe' }
   * })
   *
   * // Update using predicates
   * optimisticUpdates.update('userList', {
   *   value: { isActive: false },
   *   by: (user) => user.email === 'john@example.com'
   * })
   * ```
   */

  // Overload: key only - updates all matching queries
  update<
    TKey extends QueryKeysWithEntity,
    TEntity extends QueryKeyEntity<TKey> = QueryKeyEntity<TKey>,
  >(
    key: TKey,
    options: OptimisticUpdateOptions<TEntity>,
  ): void
  // Overload: full tuple with params - updates specific query
  update<
    TKey extends QueryKeysWithEntity,
    TEntity extends QueryKeyEntity<TKey> = QueryKeyEntity<TKey>,
  >(
    keyTuple: readonly [TKey, Partial<QueryKeyParams<TKey>>],
    options: OptimisticUpdateOptions<TEntity>,
  ): void
  // Implementation
  update<
    TKey extends QueryKeysWithEntity,
    TEntity extends QueryKeyEntity<TKey> = QueryKeyEntity<TKey>,
  >(
    keyOrTuple: QueryKeyOrTuple<TKey>,
    options: OptimisticUpdateOptions<TEntity>,
  ): void {
    const by = options.by ?? undefined
    const value = options.value

    // Determine if we're updating all or specific queries
    const isSpecific = Array.isArray(keyOrTuple)
    const key = isSpecific ? (keyOrTuple as any[])[0] : keyOrTuple
    const params = isSpecific ? (keyOrTuple as any[])[1] : null

    // Get matching queries
    const queries = this.queryClient.getQueryCache().findAll({
      predicate: (query) => {
        const queryKey = query.queryKey as any[]

        if (queryKey[0] !== key) {
          return false
        }

        // If specific query requested, match params too
        if (isSpecific && params && queryKey[1]) {
          return Object.entries(params).every(([
            paramKey,
            paramValue,
          ]) => {
            return (queryKey[1] as any)[paramKey] === paramValue
          })
        }

        // If not specific, match all with this key
        return !isSpecific
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
