/* eslint-disable eslint-plugin-wisemen/explicit-function-return-type-with-regex */
import type { QueryClient } from '@tanstack/vue-query'
import type { MaybeRef } from 'vue'

import type { UseQueryReturnType } from '@/composables/query/query.composable'
import { useQuery as useBaseQuery } from '@/composables/query/query.composable'
import type { ApiResult } from '@/types/apiError.type'
import type {
  QueryKeyEntityFromConfig,
  QueryKeyParamsFromConfig,
  QueryKeysWithEntityFromConfig,
} from '@/types/queryKeys.type'
import { OptimisticUpdates } from '@/utils/optimisticUpdates'

export interface CreateApiUtilsOptions {
  queryClient: QueryClient
}

type ApiUseQueryOptions<
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

/**
 * Factory that creates typed composables based on a user-provided query-keys config.
 *
 * This is an alternative to module augmentation of `QueryKeys`.
 */
export function createApiUtils<TQueryKeys extends object>(options: CreateApiUtilsOptions) {
  function useOptimisticUpdates(): OptimisticUpdates<TQueryKeys> {
    return new OptimisticUpdates<TQueryKeys>(options.queryClient)
  }

  function useQuery<TKey extends QueryKeysWithEntityFromConfig<TQueryKeys>>(
    key: TKey,
    queryOptions: ApiUseQueryOptions<TQueryKeys, TKey>,
  ): UseQueryReturnType<QueryKeyEntityFromConfig<TQueryKeys, TKey>> {
    type Params = QueryKeyParamsFromConfig<TQueryKeys, TKey>
    type ParamsWithRefs = {
      [K in keyof Params]: MaybeRef<Params[K]>
    }

    const params = (queryOptions as { params?: Params }).params ?? ({} as Params)
    const queryKey = {
      [key]: params as ParamsWithRefs,
    } as { [K in TKey]: ParamsWithRefs }

    return useBaseQuery<QueryKeyEntityFromConfig<TQueryKeys, TKey>>({
      staleTime: queryOptions.staleTime,
      isDebug: queryOptions.isDebug,
      isEnabled: queryOptions.isEnabled,
      queryFn: queryOptions.queryFn,
      queryKey,
    })
  }

  return {
    useOptimisticUpdates,
    useQuery,
  }
}
