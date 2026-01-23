import {
  beforeEach,
  describe,
  expect,
  it,
} from 'vitest'

import type { User } from './optimisticUpdates.setup'
import { createTestSetup } from './optimisticUpdates.setup'

describe('optimisticUpdates - invalidate', () => {
  let setup: ReturnType<typeof createTestSetup>

  beforeEach(() => {
    setup = createTestSetup()
  })

  it('should invalidate queries by key', async () => {
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

    await setup.optimisticUpdates.invalidate('userDetail')

    const query = setup.queryClient
      .getQueryCache()
      .find({
        queryKey,
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

    setup.optimisticUpdates.set(queryKey1, user1)
    setup.optimisticUpdates.set(queryKey2, user2)

    await setup.optimisticUpdates.invalidate([
      'userDetail',
      {
        userUuid: 'abc-123',
      },
    ])

    const query1 = setup.queryClient
      .getQueryCache()
      .find({
        queryKey: queryKey1,
      })
    const query2 = setup.queryClient
      .getQueryCache()
      .find({
        queryKey: queryKey2,
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

    const userUuid = 'abc-123'

    const queryKey = [
      'userDetail',
      {
        userUuid,
      },
    ] as const

    setup.optimisticUpdates.set(queryKey, userData)

    await setup.optimisticUpdates.invalidate([
      'userDetail',
      {
        userUuid,
      },
    ])

    const query = setup.queryClient
      .getQueryCache()
      .find({
        queryKey,
      })

    expect(query?.state.isInvalidated).toBeTruthy()
  })

  it('should invalidate all queries with the same key', async () => {
    const userData: User = {
      id: '123',
      uuid: 'abc-123',
      isActive: true,
      name: 'John Doe',
      email: 'john@example.com',
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

    setup.optimisticUpdates.set(queryKey1, userData)
    setup.optimisticUpdates.set(queryKey2, userData)

    // Invalidate all 'userDetail' queries using single key format
    await setup.optimisticUpdates.invalidate('userDetail')

    const query1 = setup.queryClient
      .getQueryCache()
      .find({
        queryKey: queryKey1,
      })

    const query2 = setup.queryClient
      .getQueryCache()
      .find({
        queryKey: queryKey2,
      })

    // Both should be invalidated
    expect(query1?.state.isInvalidated).toBeTruthy()
    expect(query2?.state.isInvalidated).toBeTruthy()
  })
})
