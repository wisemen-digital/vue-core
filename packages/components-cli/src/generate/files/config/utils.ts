import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const utils: Component = {
  files: [
    {
      type: ComponentType.UTILS,
      path: './',
    },
  ],
  component: ComponentName.UTILS,
}
