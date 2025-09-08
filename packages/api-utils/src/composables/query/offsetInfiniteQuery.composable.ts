import { useInfiniteQuery } from '@tanstack/vue-query'
import type { QueryKeys } from '@wisemen/vue-core-query'
import {
  err,
  ok,
} from 'neverthrow'
import type { MaybeRef } from 'vue'
import { computed } from 'vue'

import type {
  OffsetPaginationParams,
  OffsetPaginationResult,
} from '@/types/pagination.type'
import { QUERY_CONFIG } from '@/utils/config.utils'

type NonOptionalKeys<T> = {
  [K in keyof T]-?: T[K]
}

export interface OffsetInfiniteQueryOptions<TData> {
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
  queryFn: (paginationParams: OffsetPaginationParams) => Promise<OffsetPaginationResult<TData>>
  /**
   * Query key associated with the query
   */
  queryKey: {
    [TQueryKey in keyof QueryKeys]?: {
      [TQueryKeyParam in keyof NonOptionalKeys<QueryKeys[TQueryKey]>]: MaybeRef<QueryKeys[TQueryKey][TQueryKeyParam]>
    }
  }
}

const DEFAULT_LIMIT = QUERY_CONFIG.limit

export function useOffsetInfiniteQuery<TData>(options: OffsetInfiniteQueryOptions<TData>) {
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
    getNextPageParam: (lastPage: OffsetPaginationResult<TData>) => {
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

  const result = computed<OffsetPaginationResult<TData>>(() => {
    const firstError = infiniteQuery.data.value?.pages.find((page) => page.isErr())

    if (firstError) {
      return err(firstError.error)
    }

    const data = infiniteQuery.data.value?.pages
      .filter((page) => page.isOk())
      .flatMap((page) => page.value.data) ?? []

    const firstPage = infiniteQuery.data.value?.pages[0]
    const meta = firstPage?.isOk() ? firstPage.value.meta : null

    return ok({
      data,
      meta: {
        limit: meta?.limit ?? 0,
        offset: meta?.offset ?? 0,
        total: meta?.total ?? data.length,
      },
    })
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
    fetchNextPage: fetchNextPage as unknown as (() => Promise<void>),
    refetch: async (): Promise<void> => {
      await infiniteQuery.refetch()
    },
    result,
  }
}
