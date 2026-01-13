import { useQuery as useTanstackQuery } from '@tanstack/vue-query'
import type {
  ComputedRef,
  MaybeRef,
} from 'vue'
import { computed } from 'vue'

import { AsyncResult } from '@/async-result/asyncResult'
import type {
  ApiError,
  ApiResult,
} from '@/types/apiError.type'
import type { QueryKeys } from '@/types/queryKeys.type'

type NonOptionalKeys<T> = {
  [K in keyof T]-?: T[K]
}

export interface UseQueryOptions<TResData> {
  /**
   * The time in milliseconds after which the query will be considered stale
   * After this time, the query will be refetched automatically in the background when it is rendered or accessed
   * @default 0
   */
  staleTime?: number
  /**
   * Whether to enable debug mode
   * When enabled, the query key and parameters will be logged to the console
   * @default false
   */
  isDebug?: boolean
  /**
   * Whether the query is enabled
   * If false, the query will not be executed
   * @default true
   */
  isEnabled?: MaybeRef<boolean>
  /**
   * Function that will be called when query is executed
   * @returns Promise with response data
   */
  queryFn: () => Promise<ApiResult<TResData>>
  /**
   * Query key associated with the query
   */
  queryKey: {
    [TQueryKey in keyof QueryKeys]?: {
      [TQueryKeyParam in keyof NonOptionalKeys<QueryKeys[TQueryKey]>]: MaybeRef<QueryKeys[TQueryKey][TQueryKeyParam]>
    }
  }
}

export interface UseQueryReturnType<TResData> {
  /**
   * Whether query has errored at least once
   * @deprecated - use `result.value.isErr()` instead
   */
  isError: ComputedRef<boolean>
  /**
   * Whether query is currently loading
   * @deprecated - use `result.value.isLoading()` instead
   */
  isFetching: ComputedRef<boolean>
  /**
   * Whether query is initially loading
   * @deprecated - use `result.value.isLoading()` instead
   */
  isLoading: ComputedRef<boolean>
  /**
   * Whether query has been executed successfully
   * @deprecated - use `result.value.isOk()` instead
   */
  isSuccess: ComputedRef<boolean>
  /**
   * Refetch the query
   */
  refetch: () => Promise<void>
  /**
   * Computed result of the query
   * Returns an AsyncResult with three states:
   * - loading: use `result.value.isLoading()`
   * - ok: use `result.value.isOk()` and `result.value.getValue()`
   * - err: use `result.value.isErr()` and `result.value.getError()`
   *
   * Use `result.value.match({ loading, ok, err })` for exhaustive handling
   */
  result: ComputedRef<AsyncResult<TResData, ApiError>>
}

export function useQuery<TResData>(options: UseQueryOptions<TResData>): UseQueryReturnType<TResData> {
  const isDebug = options.isDebug ?? false

  const query = useTanstackQuery({
    staleTime: options.staleTime,
    enabled: options.isEnabled,
    placeholderData: (data) => data,
    queryFn: options.queryFn,
    queryKey: getQueryKey(),
  })

  function getQueryKey(): unknown[] {
    const [
      queryKey,
      params,
    ] = Object.entries(options.queryKey)[0]

    if (isDebug) {
      // eslint-disable-next-line no-console
      console.debug(`Create query with key ${queryKey}`, params)
    }

    return [
      queryKey,
      params,
    ]
  }

  async function refetch(): Promise<void> {
    await query.refetch()
  }

  return {
    isError: computed<boolean>(() => query.data.value?.isErr() ?? false),
    isFetching: computed<boolean>(() => query.isFetching.value),
    isLoading: computed<boolean>(() => query.isLoading.value),
    isSuccess: computed<boolean>(() => query.data.value?.isOk() ?? false),
    refetch,
    result: computed<AsyncResult<TResData, ApiError>>(() => {
      if (query.isLoading.value) {
        return AsyncResult.loading<TResData, ApiError>()
      }

      if (query.data.value) {
        return AsyncResult.fromResult(query.data.value)
      }

      return AsyncResult.loading<TResData, ApiError>()
    }),
  }
}
