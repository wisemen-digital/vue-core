import { definePluginConfig } from '@hey-api/openapi-ts'

import { handler } from './plugin'
import type { BuildersPlugin } from './types'

export const defaultConfig: BuildersPlugin['Config'] = {
  name: 'builders',
  config: {},
  dependencies: [
    '@hey-api/schemas',
    '@hey-api/typescript',
  ],
  handler,
  output: 'builders',
}

export const defineConfig = definePluginConfig(
  defaultConfig,
)

export default defineConfig
