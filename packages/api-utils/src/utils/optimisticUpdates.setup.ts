import { QueryClient } from '@tanstack/vue-query'

import { createApiUtils } from '@/factory/createApiUtils'

import type { OptimisticUpdates } from './optimisticUpdates'

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
interface TestQueryKeys {
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

export function createTestSetup(): {
  optimisticUpdates: OptimisticUpdates<TestQueryKeys>
  queryClient: QueryClient
} {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })
  const {
    useOptimisticUpdates,
  } = createApiUtils<TestQueryKeys>({
    queryClient,
  })

  const optimisticUpdates = useOptimisticUpdates()

  return {
    optimisticUpdates,
    queryClient,
  }
}
