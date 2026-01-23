import { QueryClient } from '@tanstack/vue-query'

import { createOptimisticUpdates } from './optimisticUpdates'

// Define test types
export interface User {
  id: string
  uuid: string
  isActive: boolean
  name: string
  email: string
}

export interface Product {
  id: string
  name: string
  category: string
  inStock: boolean
  price: number
  sku: string
}

// Extend QueryKeys for testing
declare module '@/types/queryKeys.type' {
  interface QueryKeys {
    productList: {
      entity: Product[]
      params: {
        category: string
      }
    }
    userDetail: {
      entity: User
      params: {
        userUuid: string
      }
    }
    userList: {
      entity: User[]
      params: {
        search: string
      }
    }
  }
}

export function createTestSetup(): {
  optimisticUpdates: ReturnType<typeof createOptimisticUpdates>
  queryClient: QueryClient
} {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })
  const optimisticUpdates = createOptimisticUpdates(queryClient)

  return {
    optimisticUpdates,
    queryClient,
  }
}
