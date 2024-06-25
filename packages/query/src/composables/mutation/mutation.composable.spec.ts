import {
  describe,
  expect,
  it,
} from 'vitest'

import { useMutation } from '@/composables/mutation/mutation.composable'

describe('useMutation', () => {
  it('should be defined', () => {
    expect(useMutation).toBeDefined()
  })
})
