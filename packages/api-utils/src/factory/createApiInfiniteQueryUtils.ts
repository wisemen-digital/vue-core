import type { MaybeRef } from 'vue'

import { useKeysetInfiniteQuery as useBaseKeysetInfiniteQuery } from '@/composables/query/keysetInfiniteQuery.composable'
import { useOffsetInfiniteQuery as useBaseOffsetInfiniteQuery } from '@/composables/query/offsetInfiniteQuery.composable'
import type { QueryKeyParamsFromConfig } from '@/types/queryKeys.type'

import type {
  ApiUseKeysetInfiniteQueryOptions,
  ApiUseOffsetInfiniteQueryOptions,
  QueryKeyArrayItemFromConfig,
  QueryKeysWithArrayEntityFromConfig,
} from './createApiUtils.types'

export interface CreateApiInfiniteQueryUtilsReturnType<TQueryKeys extends object> {
  useKeysetInfiniteQuery: <TKey extends QueryKeysWithArrayEntityFromConfig<TQueryKeys>>(
    key: TKey,
    queryOptions: ApiUseKeysetInfiniteQueryOptions<TQueryKeys, TKey>,
  ) => ReturnType<typeof useBaseKeysetInfiniteQuery<QueryKeyArrayItemFromConfig<TQueryKeys, TKey>>>
  useOffsetInfiniteQuery: <TKey extends QueryKeysWithArrayEntityFromConfig<TQueryKeys>>(
    key: TKey,
    queryOptions: ApiUseOffsetInfiniteQueryOptions<TQueryKeys, TKey>,
  ) => ReturnType<typeof useBaseOffsetInfiniteQuery<QueryKeyArrayItemFromConfig<TQueryKeys, TKey>>>
}

export function createApiInfiniteQueryUtils<TQueryKeys extends object>():
CreateApiInfiniteQueryUtilsReturnType<TQueryKeys> {
  function useOffsetInfiniteQuery<TKey extends QueryKeysWithArrayEntityFromConfig<TQueryKeys>>(
    key: TKey,
    queryOptions: ApiUseOffsetInfiniteQueryOptions<TQueryKeys, TKey>,
  ) {
    type Params = QueryKeyParamsFromConfig<TQueryKeys, TKey>
    type ParamsWithRefs = Params extends void
      ? void
      : {
          [K in keyof Params]: MaybeRef<Params[K]>
        }

    const params = (queryOptions as { params?: Params }).params
    const queryKey = params === undefined
      ? {
          [key]: undefined,
        } as { [K in TKey]: undefined }
      : {
          [key]: params as ParamsWithRefs,
        } as { [K in TKey]: ParamsWithRefs }

    return useBaseOffsetInfiniteQuery<QueryKeyArrayItemFromConfig<TQueryKeys, TKey>>({
      staleTime: queryOptions.staleTime,
      isEnabled: queryOptions.isEnabled,
      limit: queryOptions.limit,
      queryFn: queryOptions.queryFn,
      queryKey,
    })
  }

  function useKeysetInfiniteQuery<TKey extends QueryKeysWithArrayEntityFromConfig<TQueryKeys>>(
    key: TKey,
    queryOptions: ApiUseKeysetInfiniteQueryOptions<TQueryKeys, TKey>,
  ) {
    type Params = QueryKeyParamsFromConfig<TQueryKeys, TKey>
    type ParamsWithRefs = Params extends void
      ? void
      : {
          [K in keyof Params]: MaybeRef<Params[K]>
        }

    const params = (queryOptions as { params?: Params }).params
    const queryKey = params === undefined
      ? {
          [key]: undefined,
        } as { [K in TKey]: undefined }
      : {
          [key]: params as ParamsWithRefs,
        } as { [K in TKey]: ParamsWithRefs }

    return useBaseKeysetInfiniteQuery<QueryKeyArrayItemFromConfig<TQueryKeys, TKey>>({
      staleTime: queryOptions.staleTime,
      isEnabled: queryOptions.isEnabled,
      limit: queryOptions.limit,
      queryFn: queryOptions.queryFn,
      queryKey,
    })
  }

  return {
    useKeysetInfiniteQuery,
    useOffsetInfiniteQuery,
  }
}
