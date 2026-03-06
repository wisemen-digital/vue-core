import type { QueryClient } from '@tanstack/vue-query'

import { getQueryClient } from '@/config/config'
import { OptimisticUpdates } from '@/utils/optimisticUpdates'

export interface CreateApiOptimisticUpdatesUtilsReturnType<
  TQueryKeys extends object,
> {
  useOptimisticUpdates: () => OptimisticUpdates<TQueryKeys>
}

export function createApiOptimisticUpdatesUtils<TQueryKeys extends object>():
CreateApiOptimisticUpdatesUtilsReturnType<TQueryKeys> {
  function useOptimisticUpdates(): OptimisticUpdates<TQueryKeys> {
    const queryClient: QueryClient = getQueryClient()

    return new OptimisticUpdates<TQueryKeys>(queryClient)
  }

  return {
    useOptimisticUpdates,
  }
}
