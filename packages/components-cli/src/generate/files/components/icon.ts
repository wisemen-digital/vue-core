import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const icon: Component = {
  files: [
    {
      path: 'icon',
      type: ComponentType.COMPONENTS,
    },
  ],
  component: ComponentName.ICON,
}
