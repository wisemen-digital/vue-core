import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const icon: Component = {
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: 'icon',
    },
  ],
  component: ComponentName.ICON,
}
