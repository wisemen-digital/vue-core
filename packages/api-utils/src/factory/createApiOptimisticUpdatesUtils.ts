import type { QueryClient } from '@tanstack/vue-query'

import { OptimisticUpdates } from '@/utils/optimisticUpdates'

export interface CreateApiOptimisticUpdatesUtilsReturnType<
  TQueryKeys extends object,
> {
  useOptimisticUpdates: () => OptimisticUpdates<TQueryKeys>
}

export function createApiOptimisticUpdatesUtils<TQueryKeys extends object>(
  queryClient: QueryClient,
): CreateApiOptimisticUpdatesUtilsReturnType<TQueryKeys> {
  function useOptimisticUpdates(): OptimisticUpdates<TQueryKeys> {
    return new OptimisticUpdates<TQueryKeys>(queryClient)
  }

  return {
    useOptimisticUpdates,
  }
}
