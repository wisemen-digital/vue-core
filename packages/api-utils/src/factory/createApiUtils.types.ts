import type { MaybeRef } from 'vue'

import type { ApiResult } from '@/types/apiError.type'
import type {
  KeysetPaginationParams,
  KeysetPaginationResult,
  OffsetPaginationParams,
  OffsetPaginationResult,
} from '@/types/pagination.type'
import type {
  QueryKeyEntityFromConfig,
  QueryKeyParamsFromConfig,
  QueryKeysWithEntityFromConfig,
} from '@/types/queryKeys.type'

export type QueryKeysWithArrayEntityFromConfig<TQueryKeys extends object> = (
  {
    [K in keyof TQueryKeys]: TQueryKeys[K] extends { entity: any[] }
      ? K
      : never
  }[keyof TQueryKeys]
) & string

export type QueryKeyArrayItemFromConfig<
  TQueryKeys extends object,
  TKey extends PropertyKey,
> = QueryKeyEntityFromConfig<TQueryKeys, TKey> extends (infer TItem)[]
  ? TItem
  : never

export type ApiUseQueryOptions<
  TQueryKeys extends object,
  TKey extends QueryKeysWithEntityFromConfig<TQueryKeys>,
> = {
  staleTime?: number
  isDebug?: boolean
  isEnabled?: MaybeRef<boolean>
  queryFn: () => Promise<ApiResult<QueryKeyEntityFromConfig<TQueryKeys, TKey>>>
} & (
  QueryKeyParamsFromConfig<TQueryKeys, TKey> extends Record<string, never>
    ? { params?: QueryKeyParamsFromConfig<TQueryKeys, TKey> }
    : { params: QueryKeyParamsFromConfig<TQueryKeys, TKey> }
)

export type ApiUseOffsetInfiniteQueryOptions<
  TQueryKeys extends object,
  TKey extends QueryKeysWithArrayEntityFromConfig<TQueryKeys>,
> = {
  staleTime?: number
  isEnabled?: MaybeRef<boolean>
  limit?: number
  queryFn: (paginationParams: OffsetPaginationParams)
  => Promise<OffsetPaginationResult<QueryKeyArrayItemFromConfig<TQueryKeys, TKey>>>
} & (
  QueryKeyParamsFromConfig<TQueryKeys, TKey> extends Record<string, never>
    ? { params?: QueryKeyParamsFromConfig<TQueryKeys, TKey> }
    : { params: QueryKeyParamsFromConfig<TQueryKeys, TKey> }
)

export type ApiUseKeysetInfiniteQueryOptions<
  TQueryKeys extends object,
  TKey extends QueryKeysWithArrayEntityFromConfig<TQueryKeys>,
> = {
  staleTime?: number
  isEnabled?: MaybeRef<boolean>
  limit?: number
  queryFn: (paginationParams: KeysetPaginationParams)
  => Promise<KeysetPaginationResult<QueryKeyArrayItemFromConfig<TQueryKeys, TKey>>>
} & (
  QueryKeyParamsFromConfig<TQueryKeys, TKey> extends Record<string, never>
    ? { params?: QueryKeyParamsFromConfig<TQueryKeys, TKey> }
    : { params: QueryKeyParamsFromConfig<TQueryKeys, TKey> }
)
