import { composables } from '@/generate/files/config/composables'
import { icons } from '@/generate/files/config/icons'
import { lib } from '@/generate/files/config/lib'
import { style } from '@/generate/files/config/style'
import { types } from '@/generate/files/config/types'
import { utils } from '@/generate/files/config/utils'

import type { Component } from './components.type'

export const globalConfig: Component[] = [
  style,
  icons,
  lib,
  types,
  composables,
  utils,
]
