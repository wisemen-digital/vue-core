/* eslint-disable eslint-plugin-wisemen/explicit-function-return-type-with-regex */
import type { MaybeRef } from 'vue'

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

export function createApiPrefetchQueryUtils<TQueryKeys extends object>(options: CreateApiUtilsOptions) {
  function usePrefetchQuery<TKey extends QueryKeysWithEntityFromConfig<TQueryKeys>>(
    key: TKey,
    queryOptions: ApiUsePrefetchQueryOptions<TQueryKeys, TKey>,
  ) {
    type Params = QueryKeyParamsFromConfig<TQueryKeys, TKey>
    type ParamsWithRefs = {
      [K in keyof Params]: MaybeRef<Params[K]>
    }

    const params = (queryOptions as { params?: Params }).params ?? ({} as Params)
    const queryKey = [
      key,
      params as ParamsWithRefs,
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
