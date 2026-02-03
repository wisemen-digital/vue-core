import type { QueryClient } from '@tanstack/vue-query'
import type {
  MaybeRef,
  UnwrapRef,
} from 'vue'
import { unref } from 'vue'

import type {
  AsyncResult as AsyncResultType,
  AsyncResultOk,
} from '@/async-result/asyncResult'
import { AsyncResult } from '@/async-result/asyncResult'
import type {
  QueryKeyEntityFromConfig,
  QueryKeyRawParamsFromConfig,
  QueryKeys,
  QueryKeysWithEntityFromConfig,
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
type EntityItem<TEntity> = TEntity extends any[] ? TEntity[number] : TEntity

type MatchByKeyValue<TEntity> = Partial<{
  [K in keyof EntityItem<TEntity>]: MaybeRef<UnwrapRef<EntityItem<TEntity>[K]>>
}>

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

type QueryKeyOrTupleFromConfig<
  TQueryKeys extends object,
  TKey extends QueryKeysWithEntityFromConfig<TQueryKeys>,
>
  = | TKey
    | readonly [TKey, Partial<QueryKeyRawParamsFromConfig<TQueryKeys, TKey>>]

/**
 * OptimisticUpdates utility class for type-safe optimistic updates
 */
export class OptimisticUpdates<TQueryKeys extends object = QueryKeys> {
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
      const asyncResult = data

      if (asyncResult.isOk()) {
        return asyncResult.getValue()
      }

      return null
    }

    // It's already a raw entity
    return data
  }

  private isInfiniteDataLike(data: unknown): data is {
    pageParams?: unknown[]
    pages: unknown[]
  } {
    return Boolean(
      data
      && typeof data === 'object'
      && 'pages' in (data as any)
      && Array.isArray((data as any).pages),
    )
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
  ): AsyncResultOk<TEntity, any> {
    return AsyncResult.ok(entity)
  }

  /**
   * Get raw entity data from the query cache
   * Automatically extracts the entity from AsyncResult wrapper
   *
   * When using just a key string:
   * - By default (isExact=false), returns ALL queries with that key as first element
   * - With isExact=true, returns only the query stored as [key]
   *
   * @example
   * ```typescript
   * // Get all userDetail queries (returns array)
   * const allUsers = optimisticUpdates.get('userDetail')
   *
   * // Get exact query stored as ['userDetail']
   * const exactUser = optimisticUpdates.get('userDetail', { isExact: true })
   *
   * // Get specific userDetail query with params
   * const user = optimisticUpdates.get(['userDetail', { userUuid: '123' }] as const)
   * ```
   */

  get<TKey extends QueryKeysWithEntityFromConfig<TQueryKeys>>(
    queryKey: TKey,
    options?: { isExact?: false },
  ): QueryKeyEntityFromConfig<TQueryKeys, TKey>[]
  get<TKey extends QueryKeysWithEntityFromConfig<TQueryKeys>>(
    queryKey: TKey,
    options: { isExact: true },
  ): QueryKeyEntityFromConfig<TQueryKeys, TKey> | null
  get<TKey extends QueryKeysWithEntityFromConfig<TQueryKeys>>(
    queryKey: readonly [TKey, Partial<QueryKeyRawParamsFromConfig<TQueryKeys, TKey>>],
  ): QueryKeyEntityFromConfig<TQueryKeys, TKey> | null
  get<TKey extends QueryKeysWithEntityFromConfig<TQueryKeys>>(
    queryKey: QueryKeyOrTupleFromConfig<TQueryKeys, TKey>,
    options?: { isExact?: boolean },
  ):
    | QueryKeyEntityFromConfig<TQueryKeys, TKey>
    | QueryKeyEntityFromConfig<TQueryKeys, TKey>[]
    | null {
    // If it's a tuple [key, params], always get specific query
    if (Array.isArray(queryKey)) {
      const data = this.queryClient.getQueryData<any>(queryKey)

      return this.extractEntityFromAsyncResult(data)
    }

    // It's a single key string
    const isExact = options?.isExact ?? false

    if (isExact) {
      // Get exact query stored as [key]
      const normalizedKey = [
        queryKey,
      ]
      const data = this.queryClient.getQueryData<any>(normalizedKey)

      return this.extractEntityFromAsyncResult(data)
    }

    // Get all queries with this key as first element
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
  async invalidate<TKey extends QueryKeysWithEntityFromConfig<TQueryKeys>>(
    key: TKey,
  ): Promise<void>
  // Overload: full tuple with params - invalidates specific query
  async invalidate<TKey extends QueryKeysWithEntityFromConfig<TQueryKeys>>(
    keyTuple: readonly [TKey, Partial<QueryKeyRawParamsFromConfig<TQueryKeys, TKey>>],
  ): Promise<void>
  // Implementation
  async invalidate<TKey extends QueryKeysWithEntityFromConfig<TQueryKeys>>(
    keyOrTuple: QueryKeyOrTupleFromConfig<TQueryKeys, TKey>,
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
   * Set raw entity data in the query cache for a specific query
   * Automatically wraps the entity in AsyncResult
   *
   * Both formats set a single query - just with different key representations:
   * - 'userDetail' sets the query with key ['userDetail']
   * - ['userDetail', { userUuid: '123' }] sets the query with that exact key
   *
   * @example
   * ```typescript
   * // Set query with just the key
   * optimisticUpdates.set('userDetail', userData)
   *
   * // Set query with key + params
   * optimisticUpdates.set(['userDetail', { userUuid: '123' }] as const, userData)
   * ```
   */

  // Overload: key only - stores as ['userDetail']
  set<TKey extends QueryKeysWithEntityFromConfig<TQueryKeys>>(
    queryKey: TKey,
    entity: QueryKeyEntityFromConfig<TQueryKeys, TKey>,
  ): void
  // Overload: full tuple with params - stores as ['userDetail', params]
  set<TKey extends QueryKeysWithEntityFromConfig<TQueryKeys>>(
    queryKey: readonly [TKey, Partial<QueryKeyRawParamsFromConfig<TQueryKeys, TKey>>],
    entity: QueryKeyEntityFromConfig<TQueryKeys, TKey>,
  ): void
  // Implementation
  set<TKey extends QueryKeysWithEntityFromConfig<TQueryKeys>>(
    queryKey: QueryKeyOrTupleFromConfig<TQueryKeys, TKey>,
    entity: any,
  ): void {
    const wrappedData = this.wrapEntityInAsyncResult(entity)

    // Convert single key to array format if needed
    const normalizedKey = Array.isArray(queryKey)
      ? queryKey
      : [
          queryKey,
        ]

    this.queryClient.setQueryData(normalizedKey as any, wrappedData)
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
    TKey extends QueryKeysWithEntityFromConfig<TQueryKeys>,
    TEntity extends QueryKeyEntityFromConfig<TQueryKeys, TKey> = QueryKeyEntityFromConfig<TQueryKeys, TKey>,
  >(
    key: TKey,
    options: OptimisticUpdateOptions<TEntity>,
  ): void
  // Overload: full tuple with params - updates specific query
  update<
    TKey extends QueryKeysWithEntityFromConfig<TQueryKeys>,
    TEntity extends QueryKeyEntityFromConfig<TQueryKeys, TKey> = QueryKeyEntityFromConfig<TQueryKeys, TKey>,
  >(
    keyTuple: readonly [TKey, Partial<QueryKeyRawParamsFromConfig<TQueryKeys, TKey>>],
    options: OptimisticUpdateOptions<TEntity>,
  ): void
  // Implementation
  update<
    TKey extends QueryKeysWithEntityFromConfig<TQueryKeys>,
    TEntity extends QueryKeyEntityFromConfig<TQueryKeys, TKey> = QueryKeyEntityFromConfig<TQueryKeys, TKey>,
  >(
    keyOrTuple: QueryKeyOrTupleFromConfig<TQueryKeys, TKey>,
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
      const currentData = query.state.data as any

      // Support infinite queries: cached data is typically { pages, pageParams }
      if (this.isInfiniteDataLike(currentData)) {
        const updatedInfiniteData = {
          ...currentData,
          pages: (currentData.pages as any[]).map((page) => {
            // neverthrow Result has .map + .isOk
            if (page && typeof page === 'object' && 'map' in page && typeof page.map === 'function') {
              return page.map((pageValue: any) => {
                if (pageValue && typeof pageValue === 'object' && Array.isArray(pageValue.data)) {
                  return {
                    ...pageValue,
                    data: this.updateEntity(by, pageValue.data, value),
                  }
                }

                return pageValue
              })
            }

            return page
          }),
        }

        this.queryClient.setQueryData(query.queryKey, updatedInfiniteData)

        continue
      }

      // Extract raw entity from AsyncResult or use directly if raw
      const rawEntity = this.extractEntityFromAsyncResult(currentData as AsyncResultType<TEntity, any> | TEntity | null)

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
