import { icon } from '@/generate/files/components/icon'
import { loader } from '@/generate/files/components/loader'
import { router } from '@/generate/files/components/router'
import { text } from '@/generate/files/components/text'
import { transitions } from '@/generate/files/components/transitions'
import { composables } from '@/generate/files/config/composables'
import { lib } from '@/generate/files/config/lib'
import { types } from '@/generate/files/config/types'
import { utils } from '@/generate/files/config/utils'

import type { Component } from './components.type'

export const globalComponents: Component[] = [
  icon,
  text,
  loader,
  transitions,
  lib,
  types,
  composables,
  utils,
  router,
]
