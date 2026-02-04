import { OptimisticUpdates } from '@/utils/optimisticUpdates'

import type { CreateApiUtilsOptions } from './createApiUtils.types'

export interface CreateApiOptimisticUpdatesUtilsReturnType<TQueryKeys extends object, TErrorCode extends string = string> {
  useOptimisticUpdates: () => OptimisticUpdates<TQueryKeys>
}

export function createApiOptimisticUpdatesUtils<TQueryKeys extends object, TErrorCode extends string = string>(
  options: CreateApiUtilsOptions,
): CreateApiOptimisticUpdatesUtilsReturnType<TQueryKeys, TErrorCode> {
  function useOptimisticUpdates(): OptimisticUpdates<TQueryKeys> {
    return new OptimisticUpdates<TQueryKeys>(options.queryClient)
  }

  return {
    useOptimisticUpdates,
  }
}
