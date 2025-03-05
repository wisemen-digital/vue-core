/**
 * TODO: Once stable, this composable should be moved to @wisemen/vue-core-query
 */
import type {
  InfiniteData,
} from '@tanstack/vue-query'
import { useInfiniteQuery as useTanstackInfiniteQuery } from '@tanstack/vue-query'
import {
  computed,
  type ComputedRef,
  type MaybeRef,
} from 'vue'

import type { InfinitePaginatedData } from '@/types/paginatedData.type'
import type { QueryKeys } from '@/types/queryKeys.type'

type NonOptionalKeys<T> = {
  [K in keyof T]-?: T[K]
}

export interface InfiniteQueryData<TData> {
  data: TData[]
}

interface useInfiniteKeyQueryOptions<TResData> {
  /**
   *
   */
  key: never | null
  /**
   *
   */
  limit: number
  /**
   * Function that will be called when query is executed
   * @returns Promise with response data
   */
  queryFn: (options: { key: never | null }) => Promise<InfinitePaginatedData<TResData>>
  /**
   * Query key associated with the query
   */
  queryKey: {
    [TQueryKey in keyof QueryKeys]?: {
      [TQueryKeyParam in keyof NonOptionalKeys<QueryKeys[TQueryKey]>]: MaybeRef<QueryKeys[TQueryKey][TQueryKeyParam]>
    }
  }
}

export interface UseInfiniteKeyQueryReturnType<TResData> {
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

export function useInfiniteKeyQuery<TResData>(
  options: useInfiniteKeyQueryOptions<TResData>,
): UseInfiniteKeyQueryReturnType<TResData> {
  const infiniteQuery = useTanstackInfiniteQuery<
    InfinitePaginatedData<TResData>,
    never,
    InfiniteData<InfinitePaginatedData<TResData>>,
    readonly unknown[],
      never | null
  >({
    getNextPageParam: (lastPage): never | null => {
      return lastPage.meta.next ?? null
    },
    initialPageParam: options.key,
    placeholderData: (data) => data,
    queryFn: async ({ pageParam }) => {
      return await options.queryFn({ key: pageParam })
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
