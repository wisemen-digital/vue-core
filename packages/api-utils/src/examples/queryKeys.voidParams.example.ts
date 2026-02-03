/**
 * Example: Query keys with void params (no params required).
 *
 * This example demonstrates that queries can be defined without any params,
 * and the type system will correctly enforce that params is optional.
 *
 * TypeScript will fail if:
 * 1. You try to pass `params` when the query key doesn't define a `params` field
 * 2. You don't properly handle the void type in the implementation
 */

import { QueryClient } from '@tanstack/vue-query'
import { ok } from 'neverthrow'
import { computed } from 'vue'

import { createApiUtils } from '@/index'

interface Post {
  id: string
  title: string
  content: string
}

interface AppConfig {
  apiUrl: string
  features: string[]
  version: string
}

interface User {
  id: string
  name: string
  email: string
}

interface OtherUser {
  id: string
  name: string
  email: string
  email2: string

}

interface MyQueryKeys {
  // Query without params - should work with void
  appConfig: {
    entity: AppConfig
  }
  postList: {
    entity: Post[]
  }
  userDetail: {
    entity: User
    params: {
      userId: string
    }
  }

  userIndex: {
    entity: OtherUser[]
    params: {
      userId: string
    }
  }
  userIndex2: {
    entity: User[]
    params: {
      userId: string
    }
  }

}

const queryClient = new QueryClient()

export const apiUtils = createApiUtils<MyQueryKeys>({
  queryClient,
})

export function exampleVoidParams(): void {
  const {
    useQuery,
  } = apiUtils

  // This should work - no params passed (params is optional for void)
  useQuery('appConfig', {
    queryFn: () => {
      return Promise.resolve(
        ok({
          apiUrl: 'https://api.example.com',
          features: [
            'feature1',
            'feature2',
          ],
          version: '1.0.0',
        }),
      )
    },
  })

  // This would cause a TypeScript error if uncommented:
  // const badQuery = useQuery('appConfig', {
  //   params: {}, // ❌ Error: appConfig doesn't define params
  //   queryFn: () => Promise.resolve(ok({})),
  // })

  // This should work - params passed for userDetail
  useQuery('userDetail', {
    params: {
      userId: computed<string>(() => 'user-123'),
    },
    queryFn: () => {
      return Promise.resolve(
        ok({
          id: 'user-123',
          name: 'Jane Doe',
          email: 'jane@example.com',
        }),
      )
    },
  })
}

export function exampleInfiniteQueryVoidParams(): void {
  const postApiUtils = createApiUtils<MyQueryKeys>({
    queryClient,
  })

  // This should work - infinite query without params
  postApiUtils.useOffsetInfiniteQuery('postList', {
    limit: 10,
    queryFn: ({
      limit, offset,
    }) => {
      return Promise.resolve(ok({
        data: [
          {
            id: '1',
            title: 'Post 1',
            content: 'Content 1',
          },
          {
            id: '2',
            title: 'Post 2',
            content: 'Content 2',
          },
        ],
        meta: {
          limit,
          offset,
          total: 100,
        },
      }))
    },
  })
}
