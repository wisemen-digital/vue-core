import { AsyncResult } from '@/async-result/asyncResult'
import { QUERY_CONFIG } from '@/config/config'
import type {
  QueryKeyParamsFromConfig,
  QueryKeysWithEntityFromConfig,
} from '@/types/queryKeys.type'

import type {
  ApiUsePrefetchQueryOptions,
  CreateApiUtilsOptions,
} from './createApiUtils.types'

export interface CreateApiPrefetchQueryUtilsReturnType<TQueryKeys extends object> {
  usePrefetchQuery: <TKey extends QueryKeysWithEntityFromConfig<TQueryKeys>>(
    key: TKey,
    queryOptions: ApiUsePrefetchQueryOptions<TQueryKeys, TKey>,
  ) => {
    execute: () => Promise<void>
  }
}

export function createApiPrefetchQueryUtils<TQueryKeys extends object>(
  options: CreateApiUtilsOptions,
): CreateApiPrefetchQueryUtilsReturnType<TQueryKeys> {
  function usePrefetchQuery<TKey extends QueryKeysWithEntityFromConfig<TQueryKeys>>(
    key: TKey,
    queryOptions: ApiUsePrefetchQueryOptions<TQueryKeys, TKey>,
  ) {
    type Params = QueryKeyParamsFromConfig<TQueryKeys, TKey>

    const params = (queryOptions as { params?: Params }).params ?? ({} as Params)
    const queryKey = [
      key,
      params,
    ] as const

    async function execute(): Promise<void> {
      await options.queryClient.prefetchQuery({
        staleTime: queryOptions.staleTime ?? QUERY_CONFIG.prefetchStaleTime,
        queryFn: async () => {
          return AsyncResult.fromResult(await queryOptions.queryFn())
        },
        queryKey,
      })
    }

    return {
      execute,
    }
  }

  return {
    usePrefetchQuery,
  }
}
