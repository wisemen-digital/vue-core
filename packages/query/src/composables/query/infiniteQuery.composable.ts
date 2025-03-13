import type {InfiniteData,} from '@tanstack/vue-query'
import {useInfiniteQuery as useTanstackInfiniteQuery} from '@tanstack/vue-query'
import {computed, type ComputedRef, type MaybeRef,} from 'vue'
import type {QueryKeys} from "@/types/queryKeys.type";
import type {PaginatedData, PaginationOptions} from "@wisemen/vue-core";

type NonOptionalKeys<T> = {
  [K in keyof T]-?: T[K]
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
  queryFn: (options: PaginationOptions<TFilters>) => Promise<PaginatedData<TResData>>
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

export function useInfiniteQuery<TResData, TFilters>(
    options: useInfiniteQueryOptions<TResData, TFilters>,
): UseInfiniteQueryReturnType<TResData> {
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
    initialPageParam: 'key' in options.paginationOptions.pagination
        ? options.paginationOptions.pagination.key
        : options.paginationOptions.pagination.offset,
    placeholderData: (data) => data,
    queryFn: async ({ pageParam }) => {
      return await options.queryFn({
        ...options.paginationOptions,
        pagination: 'key' in options.paginationOptions.pagination
            ? {
              key: pageParam as unknown | null,
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
    data: computed<PaginatedData<TResData>>(() => {
      let data = infiniteQuery.data.value?.pages.flatMap((page) => page.data) ?? [];
      let meta = infiniteQuery.data.value?.pages[0].meta ?? null

      if(meta !== null && 'next' in meta) {
        let newVar: PaginatedData<TResData> = {
          data: data,
          meta: {
            next: meta.next,
            total: data.length,
          },
        };
        return newVar
      }

      return {
        data: data,
        meta: {
          limit: meta?.limit ?? 0,
          offset: meta?.offset ?? 0,
          total: meta?.total ?? 0,
        }
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
