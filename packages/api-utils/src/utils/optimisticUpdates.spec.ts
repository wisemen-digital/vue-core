import { QueryClient } from '@tanstack/vue-query'
import {
  beforeEach,
  describe,
  expect,
  it,
} from 'vitest'
import {
  computed,
  ref,
} from 'vue'

import {
  createOptimisticUpdates,
  OptimisticUpdates,
} from './optimisticUpdates'

// Define test types
interface User {
  id: string
  uuid: string
  isActive: boolean
  name: string
  email: string
}

interface Product {
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

describe('optimisticUpdates', () => {
  let queryClient: QueryClient
  let optimisticUpdates: OptimisticUpdates

  beforeEach(() => {
    queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    })
    optimisticUpdates = createOptimisticUpdates(queryClient)
  })

  describe('createOptimisticUpdates', () => {
    it('should create an OptimisticUpdates instance', () => {
      expect(optimisticUpdates).toBeInstanceOf(OptimisticUpdates)
    })
  })

  describe('update - single entity', () => {
    it('should update a single entity by id (default)', () => {
      const userData: User = {
        id: '123',
        uuid: 'abc-123',
        isActive: true,
        name: 'John Doe',
        email: 'john@example.com',
      }

      // Set initial data
      queryClient.setQueryData(
        [
          'userDetail',
          {
            userUuid: '123',
          },
        ],
        userData,
      )

      // Update the user (id from value)
      optimisticUpdates.update({
        key: 'userDetail',
        value: {
          id: '123',
          name: 'Jane Doe',
        },
      })

      // Get updated data
      const updatedData = queryClient.getQueryData<User>([
        'userDetail',
        {
          userUuid: '123',
        },
      ])

      expect(updatedData).toEqual({
        ...userData,
        name: 'Jane Doe',
      })
    })

    it('should update a single entity by custom field', () => {
      const userData: User = {
        id: '123',
        uuid: 'abc-123',
        isActive: true,
        name: 'John Doe',
        email: 'john@example.com',
      }

      queryClient.setQueryData(
        [
          'userDetail',
          {
            userUuid: 'abc-123',
          },
        ],
        userData,
      )

      optimisticUpdates.update({
        by: {
          uuid: 'abc-123',
        },
        key: 'userDetail',
        value: {
          email: 'jane@example.com',
        },
      })

      const updatedData = queryClient.getQueryData<User>([
        'userDetail',
        {
          userUuid: 'abc-123',
        },
      ])

      expect(updatedData).toEqual({
        ...userData,
        email: 'jane@example.com',
      })
    })

    it('should update a single entity using a predicate function', () => {
      const userData: User = {
        id: '123',
        uuid: 'abc-123',
        isActive: true,
        name: 'John Doe',
        email: 'john@example.com',
      }

      queryClient.setQueryData(
        [
          'userDetail',
          {
            userUuid: '123',
          },
        ],
        userData,
      )

      optimisticUpdates.update({
        by: (user) => user.email === 'john@example.com',
        key: 'userDetail',
        value: {
          isActive: false,
        },
      })

      const updatedData = queryClient.getQueryData<User>([
        'userDetail',
        {
          userUuid: '123',
        },
      ])

      expect(updatedData).toEqual({
        ...userData,
        isActive: false,
      })
    })

    it('should not update if no match found', () => {
      const userData: User = {
        id: '123',
        uuid: 'abc-123',
        isActive: true,
        name: 'John Doe',
        email: 'john@example.com',
      }

      queryClient.setQueryData(
        [
          'userDetail',
          {
            userUuid: '123',
          },
        ],
        userData,
      )

      optimisticUpdates.update({
        by: {
          id: '999',
        },
        key: 'userDetail',
        value: {
          name: 'Jane Doe',
        },
      })

      const updatedData = queryClient.getQueryData<User>([
        'userDetail',
        {
          userUuid: '123',
        },
      ])

      expect(updatedData).toEqual(userData)
    })

    it('should handle Vue refs in match value', () => {
      const userData: User = {
        id: '123',
        uuid: 'abc-123',
        isActive: true,
        name: 'John Doe',
        email: 'john@example.com',
      }

      queryClient.setQueryData(
        [
          'userDetail',
          {
            userUuid: '123',
          },
        ],
        userData,
      )

      const idRef = ref<string>('123')

      optimisticUpdates.update({
        by: {
          id: idRef.value,
        },
        key: 'userDetail',
        value: {
          name: 'Jane Doe',
        },
      })

      optimisticUpdates.update({
        by: (user) => user.id === idRef.value,
        key: 'userDetail',
        value: {
          name: 'Jane Doe',

        },
      })

      const updatedData = queryClient.getQueryData<User>([
        'userDetail',
        {
          userUuid: '123',
        },
      ])

      expect(updatedData?.name).toBe('Jane Doe')
    })

    it('should match multiple keys when provided', () => {
      const userData: User = {
        id: '123',
        uuid: 'abc-123',
        isActive: true,
        name: 'John Doe',
        email: 'john@example.com',
      }

      queryClient.setQueryData(
        [
          'userDetail',
          {
            userUuid: '123',
          },
        ],
        userData,
      )

      optimisticUpdates.update({
        by: {
          id: '123',
          uuid: 'abc-123',
        },
        key: 'userDetail',
        value: {
          name: 'Jane Doe',
        },
      })

      const updatedData = queryClient.getQueryData<User>([
        'userDetail',
        {
          userUuid: '123',
        },
      ])

      expect(updatedData?.name).toBe('Jane Doe')
    })
  })

