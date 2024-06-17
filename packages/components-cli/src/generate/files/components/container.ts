import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const container: Component = {
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: 'container',
    },
  ],
  component: ComponentName.CONTAINER,
}
