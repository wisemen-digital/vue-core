import type {
  InfiniteData,
} from '@tanstack/vue-query'
import { useInfiniteQuery as useTanstackInfiniteQuery } from '@tanstack/vue-query'
import type { PaginationOptions } from '@wisemen/vue-core'
import {
  computed,
  type ComputedRef,
  type MaybeRef,
} from 'vue'

import type { QueryKeys } from '@/types/queryKeys.type'

type NonOptionalKeys<T> = {
  [K in keyof T]-?: T[K]
}

export interface InfiniteQueryData<TData> {
  data: TData[]
}

export interface InfinitePaginatedData<TSchema> {
  data: TSchema[]
  meta: {
    limit: number
    offset: number
    total: number
  } | {
    next: null | unknown
  }
}

interface useInfiniteQueryOptions<TResData, TFilters> {
  enabled?: ComputedRef<boolean>
  /**
   * Pagination options to use in the query
   * @see UsePaginationReturnType
   */
  paginationOptions: PaginationOptions<TFilters>
  /**
   * Function that will be called when query is executed
   * @returns Promise with response data
   */
  queryFn: (options: PaginationOptions<TFilters>) => Promise<InfinitePaginatedData<TResData>>
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

export function useInfiniteQuery<TResData, TFilters>(
  options: useInfiniteQueryOptions<TResData, TFilters>,
): UseInfiniteQueryReturnType<TResData> {
  const infiniteQuery = useTanstackInfiniteQuery<
    InfinitePaginatedData<TResData>,
    unknown,
    InfiniteData<InfinitePaginatedData<TResData>>,
    readonly unknown[],
        null | number | unknown
  >({
    enabled: options.enabled,
    getNextPageParam: (lastPage: InfinitePaginatedData<TResData>): null | number | unknown => {
      if ('next' in lastPage.meta) {
        return lastPage.meta.next
      }

      if ('offset' in lastPage.meta) {
        const total = lastPage.meta.offset + lastPage.meta.limit

        if (total >= lastPage.meta.total) {
          return undefined
        }

        return total
      }

      return null
    },
    initialPageParam: 'key' in options.paginationOptions.pagination
      ? options.paginationOptions.pagination.key
      : options.paginationOptions.pagination.offset,
    placeholderData: (data) => data,
    queryFn: async ({ pageParam }) => {
      return await options.queryFn({
        ...options.paginationOptions,
        pagination: 'key' in options.paginationOptions.pagination
          ? {
              key: pageParam as null | unknown,
              limit: options.paginationOptions.pagination.limit,
              type: 'keyset',
            }
          : {
              limit: options.paginationOptions.pagination.limit,
              offset: pageParam as number,
              type: 'offset',
            },
      })
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