  describe('update - array entities', () => {
    it('should update an item in an array by id (default)', () => {
      const users: User[] = [
        {
          id: '1',
          uuid: 'uuid-1',
          isActive: true,
          name: 'John Doe',
          email: 'john@example.com',
        },
        {
          id: '2',
          uuid: 'uuid-2',
          isActive: true,
          name: 'Jane Doe',
          email: 'jane@example.com',
        },
      ]

      queryClient.setQueryData(
        [
          'userList',
          {
            search: '',
          },
        ],
        users,
      )

      optimisticUpdates.update({
        by: {
          id: '2',
        },
        key: 'userList',
        value: {
          name: 'Jane Smith',
        },
      })

      const updatedData = queryClient.getQueryData<User[]>([
        'userList',
        {
          search: '',
        },
      ])

      expect(updatedData).toEqual([
        users[0],
        {
          ...users[1],
          name: 'Jane Smith',
        },
      ])
    })

    it('should update an item in an array by custom field', () => {
      const products: Product[] = [
        {
          id: '1',
          name: 'Laptop',
          category: 'electronics',
          inStock: true,
          price: 999,
          sku: 'PROD-001',
        },
        {
          id: '2',
          name: 'Mouse',
          category: 'electronics',
          inStock: true,
          price: 49,
          sku: 'PROD-002',
        },
      ]

      queryClient.setQueryData(
        [
          'productList',
          {
            category: 'electronics',
          },
        ],
        products,
      )

      optimisticUpdates.update({
        by: {
          sku: 'PROD-002',
        },
        key: 'productList',
        value: {
          price: 39,
        },
      })

      const updatedData = queryClient.getQueryData<Product[]>([
        'productList',
        {
          category: 'electronics',
        },
      ])

      expect(updatedData).toEqual([
        products[0],
        {
          ...products[1],
          price: 39,
        },
      ])
    })

    it('should update multiple items using a predicate function', () => {
      const products: Product[] = [
        {
          id: '1',
          name: 'Laptop',
          category: 'electronics',
          inStock: true,
          price: 999,
          sku: 'PROD-001',
        },
        {
          id: '2',
          name: 'Mouse',
          category: 'electronics',
          inStock: true,
          price: 49,
          sku: 'PROD-002',
        },
        {
          id: '3',
          name: 'Chair',
          category: 'furniture',
          inStock: true,
          price: 199,
          sku: 'PROD-003',
        },
      ]

      queryClient.setQueryData(
        [
          'productList',
          {
            category: 'all',
          },
        ],
        products,
      )

      optimisticUpdates.update({
        by: (product) => product.category === 'electronics',
        key: 'productList',
        value: {
          inStock: false,
        },
      })

      const updatedData = queryClient.getQueryData<Product[]>([
        'productList',
        {
          category: 'all',
        },
      ])

      expect(updatedData).toEqual([
        {
          ...products[0],
          inStock: false,
        },
        {
          ...products[1],
          inStock: false,
        },
        products[2],
      ])
    })

    it('should not update if no items match', () => {
      const users: User[] = [
        {
          id: '1',
          uuid: 'uuid-1',
          isActive: true,
          name: 'John Doe',
          email: 'john@example.com',
        },
      ]

      queryClient.setQueryData(
        [
          'userList',
          {
            search: '',
          },
        ],
        users,
      )

      optimisticUpdates.update({
        by: {
          id: '999',
        },
        key: 'userList',
        value: {
          name: 'Jane Doe',
        },
      })

      const updatedData = queryClient.getQueryData<User[]>([
        'userList',
        {
          search: '',
        },
      ])

      expect(updatedData).toEqual(users)
    })
  })

