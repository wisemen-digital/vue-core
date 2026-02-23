/**
 * Example: fully-typed `useMutation` via `createApiUtils<MyQueryKeys>()`.
 *
 * This avoids module augmentation of `QueryKeys` and provides type-safe
 * query invalidation based on the query keys configuration.
 */

import { QueryClient } from '@tanstack/vue-query'
import { ok } from 'neverthrow'

import { initializeApiUtils } from '@/config/config'
import { createApiUtils } from '@/index'

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
  userList: {
    entity: User[]
    params: {
      search?: string
    }
  }
}

const queryClient = new QueryClient()

initializeApiUtils(queryClient)

export const apiUtils = createApiUtils<MyQueryKeys>()

export function exampleMutation(): void {
  const updateUserMutation = apiUtils.useMutation<
    UpdateUserRequest,
    User,
    { userUuid: UserUuid }
  >({
    queryFn: ({
      body, params,
    }) => {
      // In real app, this would be an API call
      return Promise.resolve(ok({
        id: '123',
        uuid: params.userUuid,
        name: body?.name ?? 'John Doe',
        email: body?.email ?? 'john@example.com',
      }))
    },
    queryKeysToInvalidate: {
      // Return specific params to invalidate (required params must be specified)
      userDetail: {
        userUuid: (params) => params.userUuid,
      },
      // Empty object is allowed for void params or when all params are optional
      userList: {},
    },
  })

  // Execute the mutation with proper typing
  void updateUserMutation.execute({
    body: {
      name: 'Jane Doe',
      email: 'jane@example.com',
    },
    params: {
      userUuid: 'uuid-123',
    },
  })
}
