import { OptimisticUpdates } from '@/utils/optimisticUpdates'

import type { CreateApiUtilsOptions } from './createApiUtils.types'

export interface CreateApiOptimisticUpdatesUtilsReturnType<TQueryKeys extends object> {
  useOptimisticUpdates: () => OptimisticUpdates<TQueryKeys>
}

export function createApiOptimisticUpdatesUtils<TQueryKeys extends object>(
  options: CreateApiUtilsOptions,
): CreateApiOptimisticUpdatesUtilsReturnType<TQueryKeys> {
  function useOptimisticUpdates(): OptimisticUpdates<TQueryKeys> {
    return new OptimisticUpdates<TQueryKeys>(options.queryClient)
  }

  return {
    useOptimisticUpdates,
  }
}
