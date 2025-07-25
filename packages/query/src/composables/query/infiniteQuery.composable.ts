import type { InfiniteData } from '@tanstack/vue-query'
import { useInfiniteQuery as useTanstackInfiniteQuery } from '@tanstack/vue-query'
import type {
  BasePagination,
  PaginatedData,
  PaginationOptions,
} from '@wisemen/vue-core-components'
import type {
  ComputedRef,
  MaybeRef,
} from 'vue'
import { computed } from 'vue'

import type { QueryKeys } from '@/types/queryKeys.type'

type NonOptionalKeys<T> = {
  [K in keyof T]-?: T[K]
}

interface useInfiniteQueryOptions<TResData, TPagination extends BasePagination> {
  /**
   * Whether to enable debug mode
   */
  isDebug?: boolean
  /**
   * Whether the query is enabled
   */
  enabled?: ComputedRef<boolean>
  /**
   * Pagination options to use in the query
   * @see UsePaginationReturnType
   */
  paginationOptions: ComputedRef<PaginationOptions<TPagination>>
  /**
   * Function that will be called when query is executed
   * @returns Promise with response data
   */
  queryFn: (options: PaginationOptions<TPagination>) => Promise<PaginatedData<TResData>>
  /**
   * Query key associated with the query
   */
  queryKey: {
    [TQueryKey in keyof QueryKeys]?: {
      [TQueryKeyParam in keyof NonOptionalKeys<QueryKeys[TQueryKey]>]: MaybeRef<QueryKeys[TQueryKey][TQueryKeyParam]>
    }
  }
}

export interface UseInfiniteQueryReturnType<TResData> {
  /**
   * Computed value to check if there is a next page
   */
  hasNextPage: ComputedRef<boolean>
  /**
   * Whether query is in error state
   */
  isError: ComputedRef<boolean>
  /**
   * Whether query is currently loading
   */
  isFetching: ComputedRef<boolean>
  /**
   * Whether query is currently fetching next page
   */
  isFetchingNextPage: ComputedRef<boolean>
  /**
   * Whether query is initially loading
   */
  isLoading: ComputedRef<boolean>
  /**
   * Whether query is in success state
   */
  isSuccess: ComputedRef<boolean>
  /**
   * Response data
   */
  data: ComputedRef<PaginatedData<TResData>>
  /**
   * Error object, if in error state
   */
  error: ComputedRef<unknown>
  /**
   * Function to fetch next page
   */
  getNextPage: () => Promise<void>
  /**
   * Function to refetch the query
   */
  refetch: () => Promise<void>
}

export function useInfiniteQuery<TResData, TPagination extends BasePagination>(
  options: useInfiniteQueryOptions<TResData, TPagination>,
): UseInfiniteQueryReturnType<TResData> {
  const isDebug = options.isDebug ?? false

  const infiniteQuery = useTanstackInfiniteQuery<
    PaginatedData<TResData>,
    unknown,
    InfiniteData<PaginatedData<TResData>>,
    readonly unknown[],
      number | unknown | null
  >({
    enabled: options.enabled,
    getNextPageParam: (lastPage: PaginatedData<TResData>): number | unknown | null => {
      if (lastPage.meta === null) {
        return null
      }

      if ('next' in lastPage.meta) {
        return lastPage.meta.next
      }

      if ('offset' in lastPage.meta) {
        const total = lastPage.meta.offset + lastPage.meta.limit

        if (total >= lastPage.meta.total) {
          return null
        }

        return total
      }

      return null
    },
    initialPageParam: 'key' in options.paginationOptions.value.pagination
      ? options.paginationOptions.value.pagination.key
      : options.paginationOptions.value.pagination.offset,
    placeholderData: (data) => data,
    queryFn: async ({
      pageParam,
    }) => {
      const pagination = options.paginationOptions.value.pagination

      return await options.queryFn({
        ...options.paginationOptions.value,
        pagination: 'key' in pagination
          ? {
              key: pageParam as unknown | null,
              limit: pagination.limit,
              type: 'keyset',
            }
          : {
              limit: pagination.limit,
              offset: pageParam as number,
              type: 'offset',
            },
      })
    },
    queryKey: getQueryKey(),
  })

  function getQueryKey(): unknown[] {
    const [
      queryKey,
      params,
    ] = Object.entries(options.queryKey)[0]

    if (isDebug) {
      // eslint-disable-next-line no-console
      console.log(`Create query with key ${queryKey}`, params)
    }

    return [
      queryKey,
      params,
    ]
  }

  return {
    hasNextPage: computed<boolean>(() => infiniteQuery.hasNextPage.value),
    isError: computed<boolean>(() => infiniteQuery.isError.value),
    isFetching: computed<boolean>(() => infiniteQuery.isFetching.value),
    isFetchingNextPage: computed<boolean>(() => infiniteQuery.isFetchingNextPage.value),
    isLoading: computed<boolean>(() => infiniteQuery.isLoading.value),
    isSuccess: computed<boolean>(() => infiniteQuery.isSuccess.value),
    data: computed<PaginatedData<TResData>>(() => {
      const data = infiniteQuery.data.value?.pages.flatMap((page) => page.data) ?? []
      const meta = infiniteQuery.data.value?.pages[0].meta ?? null

      if (meta !== null && 'next' in meta) {
        return {
          data,
          meta: {
            next: meta.next,
            total: data.length,
          },
        }
      }

      return {
        data,
        meta: {
          limit: meta?.limit ?? 0,
          offset: meta?.offset ?? 0,
          total: meta?.total ?? 0,
        },
      }
    }),
    error: computed<unknown>(() => infiniteQuery.error.value),
    getNextPage: async (): Promise<void> => {
      if (infiniteQuery.isFetchingNextPage.value || !infiniteQuery.hasNextPage.value) {
        return
      }

      await infiniteQuery.fetchNextPage()
    },
    refetch: async (): Promise<void> => {
      await infiniteQuery.refetch()
    },
  }
}
