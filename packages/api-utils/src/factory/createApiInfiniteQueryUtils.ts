/* eslint-disable eslint-plugin-wisemen/explicit-function-return-type-with-regex */
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

export function createApiInfiniteQueryUtils<TQueryKeys extends object>() {
  function useOffsetInfiniteQuery<TKey extends QueryKeysWithArrayEntityFromConfig<TQueryKeys>>(
    key: TKey,
    queryOptions: ApiUseOffsetInfiniteQueryOptions<TQueryKeys, TKey>,
  ) {
    type Params = QueryKeyParamsFromConfig<TQueryKeys, TKey>
    type ParamsWithRefs = {
      [K in keyof Params]: MaybeRef<Params[K]>
    }

    const params = (queryOptions as { params?: Params }).params ?? ({} as Params)
    const queryKey = {
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
    type ParamsWithRefs = {
      [K in keyof Params]: MaybeRef<Params[K]>
    }

    const params = (queryOptions as { params?: Params }).params ?? ({} as Params)
    const queryKey = {
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
