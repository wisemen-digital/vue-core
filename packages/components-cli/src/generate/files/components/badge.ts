import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const badge: Component = {
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: 'badge',
    },
  ],
  component: ComponentName.BADGE,
}
