import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const button: Component = {
  files: [
    {
      path: 'button',
      type: ComponentType.COMPONENTS,
    },
  ],
  component: ComponentName.BUTTON,
}
