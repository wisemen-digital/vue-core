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

export type CreateApiUtilsReturnType<TQueryKeys extends object, TErrorCode extends string = string> = ReturnType<
  typeof createApiQueryUtils<TQueryKeys, TErrorCode>
>
& ReturnType<typeof createApiPrefetchQueryUtils<TQueryKeys, TErrorCode>>
& ReturnType<typeof createApiInfiniteQueryUtils<TQueryKeys, TErrorCode>>
& ReturnType<typeof createApiPrefetchInfiniteQueryUtils<TQueryKeys, TErrorCode>>
& ReturnType<typeof createApiMutationUtils<TQueryKeys, TErrorCode>>
& ReturnType<typeof createApiOptimisticUpdatesUtils<TQueryKeys, TErrorCode>>

/**
 * Factory that creates typed composables based on a user-provided query-keys config.
 * This is an alternative to module augmentation of `QueryKeys`.
 */
export function createApiUtils<TQueryKeys extends object, TErrorCode extends string = string>(
  options: CreateApiUtilsOptions,
): CreateApiUtilsReturnType<TQueryKeys, TErrorCode> {
  return {
    ...createApiQueryUtils<TQueryKeys, TErrorCode>(),
    ...createApiPrefetchQueryUtils<TQueryKeys, TErrorCode>(options),
    ...createApiPrefetchInfiniteQueryUtils<TQueryKeys, TErrorCode>(options),
    ...createApiInfiniteQueryUtils<TQueryKeys, TErrorCode>(),
    ...createApiMutationUtils<TQueryKeys, TErrorCode>(),
    ...createApiOptimisticUpdatesUtils<TQueryKeys, TErrorCode>(options),
  }
}
