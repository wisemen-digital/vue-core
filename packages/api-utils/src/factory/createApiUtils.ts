/* eslint-disable eslint-plugin-wisemen/explicit-function-return-type-with-regex */
import { createApiInfiniteQueryUtils } from './createApiInfiniteQueryUtils'
import { createApiOptimisticUpdatesUtils } from './createApiOptimisticUpdatesUtils'
import { createApiQueryUtils } from './createApiQueryUtils'

export { createApiInfiniteQueryUtils } from './createApiInfiniteQueryUtils'
export { createApiOptimisticUpdatesUtils } from './createApiOptimisticUpdatesUtils'
export { createApiQueryUtils } from './createApiQueryUtils'

/**
 * Factory that creates typed composables based on a user-provided query-keys config.
 * This is an alternative to module augmentation of `QueryKeys`.
 */
export function createApiUtils<TQueryKeys extends object>() {
  return {
    ...createApiQueryUtils<TQueryKeys>(),
    ...createApiInfiniteQueryUtils<TQueryKeys>(),
    ...createApiOptimisticUpdatesUtils<TQueryKeys>(),
  }
}
