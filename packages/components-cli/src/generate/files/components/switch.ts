import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const switchy: Component = {
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: 'switch',
    },
  ],
  component: ComponentName.SWITCH,
}
