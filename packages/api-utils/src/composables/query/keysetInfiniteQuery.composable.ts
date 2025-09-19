import { useInfiniteQuery } from '@tanstack/vue-query'
import {
  err,
  ok,
} from 'neverthrow'
import type { MaybeRef } from 'vue'
import { computed } from 'vue'

import type {
  KeysetPaginationParams,
  KeysetPaginationResult,
} from '@/types/pagination.type'
import type { QueryKeys } from '@/types/queryKeys.type'
import { QUERY_CONFIG } from '@/utils/config.utils'

type NonOptionalKeys<T> = {
  [K in keyof T]-?: T[K]
}

export interface KeysetInfiniteQueryOptions<TData> {
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
  queryFn: (paginationParams: KeysetPaginationParams) => Promise<KeysetPaginationResult<TData>>
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

export function useKeysetInfiniteQuery<TData>(options: KeysetInfiniteQueryOptions<TData>) {
  function getQueryKey(): unknown[] {
    const [
      queryKey,
      params,
    ] = Object.entries(options.queryKey)[0]

    return [
      queryKey,
      params,
    ]
  }

  const infiniteQuery = useInfiniteQuery({
    staleTime: options.staleTime,
    enabled: options.isEnabled,
    getNextPageParam: (lastPage: KeysetPaginationResult<TData>) => {
      if (lastPage.isErr()) {
        return null
      }

      return lastPage.value.meta.next ?? null
    },
    initialPageParam: undefined,
    placeholderData: (data) => data,
    queryFn: ({
      pageParam,
    }) =>
      options.queryFn({
        key: pageParam as string,
        limit: options.limit ?? DEFAULT_LIMIT,
      }),
    queryKey: getQueryKey(),
  })

  const hasError = computed<boolean>(() => {
    return Boolean(infiniteQuery.data.value?.pages.find((page) => page.isErr()))
  })

  const result = computed<KeysetPaginationResult<TData>>(() => {
    const firstError = infiniteQuery.data.value?.pages.find((page) => page.isErr())

    if (firstError) {
      return err(firstError.error)
    }

    const data = infiniteQuery.data.value?.pages
      .filter((page) => page.isOk())
      .flatMap((page) => page.value.data) ?? []

    const firstPage = infiniteQuery.data.value?.pages[0]
    const meta = firstPage?.isOk()
      ? firstPage.value.meta
      : {
          next: null,
          total: data.length,
        }

    return ok({
      data,
      meta: {
        next: infiniteQuery.hasNextPage.value ? meta.next : null,
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
    fetchNextPage,
    refetch: async (): Promise<void> => {
      await infiniteQuery.refetch()
    },
    result,
  }
}
