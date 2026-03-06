import {
  describe,
  expect,
  it,
} from 'vitest'

import { OptimisticUpdates } from './optimisticUpdates'
import { createTestSetup } from './optimisticUpdates.setup'

describe('optimisticUpdates - factory', () => {
  it('should create an OptimisticUpdates instance', () => {
    const {
      optimisticUpdates,
    } = createTestSetup()

    expect(optimisticUpdates).toBeInstanceOf(OptimisticUpdates)
  })
})
