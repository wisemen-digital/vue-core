/* eslint-disable test/no-conditional-expect */
/* eslint-disable test/no-conditional-in-test */

import { useQueryClient } from '@tanstack/vue-query'
import { ok } from 'neverthrow'
import {
  describe,
  expect,
  it,
} from 'vitest'
import { nextTick } from 'vue'

import { createApiUtils } from '@/factory/createApiUtils'
import { runInSetup } from '@/test/runInSetup'

function flushPromises(): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve))
}

describe('createApiUtils - infinite queries', () => {
  it('useOffsetInfiniteQuery returns typed OffsetPaginationResponse<Item>', async () => {
    type UserUuid = string

    interface User {
      id: string
      uuid: UserUuid
      name: string
      email: string
    }

    interface MyQueryKeys {
      userIndex: {
        entity: User[]
        params: {
          search?: string
        }
      }
    }

    const items: User[] = Array.from({
      length: 5,
    }, (_, i) => ({
      id: String(i + 1),
      uuid: `uuid-${i + 1}`,
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
    }))

    const setup = runInSetup(() => {
      const queryClient = useQueryClient()

      const {
        useOffsetInfiniteQuery, useOptimisticUpdates,
      } = createApiUtils<MyQueryKeys>({
        queryClient,
      })

      return {
        optimisticUpdates: useOptimisticUpdates(),
        query: useOffsetInfiniteQuery('userIndex', {
          limit: 2,
          params: {
            search: 'user',
          },
          queryFn: async ({
            limit, offset,
          }) => {
            return await Promise.resolve(ok({
              data: items.slice(offset, offset + limit),
              meta: {
                limit,
                offset,
                total: items.length,
              },
            }))
          },
        }),
      }
    })

    await flushPromises()
    await nextTick()

    expect(setup.query.result.value.isOk()).toBeTruthy()

    if (setup.query.result.value.isOk()) {
      const result = setup.query.result.value.getValue()

      expect(result.data).toHaveLength(2)
      expect(result.meta.total).toBe(5)
      expect(result.data[0]?.email).toBe('user1@example.com')
    }

    setup.optimisticUpdates.update('userIndex', {
      value: {
        id: '1',
        name: 'Updated User 1',
      },
    })

    if (setup.query.result.value.isOk()) {
      expect(setup.query.result.value.getValue().data[0]?.name).toBe('Updated User 1')
    }

    await setup.query.fetchNextPage()
    await flushPromises()
    await nextTick()

    if (setup.query.result.value.isOk()) {
      expect(setup.query.result.value.getValue().data).toHaveLength(4)
    }
  })

  it('useKeysetInfiniteQuery returns typed KeysetPaginationResponse<Item>', async () => {
    type UserUuid = string

    interface User {
      id: string
      uuid: UserUuid
      name: string
      email: string
    }

    interface MyQueryKeys {
      userIndex: {
        entity: User[]
        params: {
          search?: string
        }
      }
    }

    const items: User[] = Array.from({
      length: 4,
    }, (_, i) => ({
      id: String(i + 1),
      uuid: `uuid-${i + 1}`,
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
    }))

    const setup = runInSetup(() => {
      const queryClient = useQueryClient()

      const {
        useKeysetInfiniteQuery, useOptimisticUpdates,
      } = createApiUtils<MyQueryKeys>({
        queryClient,
      })

      return {
        optimisticUpdates: useOptimisticUpdates(),
        query: useKeysetInfiniteQuery('userIndex', {
          limit: 2,
          params: {
            search: 'user',
          },
          queryFn: async ({
            key, limit,
          }) => {
            const startIdx = key ? Number.parseInt(String(key)) : 0

            return await Promise.resolve(ok({
              data: items.slice(startIdx, startIdx + limit),
              meta: {
                next: startIdx + limit < items.length ? String(startIdx + limit) : null,
              },
            }))
          },
        }),
      }
    })

    await flushPromises()
    await nextTick()

    expect(setup.query.result.value.isOk()).toBeTruthy()
    expect(setup.query.hasNextPage.value).toBeTruthy()

    setup.optimisticUpdates.update('userIndex', {
      value: {
        id: '2',
        email: 'updated2@example.com',
      },
    })

    if (setup.query.result.value.isOk()) {
      expect(setup.query.result.value.getValue().data[1]?.email).toBe('updated2@example.com')
    }

    await setup.query.fetchNextPage()
    await flushPromises()
    await nextTick()

    if (setup.query.result.value.isOk()) {
      const result = setup.query.result.value.getValue()

      expect(result.data).toHaveLength(4)
      expect(result.data.map((u) => u.id)).toEqual([
        '1',
        '2',
        '3',
        '4',
      ])
    }

    expect(setup.query.hasNextPage.value).toBeFalsy()
  })
})
