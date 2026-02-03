import type { UseMutationReturnType } from '@/composables/mutation/mutation.composable'
import { useMutation as useMutationComposable } from '@/composables/mutation/mutation.composable'

import type {
  ApiUseMutationOptions,
  CreateApiMutationUtilsReturnType,
} from './createApiUtils.types'

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

export type { CreateApiMutationUtilsReturnType } from './createApiUtils.types'
