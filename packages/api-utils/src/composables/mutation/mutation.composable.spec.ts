/* eslint-disable test/no-conditional-expect */
/* eslint-disable test/no-conditional-in-test */
import {
  err,
  ok,
} from 'neverthrow'
import {
  describe,
  expect,
  it,
} from 'vitest'

import { useMutation } from '@/composables/mutation/mutation.composable'
import { runInSetup } from '@/test-utils/runInSetup'
import type { ApiError } from '@/types/apiError.type'

function flushPromises(): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, 0)
  })
}

describe('useMutation', () => {
  it('should be defined', () => {
    expect(useMutation).toBeDefined()
  })

  it('should return ApiResult from execute', async () => {
    interface RequestBody {
      name: string
    }

    interface RequestParams {
      id: string
    }

    const mutation = runInSetup(() => {
      return useMutation<RequestBody, string, RequestParams>({
        queryFn: ({
          body, params,
        }) => {
          expect(body).toBeDefined()
          expect(params).toBeDefined()

          return Promise.resolve(ok('test-response'))
        },
        queryKeysToInvalidate: {},
      })
    })

    await flushPromises()

    const result = await mutation.execute({
      body: {
        name: 'test-name',
      },
      params: {
        id: 'test-id',
      },
    })

    expect(result.isOk()).toBeTruthy()

    if (result.isOk()) {
      expect(result._unsafeUnwrap()).toBe('test-response')
    }
  })

  it('should work without body or params when queryFn does not require them', async () => {
    const mutation = runInSetup(() => {
      return useMutation({
        queryFn: () => {
          return Promise.resolve(ok('test-response-no-params'))
        },
        queryKeysToInvalidate: {},
      })
    })

    await flushPromises()

    const result = await mutation.execute()

    expect(result.isOk()).toBeTruthy()

    if (result.isOk()) {
      expect(result._unsafeUnwrap()).toBe('test-response-no-params')
    }
  })

  it('should transition result to ok state on success', async () => {
    const mutation = runInSetup(() => {
      return useMutation<void, string, void>({
        queryFn: () => Promise.resolve(ok('success-data')),
        queryKeysToInvalidate: {},
      })
    })

    // Before execution, should start in loading state
    expect(mutation.result.value.isLoading()).toBeTruthy()
    expect(mutation.result.value.isOk()).toBeFalsy()
    expect(mutation.result.value.isErr()).toBeFalsy()

    await flushPromises()

    // After execution, should be in ok state
    await mutation.execute()
    await flushPromises()

    expect(mutation.result.value.isLoading()).toBeFalsy()
    expect(mutation.result.value.isOk()).toBeTruthy()
    expect(mutation.result.value.isErr()).toBeFalsy()

    if (mutation.result.value.isOk()) {
      expect(mutation.result.value.getValue()).toBe('success-data')
    }
  })

  it('should transition result to err state on failure', async () => {
    const apiError: ApiError = {
      traceId: 'test-trace',
      errors: [],
      status: 500,
      statusText: 'Internal Server Error',
    }

    const mutation = runInSetup(() => {
      return useMutation<void, string, void>({
        queryFn: () => Promise.resolve(err(apiError)),
        queryKeysToInvalidate: {},
      })
    })

    // Before execution, should start in loading state
    expect(mutation.result.value.isLoading()).toBeTruthy()

    await flushPromises()

    // After execution, should be in err state
    await mutation.execute()

    await flushPromises()

    expect(mutation.result.value.isLoading()).toBeFalsy()
    expect(mutation.result.value.isOk()).toBeFalsy()
    expect(mutation.result.value.isErr()).toBeTruthy()

    if (mutation.result.value.isErr()) {
      expect(mutation.result.value.getError()).toEqual(apiError)
    }
  })

  it('should use match() to handle different result states', async () => {
    const mutation = runInSetup(() => {
      return useMutation<void, string, void>({
        queryFn: () => Promise.resolve(ok('matched-data')),
        queryKeysToInvalidate: {},
      })
    })

    // Before execution
    let message = mutation.result.value.match({
      err: () => 'is error',
      loading: () => 'is loading',
      ok: () => 'is ok',
    })

    expect(message).toBe('is loading')

    await flushPromises()

    // After execution
    await mutation.execute()
    await flushPromises()

    message = mutation.result.value.match({
      err: () => 'is error',
      loading: () => 'is loading',
      ok: (data) => `got ${data}`,
    })

    expect(message).toBe('got matched-data')
  })

  it('should provide data property with unwrapped value on success', async () => {
    const mutation = runInSetup(() => {
      return useMutation<void, string, void>({
        queryFn: () => Promise.resolve(ok('unwrapped-data')),
        queryKeysToInvalidate: {},
      })
    })

    // Before execution
    expect(mutation.data.value).toBeNull()

    await flushPromises()

    // After execution
    await mutation.execute()
    await flushPromises()

    expect(mutation.data.value).toBe('unwrapped-data')
  })

  it('should provide null data property on error', async () => {
    const apiError: ApiError = {
      traceId: 'test-trace',
      errors: [],
      status: 500,
      statusText: 'Internal Server Error',
    }

    const mutation = runInSetup(() => {
      return useMutation<void, string, void>({
        queryFn: () => Promise.resolve(err(apiError)),
        queryKeysToInvalidate: {},
      })
    })

    await flushPromises()
    await mutation.execute()
    await flushPromises()

    expect(mutation.data.value).toBeNull()
  })
})
