/* eslint-disable test/no-conditional-expect */
/* eslint-disable test/no-conditional-in-test */
import type { QueryClient } from '@tanstack/vue-query'
import {
  useQueryClient,
  VueQueryPlugin,
} from '@tanstack/vue-query'
import {
  err,
  ok,
} from 'neverthrow'
import {
  describe,
  expect,
  it,
} from 'vitest'
import type { App } from 'vue'
import { createApp } from 'vue'

import { useMutation } from '@/composables/mutation/mutation.composable'
import type { ApiError } from '@/types/apiError.type'

function flushPromises(): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, 0)
  })
}

export function withSetup<T>(composable: (queryClient: QueryClient) => T): [T | null, App] {
  let result: T | null = null
  const app = createApp({
    setup() {
      const queryClient = useQueryClient()

      result = composable(queryClient)

      return (): Record<string, unknown> => ({})
    },
  })

  app.use(VueQueryPlugin)

  app.mount(document.createElement('div'))

  return [
    result,
    app,
  ]
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

    let mutation: ReturnType<typeof useMutation<RequestBody, string, RequestParams>> | null = null

    const [
      ,
      app,
    ] = withSetup(() => {
      mutation = useMutation<RequestBody, string, RequestParams>({
        queryFn: ({
          body, params,
        }) => {
          expect(body).toBeDefined()
          expect(params).toBeDefined()

          return Promise.resolve(ok('test-response'))
        },
        queryKeysToInvalidate: {},
      })

      return mutation
    })

    await flushPromises()

    const result = await mutation!.execute({
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

    app?.unmount()
  })

  it('should work without body or params when queryFn does not require them', async () => {
    let mutation: ReturnType<typeof useMutation<void, string, void>> | null = null

    const [
      ,
      app,
    ] = withSetup(() => {
      mutation = useMutation({
        queryFn: () => {
          return Promise.resolve(ok('test-response-no-params'))
        },
        queryKeysToInvalidate: {},
      })

      return mutation
    })

    await flushPromises()

    const result = await mutation!.execute()

    expect(result.isOk()).toBeTruthy()

    if (result.isOk()) {
      expect(result._unsafeUnwrap()).toBe('test-response-no-params')
    }

    app?.unmount()
  })

  it('should transition result to ok state on success', async () => {
    let mutation: ReturnType<typeof useMutation<void, string, void>> | null = null

    const [
      ,
      app,
    ] = withSetup(() => {
      mutation = useMutation<void, string, void>({
        queryFn: () => Promise.resolve(ok('success-data')),
        queryKeysToInvalidate: {},
      })

      return mutation
    })

    // Before execution, should start in loading state
    expect(mutation!.result.value.isLoading()).toBeTruthy()
    expect(mutation!.result.value.isOk()).toBeFalsy()
    expect(mutation!.result.value.isErr()).toBeFalsy()

    await flushPromises()

    // After execution, should be in ok state
    await mutation!.execute()
    await flushPromises()

    expect(mutation!.result.value.isLoading()).toBeFalsy()
    expect(mutation!.result.value.isOk()).toBeTruthy()
    expect(mutation!.result.value.isErr()).toBeFalsy()

    if (mutation!.result.value.isOk()) {
      expect(mutation!.result.value.getValue()).toBe('success-data')
    }

    app?.unmount()
  })

  it('should transition result to err state on failure', async () => {
    let mutation: ReturnType<typeof useMutation<void, string, void>> | null = null

    const apiError: ApiError = {
      traceId: 'test-trace',
      errors: [],
      status: 500,
      statusText: 'Internal Server Error',
    }

    const [
      ,
      app,
    ] = withSetup(() => {
      mutation = useMutation<void, string, void>({
        queryFn: () => Promise.resolve(err(apiError)),
        queryKeysToInvalidate: {},
      })

      return mutation
    })

    // Before execution, should start in loading state
    expect(mutation!.result.value.isLoading()).toBeTruthy()

    await flushPromises()

    // After execution, should be in err state
    await mutation!.execute()

    await flushPromises()

    expect(mutation!.result.value.isLoading()).toBeFalsy()
    expect(mutation!.result.value.isOk()).toBeFalsy()
    expect(mutation!.result.value.isErr()).toBeTruthy()

    if (mutation!.result.value.isErr()) {
      expect(mutation!.result.value.getError()).toEqual(apiError)
    }

    app?.unmount()
  })

  it('should use match() to handle different result states', async () => {
    let mutation: ReturnType<typeof useMutation<void, string, void>> | null = null

    const [
      ,
      app,
    ] = withSetup(() => {
      mutation = useMutation<void, string, void>({
        queryFn: () => Promise.resolve(ok('matched-data')),
        queryKeysToInvalidate: {},
      })

      return mutation
    })

    // Before execution
    let message = mutation!.result.value.match({
      err: () => 'is error',
      loading: () => 'is loading',
      ok: () => 'is ok',
    })

    expect(message).toBe('is loading')

    await flushPromises()

    // After execution
    await mutation!.execute()
    await flushPromises()

    message = mutation!.result.value.match({
      err: () => 'is error',
      loading: () => 'is loading',
      ok: (data) => `got ${data}`,
    })

    expect(message).toBe('got matched-data')

    app?.unmount()
  })

  it('should provide data property with unwrapped value on success', async () => {
    let mutation: ReturnType<typeof useMutation<void, string, void>> | null = null

    const [
      ,
      app,
    ] = withSetup(() => {
      mutation = useMutation<void, string, void>({
        queryFn: () => Promise.resolve(ok('unwrapped-data')),
        queryKeysToInvalidate: {},
      })

      return mutation
    })

    // Before execution
    expect(mutation!.data.value).toBeNull()

    await flushPromises()

    // After execution
    await mutation!.execute()
    await flushPromises()

    expect(mutation!.data.value).toBe('unwrapped-data')

    app?.unmount()
  })

  it('should provide null data property on error', async () => {
    let mutation: ReturnType<typeof useMutation<void, string, void>> | null = null

    const apiError: ApiError = {
      traceId: 'test-trace',
      errors: [],
      status: 500,
      statusText: 'Internal Server Error',
    }

    const [
      ,
      app,
    ] = withSetup(() => {
      mutation = useMutation<void, string, void>({
        queryFn: () => Promise.resolve(err(apiError)),
        queryKeysToInvalidate: {},
      })

      return mutation
    })

    await flushPromises()
    await mutation!.execute()
    await flushPromises()

    expect(mutation!.data.value).toBeNull()

    app?.unmount()
  })
})
