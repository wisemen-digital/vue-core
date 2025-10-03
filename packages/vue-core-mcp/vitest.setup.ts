import { afterEach } from 'vitest'

import { resetCache } from './src/utils/cache'

afterEach(() => {
  resetCache()
})
