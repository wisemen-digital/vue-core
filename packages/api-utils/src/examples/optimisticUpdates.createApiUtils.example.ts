/**
 * Example: fully-typed `useOptimisticUpdates` via `createApiUtils<MyQueryKeys>()`.
 *
 * This avoids module augmentation of `QueryKeys`.
 */

import { QueryClient } from '@tanstack/vue-query'

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

export const {
  useOptimisticUpdates,
} = createApiUtils<MyQueryKeys>({
  queryClient,
})

export function exampleOptimisticUpdate(): void {
  const optimisticUpdates = useOptimisticUpdates()

  optimisticUpdates.update('userDetail', {
    by: {
      id: '123',
    },
    value: {
      name: 'Jane Doe',
    },
  })

  const user = optimisticUpdates.get([
    'userDetail',
    {
      userUuid: '123',
    },
  ])

  void user
}
