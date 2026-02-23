import type { QueryClient } from '@tanstack/vue-query'

import { getQueryClient } from '@/config/config'

import { createApiInfiniteQueryUtils } from './createApiInfiniteQueryUtils'
import { createApiMutationUtils } from './createApiMutationUtils'
import { createApiOptimisticUpdatesUtils } from './createApiOptimisticUpdatesUtils'
import { createApiPrefetchInfiniteQueryUtils } from './createApiPrefetchInfiniteQueryUtils'
import { createApiPrefetchQueryUtils } from './createApiPrefetchQueryUtils'
import { createApiQueryUtils } from './createApiQueryUtils'

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

export type CreateApiUtilsReturnType<TQueryKeys extends object, TErrorCode extends string = string> = ReturnType<
  typeof createApiQueryUtils<TQueryKeys, TErrorCode>
>
& ReturnType<typeof createApiPrefetchQueryUtils<TQueryKeys, TErrorCode>>
& ReturnType<typeof createApiInfiniteQueryUtils<TQueryKeys, TErrorCode>>
& ReturnType<typeof createApiPrefetchInfiniteQueryUtils<TQueryKeys, TErrorCode>>
& ReturnType<typeof createApiMutationUtils<TQueryKeys, TErrorCode>>
& ReturnType<typeof createApiOptimisticUpdatesUtils<TQueryKeys>>

/**
 * Factory that creates typed composables based on a user-provided query-keys config.
 *
 * Requires `initializeApiUtils(queryClient)` to be called first.
 *
 * @example
 * ```typescript
 * // In app setup (plugin or main.ts):
 * initializeApiUtils(queryClient)
 *
 * // In your api lib:
 * export const { useQuery, useMutation, useOptimisticUpdates } = createApiUtils<MyQueryKeys>()
 * ```
 */
export function createApiUtils<TQueryKeys extends object, TErrorCode extends string = string>(): CreateApiUtilsReturnType<TQueryKeys, TErrorCode> {
  const queryClient: QueryClient = getQueryClient()

  return {
    ...createApiQueryUtils<TQueryKeys, TErrorCode>(),
    ...createApiPrefetchQueryUtils<TQueryKeys, TErrorCode>(queryClient),
    ...createApiPrefetchInfiniteQueryUtils<TQueryKeys, TErrorCode>(queryClient),
    ...createApiInfiniteQueryUtils<TQueryKeys, TErrorCode>(),
    ...createApiMutationUtils<TQueryKeys, TErrorCode>(),
    ...createApiOptimisticUpdatesUtils<TQueryKeys>(queryClient),
  }
}