  describe('update - multiple queries', () => {
    it('should update all matching queries', () => {
      const user1: User = {
        id: '123',
        uuid: 'abc-123',
        isActive: true,
        name: 'John Doe',
        email: 'john@example.com',
      }

      const user2: User = {
        id: '123',
        uuid: 'abc-123',
        isActive: true,
        name: 'John Doe',
        email: 'jane@example.com',
      }

      // Set data for multiple queries with same key but different params
      queryClient.setQueryData(
        [
          'userDetail',
          {
            userUuid: 'abc-123',
          },
        ],
        user1,
      )
      queryClient.setQueryData(
        [
          'userDetail',
          {
            userUuid: 'def-456',
          },
        ],
        user2,
      )

      // Update all userDetail queries
      optimisticUpdates.update({
        by: {
          id: '123',
        },
        key: 'userDetail',
        value: {
          name: 'Updated Name',
        },
      })

      const updatedData1 = queryClient.getQueryData<User>([
        'userDetail',
        {
          userUuid: 'abc-123',
        },
      ])
      const updatedData2 = queryClient.getQueryData<User>([
        'userDetail',
        {
          userUuid: 'def-456',
        },
      ])

      expect(updatedData1?.name).toBe('Updated Name')
      expect(updatedData2?.name).toBe('Updated Name')
    })
  })

  describe('update - edge cases', () => {
    it('should handle null data gracefully', () => {
      queryClient.setQueryData(
        [
          'userDetail',
          {
            userUuid: '123',
          },
        ],
        null,
      )

      expect(() => {
        optimisticUpdates.update({
          key: 'userDetail',
          value: {
            id: '123',
            name: 'John Doe',
          },
        })
      }).not.toThrowError()
    })

    it('should handle undefined data gracefully', () => {
      expect(() => {
        optimisticUpdates.update({
          key: 'userDetail',
          value: {
            id: '123',
            name: 'John Doe',
          },
        })
      }).not.toThrowError()
    })

    it('should handle empty arrays', () => {
      queryClient.setQueryData(
        [
          'userList',
          {
            search: '',
          },
        ],
        [],
      )

      optimisticUpdates.update({
        key: 'userList',
        value: {
          id: '123',
          name: 'John Doe',
        },
      })

      const updatedData = queryClient.getQueryData<User[]>([
        'userList',
        {
          search: '',
        },
      ])

      expect(updatedData).toEqual([])
    })
  })

  describe('invalidate', () => {
    it('should invalidate queries by key', async () => {
      const userData: User = {
        id: '123',
        uuid: 'abc-123',
        isActive: true,
        name: 'John Doe',
        email: 'john@example.com',
      }

      queryClient.setQueryData(
        [
          'userDetail',
          {
            userUuid: '123',
          },
        ],
        userData,
      )

      await optimisticUpdates.invalidate('userDetail')

      const query = queryClient
        .getQueryCache()
        .find({
          queryKey: [
            'userDetail',
            {
              userUuid: '123',
            },
          ],
        })

      expect(query?.state.isInvalidated).toBeTruthy()
    })

    it('should invalidate queries by key and params', async () => {
      const user1: User = {
        id: '123',
        uuid: 'abc-123',
        isActive: true,
        name: 'John Doe',
        email: 'john@example.com',
      }

      const user2: User = {
        id: '456',
        uuid: 'def-456',
        isActive: true,
        name: 'Jane Doe',
        email: 'jane@example.com',
      }

      queryClient.setQueryData(
        [
          'userDetail',
          {
            userUuid: 'abc-123',
          },
        ],
        user1,
      )
      queryClient.setQueryData(
        [
          'userDetail',
          {
            userUuid: 'def-456',
          },
        ],
        user2,
      )

      await optimisticUpdates.invalidate('userDetail', {
        userUuid: 'abc-123',
      })

      const query1 = queryClient
        .getQueryCache()
        .find({
          queryKey: [
            'userDetail',
            {
              userUuid: 'abc-123',
            },
          ],
        })
      const query2 = queryClient
        .getQueryCache()
        .find({
          queryKey: [
            'userDetail',
            {
              userUuid: 'def-456',
            },
          ],
        })

      expect(query1?.state.isInvalidated).toBeTruthy()
      expect(query2?.state.isInvalidated).toBeFalsy()
    })

    it('should handle refs in params', async () => {
      const userData: User = {
        id: '123',
        uuid: 'abc-123',
        isActive: true,
        name: 'John Doe',
        email: 'john@example.com',
      }

      const userUuidRef = computed<string>(() => 'abc-123')

      queryClient.setQueryData(
        [
          'userDetail',
          {
            userUuid: userUuidRef.value,
          },
        ],
        userData,
      )

      await optimisticUpdates.invalidate('userDetail', {
        userUuid: userUuidRef.value,
      })

      const query = queryClient
        .getQueryCache()
        .find({
          queryKey: [
            'userDetail',
            {
              userUuid: 'abc-123',
            },
          ],
        })

      expect(query?.state.isInvalidated).toBeTruthy()
    })
  })
})
