import { useQueryClient } from '@tanstack/vue-query'
import { ok } from 'neverthrow'
import {
  describe,
  expect,
  it,
} from 'vitest'
import { computed } from 'vue'

import { createApiUtils } from '@/factory/createApiUtils'
import { runInSetup } from '@/test/runInSetup'

describe('createApiUtils - useMutation', () => {
  it('executes mutation and invalidates typed query keys', async () => {
    type UserUuid = string

    interface User {
      id: string
      uuid: UserUuid
      name: string
      email: string
    }

    interface UpdateUserRequest {
      name?: string
      email?: string
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

    const result = runInSetup(() => {
      const queryClient = useQueryClient()

      const {
        useMutation, useQuery,
      } = createApiUtils<MyQueryKeys>({
        queryClient,
      })

      // First, set up a query
      const userQuery = useQuery('userDetail', {
        params: {
          userUuid: computed<UserUuid>(() => 'uuid-123'),
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

      // Set up mutation with typed queryKeysToInvalidate
      const updateMutation = useMutation({
        queryFn: (options: {
          body: UpdateUserRequest
          params: {
            userUuid: UserUuid
          }
        }) => {
          const {
            body, params,
          } = options

          return Promise.resolve(ok({
            id: '123',
            uuid: params.userUuid,
            name: body?.name ?? 'John Doe',
            email: body?.email ?? 'john@example.com',
          }))
        },
        queryKeysToInvalidate: {
          userDetail: (params) => ({
            userUuid: params.userUuid,
          }),
          // Can also use empty object to invalidate all userIndex queries
          userIndex: {},
        },
      })

      return {
        updateMutation,
        userQuery,
      }
    })

    expect(result.userQuery.result.value.isLoading()).toBeTruthy()

    await result.userQuery.refetch()
    expect(result.userQuery.result.value.isOk()).toBeTruthy()

    // Execute mutation
    const mutationResult = await result.updateMutation.execute({
      body: {
        name: 'Jane Doe',
        email: 'jane@example.com',
      },
      params: {
        userUuid: 'uuid-123',
      },
    })

    expect(mutationResult.isOk()).toBeTruthy()

    mutationResult.match((user) => {
      expect(user.name).toBe('Jane Doe')
      expect(user.email).toBe('jane@example.com')
    }, (error) => {
      expect(error).toBeUndefined()
    })
  })

  it('handles mutation without params', async () => {
    type UserUuid = string

    interface User {
      id: string
      uuid: UserUuid
      name: string
      email: string
    }

    interface CreateUserRequest {
      name: string
      email: string
    }

    interface MyQueryKeys {
      userIndex: {
        entity: User[]
        params: void
      }
    }

    const result = runInSetup(() => {
      const queryClient = useQueryClient()

      const {
        useMutation,
      } = createApiUtils<MyQueryKeys>({
        queryClient,
      })

      // Mutation without params
      const createMutation = useMutation<
        CreateUserRequest,
        User,
        void
      >({
        queryFn: async ({
          body,
        }) => {
          return await Promise.resolve(ok({
            id: '126',
            uuid: 'uuid-126',
            name: body.name,
            email: body.email,
          }))
        },
        queryKeysToInvalidate: {
          userIndex: {},
        },
      })

      return {
        createMutation,
      }
    })

    // Execute mutation without params
    const mutationResult = await result.createMutation.execute({
      body: {
        name: 'New User',
        email: 'newuser@example.com',
      },
    })

    expect(mutationResult.isOk()).toBeTruthy()

    mutationResult.match((user) => {
      expect(user.name).toBe('New User')
      expect(user.email).toBe('newuser@example.com')
    }, (error) => {
      expect(error).toBeUndefined()
    })
  })

  it('tracks mutation loading state', async () => {
    interface User {
      id: string
      name: string
    }

    interface UpdateRequest {
      name: string
    }

    interface MyQueryKeys {
      userDetail: {
        entity: User
        params: void
      }
    }

    const result = runInSetup(() => {
      const queryClient = useQueryClient()

      const {
        useMutation,
      } = createApiUtils<MyQueryKeys>({
        queryClient,
      })

      const mutation = useMutation<UpdateRequest, User, void>({
        queryFn: async ({
          body,
        }) => {
          // Simulate delay
          await new Promise((resolve) => setTimeout(resolve, 10))

          return ok({
            id: '123',
            name: body.name,
          })
        },
        queryKeysToInvalidate: {
          userDetail: {},
        },
      })

      return {
        mutation,
      }
    })

    expect(result.mutation.isLoading.value).toBeFalsy()

    const executePromise = result.mutation.execute({
      body: {
        name: 'Updated Name',
      },
    })

    // Give it a moment to start loading
    await new Promise((resolve) => setTimeout(resolve, 5))
    expect(result.mutation.isLoading.value).toBeTruthy()

    await executePromise

    expect(result.mutation.isLoading.value).toBeFalsy()
    expect(result.mutation.result.value.isOk()).toBeTruthy()
  })
})
