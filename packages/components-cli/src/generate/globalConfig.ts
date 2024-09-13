import { config } from '@/generate/files/config/config'
import { icons } from '@/generate/files/config/icons'
import { style } from '@/generate/files/config/style'

import type { Component } from './components.type'

export const globalConfig: Component[] = [
  style,
  icons,
  config,
]
