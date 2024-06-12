import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const transitions: Component = {
  files: [
    {
      path: 'view-transition',
      type: ComponentType.COMPONENTS,
    },
    {
      path: 'transitions',
      type: ComponentType.COMPONENTS,
    },
  ],
  component: ComponentName.TRANSITIONS,
}
