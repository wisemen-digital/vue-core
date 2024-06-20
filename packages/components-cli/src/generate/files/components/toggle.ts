import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const toggle: Component = {
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: 'toggle',
    },
  ],
  component: ComponentName.TOGGLE,
}
