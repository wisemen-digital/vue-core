import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const button: Component = {
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: 'button',
    },
  ],
  internalDependencies: [
    ComponentName.KEYBOARD,
  ],
  component: ComponentName.BUTTON,
}
