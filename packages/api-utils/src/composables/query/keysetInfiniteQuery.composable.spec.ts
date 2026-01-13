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
import {
  createApp,
  nextTick,
} from 'vue'

import { useKeysetInfiniteQuery } from '@/composables/query/keysetInfiniteQuery.composable'
import type { ApiError } from '@/types/apiError.type'

interface TestItem {
  id: string
  name: string
}

function withSetup<T>(composable: (queryClient: QueryClient) => T): [T | null, App] {
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

function flushPromises(): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, 0)
  })
}

describe('useKeysetInfiniteQuery with AsyncResult', () => {
  it('should be defined', () => {
    expect(useKeysetInfiniteQuery).toBeDefined()
  })

  it('result should start in loading state', () => {
    const [
      query,
      app,
    ] = withSetup(() => {
      return useKeysetInfiniteQuery<TestItem>({
        queryFn: async () => {
          // Never resolves during the test
          return await new Promise(() => {})
        },
        queryKey: {
          test: {},
        },
      })
    })

    expect(query).not.toBeNull()
    expect(query!.result.value.isLoading()).toBeTruthy()
    expect(query!.result.value.isOk()).toBeFalsy()
    expect(query!.result.value.isErr()).toBeFalsy()

    app.unmount()
  })

  it('result should transition to ok state with keyset paginated data', async () => {
    const items: TestItem[] = [
      {
        id: '1',
        name: 'Item 1',
      },
      {
        id: '2',
        name: 'Item 2',
      },
      {
        id: '3',
        name: 'Item 3',
      },
    ]

    const [
      query,
      app,
    ] = withSetup(() => {
      return useKeysetInfiniteQuery<TestItem>({
        limit: 2,
        queryFn: async ({
          key, limit,
        }) => {
          const startIdx = key ? Number.parseInt(key) : 0

          return await Promise.resolve(ok({
            data: items.slice(startIdx, startIdx + limit),
            meta: {
              next: startIdx + limit < items.length ? String(startIdx + limit) : null,
            },
          }))
        },
        queryKey: {
          test: {},
        },
      })
    })

    expect(query).not.toBeNull()

    // Wait for query to resolve
    await flushPromises()
    await nextTick()

    expect(query!.result.value.isLoading()).toBeFalsy()
    expect(query!.result.value.isOk()).toBeTruthy()
    expect(query!.result.value.isErr()).toBeFalsy()

    if (query!.result.value.isOk()) {
      const result = query!.result.value.getValue()

      expect(result.data).toHaveLength(2)
      expect(result.data[0].name).toBe('Item 1')
      expect(result.meta.next).toBe('2')
    }

    app.unmount()
  })

  it('result should transition to err state on failure', async () => {
    const apiError: ApiError = {
      traceId: 'test-trace',
      errors: [],
      status: 500,
      statusText: 'Internal Server Error',
    }

    const [
      query,
      app,
    ] = withSetup(() => {
      return useKeysetInfiniteQuery<TestItem>({
        queryFn: async () => await Promise.resolve(err(apiError)),
        queryKey: {
          test: {},
        },
      })
    })

    expect(query).not.toBeNull()

    // Wait for query to resolve
    await flushPromises()
    await nextTick()

    expect(query!.result.value.isLoading()).toBeFalsy()
    expect(query!.result.value.isOk()).toBeFalsy()
    expect(query!.result.value.isErr()).toBeTruthy()

    if (query!.result.value.isErr()) {
      expect(query!.result.value.getError()).toEqual(apiError)
    }

    app.unmount()
  })

  it('result.match() should work for all states', async () => {
    const items: TestItem[] = [
      {
        id: '1',
        name: 'Item 1',
      },
    ]

    const [
      query,
      app,
    ] = withSetup(() => {
      return useKeysetInfiniteQuery<TestItem>({
        queryFn: async ({
          key, limit,
        }) => {
          const startIdx = key ? Number.parseInt(key) : 0

          return await Promise.resolve(ok({
            data: items.slice(startIdx, startIdx + limit),
            meta: {
              next: startIdx + limit < items.length ? String(startIdx + limit) : null,
            },
          }))
        },
        queryKey: {
          test: {},
        },
      })
    })

    expect(query).not.toBeNull()

    // Before resolving - loading state
    const loadingMessage = query!.result.value.match({
      err: () => 'error',
      loading: () => 'loading',
      ok: () => 'success',
    })

    expect(loadingMessage).toBe('loading')

    // Wait for query to resolve
    await flushPromises()
    await nextTick()

    // After resolving - ok state
    const successMessage = query!.result.value.match({
      err: () => 'error',
      loading: () => 'loading',
      ok: (data) => `Got ${data.data.length} items`,
    })

    expect(successMessage).toBe('Got 1 items')

    app.unmount()
  })

  it('should properly paginate with keyset cursors', async () => {
    const items: TestItem[] = Array.from({
      length: 6,
    }, (_, i) => ({
      id: `${i + 1}`,
      name: `Item ${i + 1}`,
    }))

    const [
      query,
      app,
    ] = withSetup(() => {
      return useKeysetInfiniteQuery<TestItem>({
        limit: 2,
        queryFn: async ({
          key, limit,
        }) => {
          const startIdx = key ? Number.parseInt(key) : 0

          return await Promise.resolve(ok({
            data: items.slice(startIdx, startIdx + limit),
            meta: {
              next: startIdx + limit < items.length ? String(startIdx + limit) : null,
            },
          }))
        },
        queryKey: {
          test: {},
        },
      })
    })

    expect(query).not.toBeNull()

    // Wait for initial query
    await flushPromises()
    await nextTick()

    expect(query!.hasNextPage.value).toBeTruthy()

    if (query!.result.value.isOk()) {
      const data = query!.result.value.getValue()

      expect(data.data).toHaveLength(2)
      expect(data.data[0].id).toBe('1')
      expect(data.meta.next).toBe('2')
    }

    // Fetch next page
    await query!.fetchNextPage()
    await flushPromises()
    await nextTick()

    if (query!.result.value.isOk()) {
      const data = query!.result.value.getValue()

      expect(data.data).toHaveLength(4) // Accumulated: 2 + 2
    }

    app.unmount()
  })

  it('should indicate no next page when cursor is null', async () => {
    const items: TestItem[] = [
      {
        id: '1',
        name: 'Item 1',
      },
      {
        id: '2',
        name: 'Item 2',
      },
    ]

    const [
      query,
      app,
    ] = withSetup(() => {
      return useKeysetInfiniteQuery<TestItem>({
        limit: 5,
        queryFn: async ({
          key, limit,
        }) => {
          const startIdx = key ? Number.parseInt(key) : 0

          return await Promise.resolve(ok({
            data: items.slice(startIdx, startIdx + limit),
            meta: {
              next: startIdx + limit < items.length ? String(startIdx + limit) : null,
            },
          }))
        },
        queryKey: {
          test: {},
        },
      })
    })

    expect(query).not.toBeNull()

    // Wait for query to resolve
    await flushPromises()
    await nextTick()

    expect(query!.hasNextPage.value).toBeFalsy()

    app.unmount()
  })

  it('should properly use keyset cursor for pagination', async () => {
    const items: TestItem[] = [
      {
        id: '1',
        name: 'Item 1',
      },
      {
        id: '2',
        name: 'Item 2',
      },
      {
        id: '3',
        name: 'Item 3',
      },
      {
        id: '4',
        name: 'Item 4',
      },
    ]

    const [
      query,
      app,
    ] = withSetup(() => {
      return useKeysetInfiniteQuery<TestItem>({
        limit: 2,
        queryFn: async ({
          key,
        }) => {
          const startIdx = key ? Number.parseInt(key) : 0

          return await Promise.resolve(ok({
            data: items.slice(startIdx, startIdx + 2),
            meta: {
              next: startIdx + 2 < items.length ? String(startIdx + 2) : null,
            },
          }))
        },
        queryKey: {
          test: {},
        },
      })
    })

    expect(query).not.toBeNull()

    // Initial load
    await flushPromises()
    await nextTick()

    if (query!.result.value.isOk()) {
      expect(query!.result.value.getValue().data[0].id).toBe('1')
    }

    // Next page - should use keyset cursor '2'
    await query!.fetchNextPage()
    await flushPromises()
    await nextTick()

    if (query!.result.value.isOk()) {
      const data = query!.result.value.getValue()

      // Should have items from both pages
      expect(data.data.map((i) => i.id)).toEqual([
        '1',
        '2',
        '3',
        '4',
      ])
    }

    app.unmount()
  })
})
