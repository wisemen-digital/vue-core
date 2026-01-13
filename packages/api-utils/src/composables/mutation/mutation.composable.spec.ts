/* eslint-disable test/no-conditional-expect */
/* eslint-disable test/no-conditional-in-test */
import type { QueryClient } from '@tanstack/vue-query'
import {
  useQueryClient,
  VueQueryPlugin,
} from '@tanstack/vue-query'
import { ok } from 'neverthrow'
import {
  describe,
  expect,
  it,
} from 'vitest'
import type { App } from 'vue'
import { createApp } from 'vue'

import { useMutation } from '@/composables/mutation/mutation.composable'

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
    let mutation: ReturnType<typeof useMutation> | null = null

    const [
      ,
      app,
    ] = withSetup(() => {
      mutation = useMutation({
        queryFn: ({
          body, params,
        }:
        {
          body: { name: string }
          params: {
            id: string
          }
        }) => Promise.resolve(ok('test-response')),
        queryKeysToInvalidate: {},
      })

      return mutation
    })

    await flushPromises()

    const result = await mutation!.execute({})

    expect(result.isOk()).toBeTruthy()

    if (result.isOk()) {
      expect(result._unsafeUnwrap()).toBe('test-response')
    }

    app?.unmount()
  })
})
