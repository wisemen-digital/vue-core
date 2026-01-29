/* eslint-disable eslint-plugin-wisemen/explicit-function-return-type-with-regex */
import type { MaybeRef } from 'vue'

import type { UseQueryReturnType } from '@/composables/query/query.composable'
import { useQuery as useBaseQuery } from '@/composables/query/query.composable'
import type {
  QueryKeyEntityFromConfig,
  QueryKeyParamsFromConfig,
  QueryKeysWithEntityFromConfig,
} from '@/types/queryKeys.type'

import type { ApiUseQueryOptions } from './createApiUtils.types'

export function createApiQueryUtils<TQueryKeys extends object>() {
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
    useQuery,
  }
}
