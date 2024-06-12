import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const switchy: Component = {
  files: [
    {
      path: 'switch',
      type: ComponentType.COMPONENTS,
    },
  ],
  component: ComponentName.SWITCH,
}
