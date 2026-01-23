import { useQueryClient } from '@tanstack/vue-query'
import { ok } from 'neverthrow'
import {
  describe,
  expect,
  it,
} from 'vitest'

import { createApiUtils } from '@/factory/createApiUtils'
import { runInSetup } from '@/test/runInSetup'

describe('createApiUtils - useQuery', () => {
  it('returns AsyncResult<User> for userDetail', async () => {
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
      userIndex: {
        entity: User[]
        params: {
          search?: string
        }
      }
    }

    const query = runInSetup(() => {
      const queryClient = useQueryClient()

      const {
        useQuery,
      } = createApiUtils<MyQueryKeys>({
        queryClient,
      })

      return useQuery('userDetail', {
        params: {
          userUuid: 'uuid-123',
        },
        queryFn: () => Promise.resolve(
          ok({
            id: '123',
            uuid: 'uuid-123',
            name: 'John Doe',
            email: 'john@example.com',
          }),
        ),
      })
    })

    expect(query.result.value.isLoading()).toBeTruthy()

    await query.refetch()

    expect(query.result.value.isOk()).toBeTruthy()

    query.result.value.match({
      err: () => {
        throw new Error('Expected ok state after refetch')
      },
      loading: () => {
        throw new Error('Expected ok state after refetch')
      },
      ok: (user) => {
        expect(user.email).toBe('john@example.com')
      },
    })
  })

  it('returns AsyncResult<User[]> for userIndex', async () => {
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
      userIndex: {
        entity: User[]
        params: {
          search?: string
        }
      }
    }

    const query = runInSetup(() => {
      const queryClient = useQueryClient()

      const {
        useOptimisticUpdates, useQuery,
      } = createApiUtils<MyQueryKeys>({
        queryClient,
      })

      return {
        query: useQuery('userIndex', {
          params: {
            search: 'john',
          },
          queryFn: () => Promise.resolve(
            ok([
              {
                id: '123',
                uuid: 'uuid-123',
                name: 'John Doe',
                email: 'john@example.com',
              },
            ]),
          ),
        }),
        updated: useOptimisticUpdates(),
      }
    })

    expect(query.query.result.value.isLoading()).toBeTruthy()

    await query.query.refetch()
    expect(query.query.result.value.isOk()).toBeTruthy()

    query.query.result.value.match({
      err: () => {
        throw new Error('Expected ok state after refetch')
      },
      loading: () => {
        throw new Error('Expected ok state after refetch')
      },
      ok: (users) => {
        expect(users).toHaveLength(1)
        expect(users[0]?.email).toBe('john@example.com')
      },
    })

    query.updated.update('userIndex', {
      by: {
        id: '123',
      },
      value: {
        name: 'Jane Doe',
        email: 'hmm',
      },
    })

    query.query.result.value.match({
      err: () => {
        throw new Error('Expected ok state after optimistic update')
      },
      loading: () => {
        throw new Error('Expected ok state after optimistic update')
      },
      ok: (users) => {
        expect(users).toHaveLength(1)
        expect(users[0]?.name).toBe('Jane Doe')
        expect(users[0]?.email).toBe('hmm')
      },
    })
  })
})
