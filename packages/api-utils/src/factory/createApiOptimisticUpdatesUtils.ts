/* eslint-disable eslint-plugin-wisemen/explicit-function-return-type-with-regex */
import { OptimisticUpdates } from '@/utils/optimisticUpdates'

import type { CreateApiUtilsOptions } from './createApiUtils.types'

export function createApiOptimisticUpdatesUtils<TQueryKeys extends object>(options: CreateApiUtilsOptions) {
  function useOptimisticUpdates(): OptimisticUpdates<TQueryKeys> {
    return new OptimisticUpdates<TQueryKeys>(options.queryClient)
  }

  return {
    useOptimisticUpdates,
  }
}
