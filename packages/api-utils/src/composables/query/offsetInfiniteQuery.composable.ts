import { useInfiniteQuery } from '@tanstack/vue-query'
import type { MaybeRef } from 'vue'
import { computed } from 'vue'

import { AsyncResult } from '@/async-result/asyncResult'
import { QUERY_CONFIG } from '@/config/config'
import type { ApiError } from '@/types/apiError.type'
import type {
  OffsetPaginationParams,
  OffsetPaginationResponse,
  OffsetPaginationResult,
} from '@/types/pagination.type'
import type { QueryKeys } from '@/types/queryKeys.type'

type NonOptionalKeys<T> = {
  [K in keyof T]-?: T[K]
}

// Helper to extract params from QueryKeys (backwards compatible)
type ExtractParams<T> = T extends { params: infer P } ? P : T

export interface OffsetInfiniteQueryOptions<TData, TErrorCode extends string = string> {
  /**
   * The time in milliseconds after which the query will be considered stale
   * After this time, the query will be refetched automatically in the background when it is rendered or accessed
   * @default 0
   */
  staleTime?: number
  /**
   * Whether the query is enabled
   * If false, the query will not be executed
   * @default true
   */
  isEnabled?: MaybeRef<boolean>
  /**
   * Maximum number of items to fetch per page, default can be set in config
   * @default 20
   */
  limit?: number
  /**
   * Function that will be called when query is executed
   * @returns Promise with response data
   */
  queryFn: (paginationParams: OffsetPaginationParams) => Promise<OffsetPaginationResult<TData, TErrorCode>>
  /**
   * Query key associated with the query
   */
  queryKey: {
    [TQueryKey in keyof QueryKeys]?: {
      [TQueryKeyParam in keyof NonOptionalKeys<ExtractParams<QueryKeys[TQueryKey]>>]: MaybeRef<
        ExtractParams<QueryKeys[TQueryKey]>[TQueryKeyParam]
      >
    }
  }
}

const DEFAULT_LIMIT = QUERY_CONFIG.limit

export function useOffsetInfiniteQuery<TData, TErrorCode extends string = string>(
  options: OffsetInfiniteQueryOptions<TData, TErrorCode>,
) {
  function getQueryKey(): unknown[] {
    const entries = Object.entries(options.queryKey)
    const [
      first,
    ] = entries

    if (!first) {
      return []
    }
    const [
      queryKey,
      params,
    ] = first as [string, unknown]

    return [
      queryKey,
      params,
    ]
  }

  const infiniteQuery = useInfiniteQuery({
    staleTime: options.staleTime,
    enabled: options.isEnabled,
    getNextPageParam: (lastPage: OffsetPaginationResult<TData, TErrorCode>) => {
      if (lastPage.isErr()) {
        return null
      }

      const total = lastPage.value.meta.offset + lastPage.value.meta.limit

      if (total >= lastPage.value.meta.total) {
        return null
      }

      return total
    },
    initialPageParam: 0,
    placeholderData: (data) => data,
    queryFn: ({
      pageParam,
    }) => options.queryFn({
      limit: options.limit ?? DEFAULT_LIMIT,
      offset: pageParam ?? 0,
    }),
    queryKey: getQueryKey(),
  })

  const hasError = computed<boolean>(() => {
    return Boolean(infiniteQuery.data.value?.pages.find((page) => page.isErr()))
  })

  const result = computed<AsyncResult<OffsetPaginationResponse<TData>, ApiError<TErrorCode>>>(() => {
    if (infiniteQuery.isLoading.value) {
      return AsyncResult.loading<OffsetPaginationResponse<TData>, ApiError<TErrorCode>>()
    }

    const firstError = infiniteQuery.data.value?.pages.find((page) => page.isErr())

    if (firstError) {
      return AsyncResult.err<OffsetPaginationResponse<TData>, ApiError<TErrorCode>>(firstError.error)
    }

    const data = infiniteQuery.data.value?.pages
      .filter((page) => page.isOk())
      .flatMap((page) => page.value.data) ?? []

    const firstPage = infiniteQuery.data.value?.pages[0]
    const meta = firstPage?.isOk() ? firstPage.value.meta : null

    const response: OffsetPaginationResponse<TData> = {
      data,
      meta: {
        limit: meta?.limit ?? 0,
        offset: meta?.offset ?? 0,
        total: meta?.total ?? data.length,
      },
    }

    return AsyncResult.ok<OffsetPaginationResponse<TData>, ApiError<TErrorCode>>(response)
  })

  // eslint-disable-next-line eslint-plugin-wisemen/explicit-function-return-type-with-regex
  function fetchNextPage() {
    if (!infiniteQuery.hasNextPage.value || infiniteQuery.isFetchingNextPage.value) {
      return
    }

    return infiniteQuery.fetchNextPage()
  }

  return {
    hasNextPage: computed<boolean>(() => infiniteQuery.hasNextPage.value),
    isError: computed<boolean>(() => hasError.value),
    isFetching: computed<boolean>(() => infiniteQuery.isFetching.value),
    isFetchingNextPage: computed<boolean>(() => infiniteQuery.isFetchingNextPage.value),
    isLoading: computed<boolean>(() => infiniteQuery.isLoading.value),
    isSuccess: computed<boolean>(() => !hasError.value),
    fetchNextPage: async (): Promise<void> => {
      await fetchNextPage()
    },
    refetch: async (): Promise<void> => {
      await infiniteQuery.refetch()
    },
    result,
  }
}
