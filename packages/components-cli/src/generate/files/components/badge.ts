import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const badge: Component = {
  files: [
    {
      path: 'badge',
      type: ComponentType.COMPONENTS,
    },
  ],
  component: ComponentName.BADGE,
}
