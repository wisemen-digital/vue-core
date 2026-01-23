/* eslint-disable eslint-plugin-wisemen/explicit-function-return-type-with-regex */
import type { QueryClient } from '@tanstack/vue-query'

import { OptimisticUpdates } from '@/utils/optimisticUpdates'

export interface CreateApiUtilsOptions {
  queryClient: QueryClient
}

/**
 * Factory that creates typed composables based on a user-provided query-keys config.
 *
 * This is an alternative to module augmentation of `QueryKeys`.
 */
export function createApiUtils<TQueryKeys extends object>(options: CreateApiUtilsOptions) {
  function useOptimisticUpdates(): OptimisticUpdates<TQueryKeys> {
    return new OptimisticUpdates<TQueryKeys>(options.queryClient)
  }

  return {
    useOptimisticUpdates,
  }
}
