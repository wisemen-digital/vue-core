import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const select: Component = {
  files: [
    {
      path: 'select',
      type: ComponentType.COMPONENTS,
    },
  ],
  component: ComponentName.SELECT,
}
