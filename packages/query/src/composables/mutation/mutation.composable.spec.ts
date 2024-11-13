import { PiniaColada, useQueryCache } from '@pinia/colada'
import { createPinia } from 'pinia'
import {
  describe,
  expect,
  it,
} from 'vitest'
import { type App, createApp } from 'vue'

import { useMutation } from '@/composables/mutation/mutation.composable'
import { useQuery } from '@/composables/query/query.composable'

export function withSetup<T>(composable: (queryCache: ReturnType<typeof useQueryCache>) => T): [T | null, App] {
  let result: T | null = null
  const app = createApp({
    setup() {
      const queryCache = useQueryCache()

      result = composable(queryCache)

      return (): Record<string, unknown> => ({})
    },
  })

  const pinia = createPinia()

  app.use(pinia)
  app.use(PiniaColada)
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

  it('should invalidate a query key correctly', () => {
    void withSetup(async () => {
      let queryRunCount = 0

      useQuery({
        queryFn: () => {
          queryRunCount += 1

          return Promise.resolve('')
        },
        queryKey: {
          test: {},
        },
      })

      const mutation = useMutation({
        queryFn: () => Promise.resolve(''),
        queryKeysToInvalidate: {
          test: {},
        },
      })

      await mutation.execute()

      // Query also runs once on mount
      expect(queryRunCount).toBe(2)
    })
  })

  it('should invalidate a query key with params correctly', () => {
    void withSetup(async () => {
      let queryRunCount = 0

      useQuery({
        queryFn: () => {
          queryRunCount += 1

          return Promise.resolve('')
        },
        queryKey: {
          test: {
            id: 1,
            obj: {
              randomKey: 'randomValue',
            },
          },
        },
      })

      const mutation1 = useMutation({
        queryFn: () => Promise.resolve(''),
        queryKeysToInvalidate: {
          test: {
            id: () => 1,
          },
        },
      })

      const mutation2 = useMutation({
        queryFn: () => Promise.resolve(''),
        queryKeysToInvalidate: {
          test: {
            id: () => 1,
            obj: () => ({
              randomKey: 'randomValue',
            }),
          },
        },
      })

      const mutation3 = useMutation({
        queryFn: () => Promise.resolve(''),
        queryKeysToInvalidate: {
          test: {
            id: () => 2,
          },
        },
      })

      // + 1 because query key does match
      await mutation1.execute()

      // + 1 because query key does match
      await mutation2.execute()

      // + 0 because query key does not match
      await mutation3.execute()

      // Query also runs once on mount
      expect(queryRunCount).toBe(2)
    })
  })
})
