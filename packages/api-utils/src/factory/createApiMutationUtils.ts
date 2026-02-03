/* eslint-disable ts/no-empty-object-type */
import type { UseMutationReturnType } from '@/composables/mutation/mutation.composable'
import { useMutation as useMutationComposable } from '@/composables/mutation/mutation.composable'
import type { ApiResult } from '@/types/apiError.type'
import type { QueryKeyRawParamsFromConfig } from '@/types/queryKeys.type'

type RequestParams<TReqData, TParams> = TReqData extends void
  ? TParams extends void
    ? void
    : { params: TParams }
  : TParams extends void
    ? { body: TReqData }
    : { body: TReqData
        params: TParams }

export interface ApiUseMutationOptions<
  TQueryKeys extends object,
  TReqData,
  TResData,
  TParams = void,
> {
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
   * Query keys which should be invalidated after mutation is successful
   * Maps query keys to their params for invalidation
   * Can be either a function returning params, or an empty object to invalidate all
   * Empty object is only allowed for void params or when all params are optional
   */
  queryKeysToInvalidate?: {
    [TKey in keyof TQueryKeys]?: QueryKeyRawParamsFromConfig<TQueryKeys, TKey & string> extends void
      ? {}
      : {} extends QueryKeyRawParamsFromConfig<TQueryKeys, TKey & string>
          ? ((params: TParams, data: TResData) => QueryKeyRawParamsFromConfig<TQueryKeys, TKey & string> | {}) | {}
          : (params: TParams, data: TResData) => QueryKeyRawParamsFromConfig<TQueryKeys, TKey & string> | {}
  }
}

export interface CreateApiMutationUtilsReturnType<TQueryKeys extends object> {
  useMutation: <TReqData = void, TResData = void, TParams = void>(
    options: ApiUseMutationOptions<TQueryKeys, TReqData, TResData, TParams>,
  ) => UseMutationReturnType<TReqData, TResData, TParams>
}

export function createApiMutationUtils<TQueryKeys extends object>(): CreateApiMutationUtilsReturnType<TQueryKeys> {
  function useMutation<TReqData = void, TResData = void, TParams = void>(
    options: ApiUseMutationOptions<TQueryKeys, TReqData, TResData, TParams>,
  ): UseMutationReturnType<TReqData, TResData, TParams> {
    return useMutationComposable({
      isDebug: options.isDebug,
      queryFn: options.queryFn,
      queryKeysToInvalidate: (options.queryKeysToInvalidate ?? {}) as any,
    })
  }

  return {
    useMutation,
  }
}
