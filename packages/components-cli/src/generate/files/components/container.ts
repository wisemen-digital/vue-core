import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const container: Component = {
  files: [
    {
      path: 'container',
      type: ComponentType.COMPONENTS,
    },
  ],
  component: ComponentName.CONTAINER,
}
