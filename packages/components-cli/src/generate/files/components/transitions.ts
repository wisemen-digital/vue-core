import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const transitions: Component = {
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: 'view-transition',
    },
    {
      type: ComponentType.COMPONENTS,
      path: 'transitions',
    },
  ],
  component: ComponentName.TRANSITIONS,
}
