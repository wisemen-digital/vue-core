import {
  beforeEach,
  describe,
  expect,
  it,
} from 'vitest'

import type {
  Product,
  User,
} from './optimisticUpdates.setup'
import { createTestSetup } from './optimisticUpdates.setup'

describe('optimisticUpdates - update', () => {
  let setup: ReturnType<typeof createTestSetup>

  beforeEach(() => {
    setup = createTestSetup()
  })

  describe('single entity', () => {
    it('should update a single entity by id (default)', () => {
      const userData: User = {
        id: '123',
        uuid: 'abc-123',
        isActive: true,
        name: 'John Doe',
        email: 'john@example.com',
      }

      const queryKey = [
        'userDetail',
        {
          userUuid: 'abc-123',
        },
      ] as const

      // Set initial data
      setup.optimisticUpdates.set(queryKey, userData)

      // Update the user (id from value)
      setup.optimisticUpdates.update(queryKey, {
        by: (user) => user.id === '123',
        value: (user) => ({
          ...user,
          name: 'Jane Doe',
        }),
      })

      // Get updated data
      const updatedData = setup.optimisticUpdates.get(queryKey)

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

      const queryKey = [
        'userDetail',
        {
          userUuid: 'abc-123',
        },
      ] as const

      setup.optimisticUpdates.set(queryKey, userData)

      setup.optimisticUpdates.update('userDetail', {
        by: (user) => user.uuid === 'abc-123',
        value: (user) => ({
          ...user,
          email: 'jane@example.com',
        }),
      })

      const updatedData = setup.optimisticUpdates.get(queryKey)

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

      const queryKey = [
        'userDetail',
        {
          userUuid: '123',
        },
      ] as const

      setup.optimisticUpdates.set(queryKey, userData)

      setup.optimisticUpdates.update('userDetail', {
        by: (user) => user.email === 'john@example.com',
        value: (user) => ({
          ...user,
          isActive: false,
        }),
      })

      const updatedData = setup.optimisticUpdates.get(queryKey)

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

      const queryKey = [
        'userDetail',
        {
          userUuid: '123',
        },
      ] as const

      setup.optimisticUpdates.set(queryKey, userData)

      setup.optimisticUpdates.update('userDetail', {
        by: (user) => user.id === '999',
        value: (user) => ({
          ...user,
          name: 'Jane Doe',
        }),
      })

      const updatedData = setup.optimisticUpdates.get(queryKey)

      expect(updatedData).toEqual(userData)
    })

    it('should handle matching by id', () => {
      const userData: User = {
        id: '123',
        uuid: 'abc-123',
        isActive: true,
        name: 'John Doe',
        email: 'john@example.com',
      }

      const queryKey = [
        'userDetail',
        {
          userUuid: '123',
        },
      ] as const

      setup.optimisticUpdates.set(queryKey, userData)

      const targetId = '123'

      setup.optimisticUpdates.update('userDetail', {
        by: (user) => user.id === targetId,
        value: (user) => ({
          ...user,
          name: 'Jane Doe',
        }),
      })

      const updatedData = setup.optimisticUpdates.get(queryKey)

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

      const queryKey = [
        'userDetail',
        {
          userUuid: '123',
        },
      ] as const

      setup.optimisticUpdates.set(queryKey, userData)

      setup.optimisticUpdates.update('userDetail', {
        by: (user) => user.id === '123' && user.uuid === 'abc-123',
        value: (user) => ({
          ...user,
          name: 'Jane Doe',
        }),
      })

      const updatedData = setup.optimisticUpdates.get(queryKey)

      expect(updatedData?.name).toBe('Jane Doe')
    })
  })

  describe('array entities', () => {
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

      const queryKey = [
        'userList',
        {
          search: '',
        },
      ] as const

      setup.optimisticUpdates.set(queryKey, users)

      setup.optimisticUpdates.update('userList', {
        by: (user) => user.id === '2',
        value: (user) => ({
          ...user,
          name: 'Jane Smith',
        }),
      })

      const updatedData = setup.optimisticUpdates.get(queryKey)

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

      const queryKey = [
        'productList',
        {
          category: 'electronics',
        },
      ] as const

      setup.optimisticUpdates.set(queryKey, products)

      setup.optimisticUpdates.update('productList', {
        by: (product) => product.sku === 'PROD-002',
        value: (product) => ({
          ...product,
          price: 39,
        }),
      })

      const updatedData = setup.optimisticUpdates.get(queryKey)

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

      const queryKey = [
        'productList',
        {
          category: 'all',
        },
      ] as const

      setup.optimisticUpdates.set(queryKey, products)

      setup.optimisticUpdates.update('productList', {
        by: (product) => product.category === 'electronics',
        value: (product) => ({
          ...product,
          inStock: false,
        }),
      })

      const updatedData = setup.optimisticUpdates.get(queryKey)

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

      const queryKey = [
        'userList',
        {
          search: '',
        },
      ] as const

      setup.optimisticUpdates.set(queryKey, users)

      setup.optimisticUpdates.update('userList', {
        by: (user) => user.id === '999',
        value: (user) => ({
          ...user,
          name: 'Jane Doe',
        }),
      })

      const updatedData = setup.optimisticUpdates.get(queryKey)

      expect(updatedData).toEqual(users)
    })
  })

  describe('multiple queries', () => {
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

      const queryKey1 = [
        'userDetail',
        {
          userUuid: 'abc-123',
        },
      ] as const
      const queryKey2 = [
        'userDetail',
        {
          userUuid: 'def-456',
        },
      ] as const

      // Set data for multiple queries with same key but different params
      setup.optimisticUpdates.set(queryKey1, user1)
      setup.optimisticUpdates.set(queryKey2, user2)

      // Update all userDetail queries
      setup.optimisticUpdates.update('userDetail', {
        by: (user) => user.id === '123',
        value: (user) => ({
          ...user,
          name: 'Updated Name',
        }),
      })

      const updatedData1 = setup.optimisticUpdates.get(queryKey1)
      const updatedData2 = setup.optimisticUpdates.get(queryKey2)

      expect(updatedData1?.name).toBe('Updated Name')
      expect(updatedData2?.name).toBe('Updated Name')
    })
  })

  describe('edge cases', () => {
    it('should handle null data gracefully', () => {
      const queryKey = [
        'userDetail',
        {
          userUuid: '123',
        },
      ] as const

      setup.queryClient.setQueryData(queryKey, null)

      expect(() => {
        setup.optimisticUpdates.update('userDetail', {
          by: (user) => user.id === '123',
          value: (user) => ({
            ...user,
            name: 'John Doe',
          }),
        })
      }).not.toThrowError()
    })

    it('should handle undefined data gracefully', () => {
      expect(() => {
        setup.optimisticUpdates.update('userDetail', {
          by: (user) => user.id === '123',
          value: (user) => ({
            ...user,
            name: 'John Doe',
          }),
        })
      }).not.toThrowError()
    })

    it('should handle empty arrays', () => {
      const queryKey = [
        'userList',
        {
          search: '',
        },
      ] as const

      setup.optimisticUpdates.set(queryKey, [])

      setup.optimisticUpdates.update('userList', {
        by: (user) => user.id === '123',
        value: (user) => ({
          ...user,
          name: 'John Doe',
        }),
      })

      const updatedData = setup.optimisticUpdates.get(queryKey)

      expect(updatedData).toEqual([])
    })
  })

  describe('single key format - update all matching queries', () => {
    it('should update all queries with the same key', () => {
      const user1: User = {
        id: '1',
        uuid: 'user-1',
        isActive: true,
        name: 'John',
        email: 'john@example.com',
      }

      const user2: User = {
        id: '2',
        uuid: 'user-2',
        isActive: true,
        name: 'Jane',
        email: 'jane@example.com',
      }

      // Set data with different params but same key
      const queryKey1 = [
        'userDetail',
        {
          userUuid: 'user-1',
        },
      ] as const
      const queryKey2 = [
        'userDetail',
        {
          userUuid: 'user-2',
        },
      ] as const

      setup.optimisticUpdates.set(queryKey1, user1)
      setup.optimisticUpdates.set(queryKey2, user2)

      // Update all 'userDetail' queries using single key format
      setup.optimisticUpdates.update('userDetail', {
        by: () => true, // Match all items
        value: (user) => ({
          ...user,
          isActive: false,
        }),
      })

      // Both queries should be updated
      const updated1 = setup.optimisticUpdates.get(queryKey1)
      const updated2 = setup.optimisticUpdates.get(queryKey2)

      expect(updated1).toEqual({
        ...user1,
        isActive: false,
      })
      expect(updated2).toEqual({
        ...user2,
        isActive: false,
      })
    })

    it('should update all arrays with the same key using predicate', () => {
      const users1: User[] = [
        {
          id: '1',
          uuid: 'user-1',
          isActive: true,
          name: 'John',
          email: 'john@example.com',
        },
        {
          id: '2',
          uuid: 'user-2',
          isActive: true,
          name: 'Jane',
          email: 'jane@example.com',
        },
      ]

      const users2: User[] = [
        {
          id: '3',
          uuid: 'user-3',
          isActive: true,
          name: 'Bob',
          email: 'bob@example.com',
        },
      ]

      setup.optimisticUpdates.set([
        'userList',
        {
          search: 'active',
        },
      ], users1)
      setup.optimisticUpdates.set([
        'userList',
        {
          search: 'pending',
        },
      ], users2)
      // Update all 'userList' queries where name === 'John'
      setup.optimisticUpdates.update('userList', {
        by: (user: User) => user.name === 'John',
        value: (user: User) => ({
          ...user,
          isActive: false,
        }),
      })

      const updated1 = setup.optimisticUpdates.get([
        'userList',
        {
          search: 'active',
        },
      ])
      const updated2 = setup.optimisticUpdates.get([
        'userList',
        {
          search: 'pending',
        },
      ])

      expect(updated1).toEqual([
        {
          id: '1',
          uuid: 'user-1',
          isActive: false,
          name: 'John',
          email: 'john@example.com',
        },
        users1[1],
      ])
      expect(updated2).toEqual(users2)
    })
  })

  describe('single key format - get all matching queries', () => {
    it('should get all entities with the same key', () => {
      const user1: User = {
        id: '1',
        uuid: 'user-1',
        isActive: true,
        name: 'John',
        email: 'john@example.com',
      }

      const user2: User = {
        id: '2',
        uuid: 'user-2',
        isActive: false,
        name: 'Jane',
        email: 'jane@example.com',
      }

      const queryKey1 = [
        'userDetail',
        {
          userUuid: 'user-1',
        },
      ] as const
      const queryKey2 = [
        'userDetail',
        {
          userUuid: 'user-2',
        },
      ] as const

      setup.optimisticUpdates.set(queryKey1, user1)
      setup.optimisticUpdates.set(queryKey2, user2)

      // Get all 'userDetail' queries
      const allUsers = setup.optimisticUpdates.get('userDetail')

      expect(allUsers).toHaveLength(2)
      expect(allUsers).toContainEqual(user1)
      expect(allUsers).toContainEqual(user2)
    })

    it('should return empty array when no queries match the key', () => {
      const allUsers = setup.optimisticUpdates.get('userDetail')

      expect(allUsers).toEqual([])
    })
  })

  describe('single key format - set query', () => {
    it('should set a query using single key format', () => {
      const userData: User = {
        id: '123',
        uuid: 'abc-123',
        isActive: true,
        name: 'John Doe',
        email: 'john@example.com',
      }

      // Set using single key format
      setup.optimisticUpdates.set('userDetail', userData)

      // Get using single key format returns array
      const allUsers = setup.optimisticUpdates.get('userDetail')

      expect(allUsers).toEqual([
        userData,
      ])
    })

    it('should store single key query in normalized array format', () => {
      const userData: User = {
        id: '123',
        uuid: 'abc-123',
        isActive: true,
        name: 'John Doe',
        email: 'john@example.com',
      }

      // Set using single key format
      setup.optimisticUpdates.set('userDetail', userData)

      // Verify it's stored under normalized array key
      const query = setup.queryClient
        .getQueryCache()
        .find({
          queryKey: [
            'userDetail',
          ],
        })

      expect(query).toBeDefined()
      expect(query?.state.data).toBeDefined()
    })

    it('should distinguish between single key and tuple key formats', () => {
      const user1: User = {
        id: '1',
        uuid: 'user-1',
        isActive: true,
        name: 'John',
        email: 'john@example.com',
      }

      const user2: User = {
        id: '2',
        uuid: 'user-2',
        isActive: true,
        name: 'Jane',
        email: 'jane@example.com',
      }

      // Set using single key format
      setup.optimisticUpdates.set('userDetail', user1)

      // Set using tuple format with params
      setup.optimisticUpdates.set([
        'userDetail',
        {
          userUuid: 'user-2',
        },
      ] as const, user2)

      // Get all queries with 'userDetail' key - should return both
      const allResults = setup.optimisticUpdates.get('userDetail')

      expect(allResults).toContainEqual(user1)
      expect(allResults).toContainEqual(user2)
      expect(allResults).toHaveLength(2)

      // Get exact query stored as ['userDetail'] - should only return user1
      const exactResult = setup.optimisticUpdates.get('userDetail', {
        isExact: true,
      })

      expect(exactResult).toEqual(user1)

      // Get using tuple key - should only return user2
      const tupleKeyResult = setup.optimisticUpdates.get([
        'userDetail',
        {
          userUuid: 'user-2',
        },
      ] as const)

      expect(tupleKeyResult).toEqual(user2)
    })
  })
})
