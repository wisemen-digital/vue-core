import { useQuery as useTanstackQuery } from '@tanstack/vue-query'
import {
  computed,
  type ComputedRef,
  type MaybeRef,
} from 'vue'

import type { QueryKeys } from '@/index'

type NonOptionalKeys<T> = {
  [K in keyof T]-?: T[K]
}

interface UseQueryOptions<TResData> {
  /**
   * Whether to enable debug mode
   */
  isDebug?: boolean
  /**
   * Whether the query is enabled
   */
  isEnabled?: MaybeRef<boolean>
  /**
   * Function that will be called when query is executed
   * @returns Promise with response data
   */
  queryFn: () => Promise<TResData>
  /**
   * Query key associated with the query
   */
  queryKey: {
    [TQueryKey in keyof QueryKeys]?: {
      [TQueryKeyParam in keyof NonOptionalKeys<QueryKeys[TQueryKey]>]: MaybeRef<QueryKeys[TQueryKey][TQueryKeyParam]>
    }
  }
  /**
   * The time in milliseconds after which the query will be considered stale
   * After this time, the query will be refetched automatically in the background when it is rendered or accessed
   * @default 0
   */
  staleTime?: number
}

export interface UseQueryReturnType<TResData> {
  /**
   * Whether query is in error state
   */
  isError: ComputedRef<boolean>
  /**
   * Whether query is loading
   */
  isLoading: ComputedRef<boolean>
  /**
   * Whether query is in success state
   */
  isSuccess: ComputedRef<boolean>
  /**
   * Response data
   */
  data: ComputedRef<TResData | null>
  /**
   * Error object, if in error state
   */
  error: ComputedRef<unknown>
}

export function useQuery<TResData>(options: UseQueryOptions<TResData>): UseQueryReturnType<TResData> {
  const isDebug = options.isDebug ?? false

  const query = useTanstackQuery({
    enabled: options.isEnabled,
    placeholderData: data => data,
    queryFn: options.queryFn,
    queryKey: getQueryKey(),
    staleTime: options.staleTime,
  })

  function getQueryKey(): string[] {
    const [
      queryKey,
      params,
    ] = Object.entries(options.queryKey)[0]

    const paramValues = Object.values(params as Record<string, MaybeRef<unknown>>)

    if (isDebug) {
      // eslint-disable-next-line no-console
      console.log(`Create query with key ${queryKey}`, paramValues)
    }

    return [
      queryKey,
      ...paramValues as string[],
    ]
  }

  return {
    isError: computed<boolean>(() => query.isError.value),
    isLoading: computed<boolean>(() => query.isLoading.value),
    isSuccess: computed<boolean>(() => query.isSuccess.value),
    data: computed<TResData | null>(() => query.data.value ?? null),
    error: computed<unknown>(() => query.error.value),
  }
}
