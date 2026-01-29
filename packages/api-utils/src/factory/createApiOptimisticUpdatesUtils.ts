/* eslint-disable eslint-plugin-wisemen/explicit-function-return-type-with-regex */
import { OptimisticUpdates } from '@/utils/optimisticUpdates'

export function createApiOptimisticUpdatesUtils<TQueryKeys extends object>() {
  function useOptimisticUpdates(): OptimisticUpdates<TQueryKeys> {
    return new OptimisticUpdates<TQueryKeys>()
  }

  return {
    useOptimisticUpdates,
  }
}
