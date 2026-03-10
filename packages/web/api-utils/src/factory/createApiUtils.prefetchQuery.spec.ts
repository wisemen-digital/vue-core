import { ok } from 'neverthrow'
import {
  describe,
  expect,
  it,
  vi,
} from 'vitest'
import {
  computed,
  nextTick,
} from 'vue'

import { createApiUtils } from '@/factory/createApiUtils'
import { runInSetup } from '@/test/runInSetup'

function flushPromises(): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, 0)
  })
}

describe('createApiUtils - usePrefetchQuery', () => {
  it('prefetches data and makes it available to useQuery', async () => {
    type UserUuid = string

    interface User {
      id: string
      uuid: UserUuid
      name: string
      email: string
    }

    interface MyQueryKeys {
      userDetail: {
        entity: User
        params: {
          userUuid: UserUuid
        }
      }
    }

    const queryFn = vi.fn(() => {
      return Promise.resolve(ok({
        id: '123',
        uuid: 'uuid-123',
        name: 'John Doe',
        email: 'john@example.com',
      }))
    })

    const setup = runInSetup(() => {
      const {
        usePrefetchQuery, useQuery,
      } = createApiUtils<MyQueryKeys>()

      return {
        prefetch: usePrefetchQuery('userDetail', {
          staleTime: 999_999,
          params: {
            userUuid: computed<UserUuid>(() => 'uuid-123'),
          },
          queryFn,
        }),
        query: useQuery('userDetail', {
          staleTime: 999_999,
          params: {
            userUuid: computed<UserUuid>(() => 'uuid-123'),
          },
          queryFn,
        }),
      }
    })

    await setup.prefetch.execute()
    await flushPromises()
    await nextTick()

    expect(queryFn).toHaveBeenCalledTimes(1)

    await flushPromises()
    await nextTick()

    expect(setup.query.result.value.isOk()).toBeTruthy()

    setup.query.result.value.match({
      err: () => {
        throw new Error('Expected ok state after prefetch')
      },
      loading: () => {
        throw new Error('Expected ok state after prefetch')
      },
      ok: (user) => {
        expect(user.email).toBe('john@example.com')
      },
    })
  })
})
