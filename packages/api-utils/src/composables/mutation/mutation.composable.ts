import {
  useMutation as useTanstackQueryMutation,
  useQueryClient,
} from '@tanstack/vue-query'
import type {
  ComputedRef,
  UnwrapRef,
} from 'vue'
import { computed } from 'vue'

import { AsyncResult } from '@/async-result/asyncResult'
import type {
  ApiError,
  ApiResult,
} from '@/types/apiError.type'
import type { QueryKeys } from '@/types/queryKeys.type'

type RequestParams<TReqData, TParams> = TReqData extends void
  ? TParams extends void
    ? void
    : { params: TParams }
  : TParams extends void
    ? { body: TReqData }
    : { body: TReqData
        params: TParams }

interface UseMutationOptions<TParams, TReqData, TResData> {
  /**
   * Whether to enable debug mode
   */
  isDebug?: boolean
  /**
   * Function that will be called to perform the mutation
   * @param options - Parameters and body for the mutation
   * @returns Promise with ApiResult containing either the response data or an error
   */
  queryFn: (options: RequestParams<TReqData, TParams>) => Promise<ApiResult<TResData>>
  /**
   * Array of query keys which should be invalidated after mutation is successful
   */
  queryKeysToInvalidate: {
    [TQueryKey in keyof QueryKeys]?: {
      [TQueryKeyParam in keyof QueryKeys[TQueryKey]]: (
        params: TParams, data: TResData,
      ) => UnwrapRef<QueryKeys[TQueryKey][TQueryKeyParam]>
    }
  }
}

export interface UseMutationReturnType<TReqData, TResData, TParams = void> {
  /**
   * Whether mutation is loading
   */
  isLoading: ComputedRef<boolean>
  /**
   * Response data from the mutation
   */
  data: ComputedRef<TResData | null>
  /**
   * Function to execute the mutation
   * @param data - Parameters and body for the mutation
   * @returns Promise with ApiResult containing either the response data or an error
   */
  execute: (data: RequestParams<TReqData, TParams>) => Promise<ApiResult<TResData>>
  /**
   * Computed result of the mutation
   * Returns an AsyncResult with three states:
   * - loading: use `result.value.isLoading()`
   * - ok: use `result.value.isOk()` and `result.value.getValue()`
   * - err: use `result.value.isErr()` and `result.value.getError()`
   */
  result: ComputedRef<AsyncResult<TResData, ApiError>>
}

export function useMutation<
  TReqData = void,
  TResData = void,
  TParams = void,
>(
  options: UseMutationOptions<TParams, TReqData, TResData>,
): UseMutationReturnType<TReqData, TResData, TParams> {
  const isDebug = options.isDebug ?? false
  const queryClient = useQueryClient()

  async function onSuccess(responseData: TResData, params: TParams): Promise<void> {
    await Promise.all(
      Object.entries(options.queryKeysToInvalidate).map(async ([
        queryKey,
        queryKeyParams,
      ]) => {
        const qkp = queryKeyParams as Record<string, (params: TParams, data: TResData) => unknown>

        const paramsWithValues = Object.entries(qkp).reduce((acc, [
          key,
          value,
        ]) => {
          acc[key as keyof TParams] = value(params, responseData) as TParams[keyof TParams]

          return acc
        }, {} as TParams)

        if (isDebug) {
          // eslint-disable-next-line no-console
          console.log(`[MUTATION] Invalidating ${queryKey}`, paramsWithValues)
        }

        await queryClient.invalidateQueries({
          exact: false,
          queryKey: [
            queryKey,
            paramsWithValues,
          ],
        })
      }),
    )
  }

  const mutation = useTanstackQueryMutation<ApiResult<TResData>, unknown, RequestParams<TReqData, TParams>>({
    mutationFn: options.queryFn,
    onSuccess: async (result, variables) => {
      if (!result.isOk()) {
        return
      }

      const data = result._unsafeUnwrap()
      const hasParams = variables !== undefined && 'params' in variables

      if (hasParams) {
        await onSuccess(data, variables.params)

        return
      }

      await onSuccess(data, {} as TParams)
    },
  })

  async function execute(data: RequestParams<TReqData, TParams>): Promise<ApiResult<TResData>> {
    return await mutation.mutateAsync(data)
  }

  const result = computed<AsyncResult<TResData, ApiError>>(() => {
    if (mutation.isPending.value) {
      return AsyncResult.loading<TResData, ApiError>()
    }

    if (mutation.isError.value && mutation.error.value) {
      return AsyncResult.err<TResData, ApiError>(mutation.error.value as ApiError)
    }

    if (mutation.isSuccess.value && mutation.data.value) {
      const apiResult = mutation.data.value

      if (apiResult.isOk()) {
        return AsyncResult.ok<TResData, ApiError>(apiResult.value)
      }

      if (apiResult.isErr()) {
        return AsyncResult.err<TResData, ApiError>(apiResult.error)
      }
    }

    return AsyncResult.loading<TResData, ApiError>()
  })

  return {
    isLoading: computed<boolean>(() => mutation.isPending.value),
    data: computed<TResData | null>(() => {
      if (mutation.data.value?.isOk()) {
        return mutation.data.value.value
      }

      return null
    }),
    execute,
    result,
  }
}
