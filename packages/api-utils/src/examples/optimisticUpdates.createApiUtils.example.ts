/**
 * Example: fully-typed `useOptimisticUpdates` via `createApiUtils<MyQueryKeys>()`.
 *
 * This avoids module augmentation of `QueryKeys`.
 */

import { QueryClient } from '@tanstack/vue-query'
import { ok } from 'neverthrow'

import { createApiUtils } from '@/index'

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

const queryClient = new QueryClient()

export const apiUtils = createApiUtils<MyQueryKeys>({
  queryClient,
})

export function exampleOptimisticUpdate(): void {
  const optimisticUpdates = apiUtils.useOptimisticUpdates()

  const userQuery = apiUtils.useQuery('userDetail', {
    params: {
      userUuid: 'uuid-123',
    },
    queryFn: () => {
      return Promise.resolve(
        ok({
          id: '123',
          uuid: 'uuid-123',
          name: 'John Doe',
          email: 'john@example.com',
        }),
      )
    },
  })

  optimisticUpdates.update('userDetail', {
    by: {
      id: '123e4567-e89b-12d3-a456-426614174000',
    },
    value: {
      name: 'Jane Doe',
      email: 'jane@example.com',
    },
  })

  const user = optimisticUpdates.get([
    'userDetail',
    {
      userUuid: 'uuid-123',
    },
  ] as const)

  void user
  void userQuery
}
