import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const toggle: Component = {
  files: [
    {
      path: 'toggle',
      type: ComponentType.COMPONENTS,
    },
  ],
  component: ComponentName.TOGGLE,
}
