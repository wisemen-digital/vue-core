import {
  describe,
  it,
} from 'vitest'

import { useMutation } from '@/composables/mutation/mutation.composable'

describe('useMutation', () => {
  it('should execute the mutation', async () => {
    const mutation = useMutation({
      queryFn: () => Promise.resolve('response'),
      queryKeysToInvalidate: {},
    })

    await mutation.execute()
  })
})
