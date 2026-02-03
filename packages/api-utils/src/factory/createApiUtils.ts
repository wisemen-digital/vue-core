import { createApiInfiniteQueryUtils } from './createApiInfiniteQueryUtils'
import { createApiMutationUtils } from './createApiMutationUtils'
import { createApiOptimisticUpdatesUtils } from './createApiOptimisticUpdatesUtils'
import { createApiPrefetchInfiniteQueryUtils } from './createApiPrefetchInfiniteQueryUtils'
import { createApiPrefetchQueryUtils } from './createApiPrefetchQueryUtils'
import { createApiQueryUtils } from './createApiQueryUtils'
import type { CreateApiUtilsOptions } from './createApiUtils.types'

export type { CreateApiInfiniteQueryUtilsReturnType } from './createApiInfiniteQueryUtils'
export { createApiInfiniteQueryUtils } from './createApiInfiniteQueryUtils'
export type { CreateApiMutationUtilsReturnType } from './createApiMutationUtils'
export { createApiMutationUtils } from './createApiMutationUtils'
export type { CreateApiOptimisticUpdatesUtilsReturnType } from './createApiOptimisticUpdatesUtils'
export { createApiOptimisticUpdatesUtils } from './createApiOptimisticUpdatesUtils'
export type { CreateApiPrefetchInfiniteQueryUtilsReturnType } from './createApiPrefetchInfiniteQueryUtils'
export { createApiPrefetchInfiniteQueryUtils } from './createApiPrefetchInfiniteQueryUtils'
export type { CreateApiPrefetchQueryUtilsReturnType } from './createApiPrefetchQueryUtils'
export { createApiPrefetchQueryUtils } from './createApiPrefetchQueryUtils'
export type { CreateApiQueryUtilsReturnType } from './createApiQueryUtils'
export { createApiQueryUtils } from './createApiQueryUtils'
export type { CreateApiUtilsOptions } from './createApiUtils.types'

export type CreateApiUtilsReturnType<TQueryKeys extends object> = ReturnType<
  typeof createApiQueryUtils<TQueryKeys>
>
& ReturnType<typeof createApiPrefetchQueryUtils<TQueryKeys>>
& ReturnType<typeof createApiInfiniteQueryUtils<TQueryKeys>>
& ReturnType<typeof createApiPrefetchInfiniteQueryUtils<TQueryKeys>>
& ReturnType<typeof createApiMutationUtils<TQueryKeys>>
& ReturnType<typeof createApiOptimisticUpdatesUtils<TQueryKeys>>

/**
 * Factory that creates typed composables based on a user-provided query-keys config.
 * This is an alternative to module augmentation of `QueryKeys`.
 */
export function createApiUtils<TQueryKeys extends object>(
  options: CreateApiUtilsOptions,
): CreateApiUtilsReturnType<TQueryKeys> {
  return {
    ...createApiQueryUtils<TQueryKeys>(),
    ...createApiPrefetchQueryUtils<TQueryKeys>(options),
    ...createApiPrefetchInfiniteQueryUtils<TQueryKeys>(options),
    ...createApiInfiniteQueryUtils<TQueryKeys>(),
    ...createApiMutationUtils<TQueryKeys>(),
    ...createApiOptimisticUpdatesUtils<TQueryKeys>(options),
  }
}
