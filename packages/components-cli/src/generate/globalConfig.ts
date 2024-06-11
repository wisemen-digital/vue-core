import { lib } from '@/generate/files/config/lib'
import { style } from '@/generate/files/config/style'
import { utils } from '@/generate/files/config/utils'

import type { Component } from './components.type'

export const globalConfig: Component[] = [
  style,
  lib,
  utils,
]
