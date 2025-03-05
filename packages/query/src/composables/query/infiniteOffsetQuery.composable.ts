/**
 * TODO: Once stable, this composable should be moved to @wisemen/vue-core-query
 */
import type { InfiniteData } from '@tanstack/vue-query'
import { useInfiniteQuery as useTanstackInfiniteQuery } from '@tanstack/vue-query'
import {
  computed,
  type ComputedRef,
  type MaybeRef,
} from 'vue'

import type { PaginatedData } from '@/types/paginatedData.type'
import type { QueryKeys } from '@/types/queryKeys.type'

type NonOptionalKeys<T> = {
  [K in keyof T]-?: T[K]
}

export interface InfiniteQueryData<TData> {
  data: TData[]
  meta: {
    total: number
  }
}

interface useInfiniteQueryOptions<TResData> {
  /**
   *
   */
  limit: number
  /**
   *
   */
  offset: number
  /**
   * Function that will be called when query is executed
   * @returns Promise with response data
   */
  queryFn: (options: { offset: number }) => Promise<PaginatedData<TResData>>
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
  data: ComputedRef<InfiniteQueryData<TResData>>
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

export function useInfiniteOffsetQuery<TResData>(
  options: useInfiniteQueryOptions<TResData>,
): UseInfiniteQueryReturnType<TResData> {
  const infiniteQuery = useTanstackInfiniteQuery<
    PaginatedData<TResData>,
    never,
    InfiniteData<PaginatedData<TResData>>,
    readonly unknown[],
    number
  >({
    getNextPageParam: (lastPage) => {
      const total = lastPage.meta.offset + lastPage.meta.limit

      if (total >= lastPage.meta.total) {
        return undefined
      }

      return total
    },
    initialPageParam: options.offset,
    placeholderData: (data) => data,
    queryFn: async ({ pageParam }) => {
      return await options.queryFn({ offset: pageParam })
    },
    queryKey: getQueryKey(),
  })

  function getQueryKey(): string[] {
    const [
      queryKey,
      params,
    ] = Object.entries(options.queryKey)[0]

    const paramValues = Object.values(params as Record<string, MaybeRef<unknown>>)

    return [
      queryKey,
      ...paramValues as string[],
    ]
  }

  return {
    hasNextPage: computed<boolean>(() => infiniteQuery.hasNextPage.value),
    isError: computed<boolean>(() => infiniteQuery.isError.value),
    isFetching: computed<boolean>(() => infiniteQuery.isFetching.value),
    isFetchingNextPage: computed<boolean>(() => infiniteQuery.isFetchingNextPage.value),
    isLoading: computed<boolean>(() => infiniteQuery.isLoading.value),
    isSuccess: computed<boolean>(() => infiniteQuery.isSuccess.value),
    data: computed<InfiniteQueryData<TResData>>(() => {
      return {
        data: infiniteQuery.data.value?.pages.flatMap((page) => page.data) ?? [],
        meta: {
          total: infiniteQuery.data.value?.pages[0].meta.total ?? 0,
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
