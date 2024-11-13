import type { EntryNodeKey } from '@pinia/colada'
import { useMutation as usePiniaMutation, useQueryCache } from '@pinia/colada'
import {
  computed,
  type ComputedRef,
  type UnwrapRef,
} from 'vue'

import type { QueryKeys } from '@/types/queryKeys.type'

type RequestParams<TReqData, TParams> = TReqData extends void
  ? TParams extends void
    ? void
    : { params: TParams }
  : TParams extends void
    ? { body: TReqData }
    : { body: TReqData, params: TParams }

interface UseMutationOptions<TParams, TReqData, TResData> {
  /**
   * Whether to enable debug mode
   */
  isDebug?: boolean
  /**
   * Function that will be called to perform the mutation
   * @param options - Parameters and body for the mutation
   * @returns Promise with the response data
   */
  queryFn: (options: RequestParams<TReqData, TParams>) => Promise<TResData>
  /**
   * Array of query keys which should be invalidated after mutation is successful
   */
  queryKeysToInvalidate: {
    [TQueryKey in keyof QueryKeys]?: {
      [TQueryKeyParam in keyof QueryKeys[TQueryKey]]: (
        params: TParams, data: TResData
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
   * @returns Promise with the response data
   */
  execute: (data: RequestParams<TReqData, TParams>) => Promise<TResData>
}

export function useMutation<
  TReqData = void,
  TResData = void,
  TParams = void,
>(
  options: UseMutationOptions<TParams, TReqData, TResData>,
): UseMutationReturnType<TReqData, TResData, TParams> {
  const isDebug = options.isDebug ?? false
  const queryCache = useQueryCache()

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
        }, {} as TParams) as EntryNodeKey

        if (isDebug) {
          // eslint-disable-next-line no-console
          console.log(`[MUTATION] Invalidating ${queryKey}`, paramsWithValues)
        }

        await queryCache.invalidateQueries({
          exact: false,
          key: [
            queryKey,
            paramsWithValues,
          ],
        })
      }),
    )
  }

  const mutation = usePiniaMutation<TResData, RequestParams<TReqData, TParams>>({
    mutation: options.queryFn,
    onSuccess: async (data, variables) => {
      if (variables != null && 'params' in variables) {
        await onSuccess(data, variables.params)

        return
      }

      await onSuccess(data, {} as TParams)
    },
  })

  async function execute(data: RequestParams<TReqData, TParams>): Promise<TResData> {
    return await mutation.mutateAsync(data)
  }

  return {
    isLoading: computed<boolean>(() => mutation.isLoading.value),
    data: computed<TResData | null>(() => mutation.data.value ?? null),
    execute,
  }
}
