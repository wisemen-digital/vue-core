import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const popover: Component = {
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: 'popover',
    },
  ],
  internalDependencies: [
    ComponentName.BUTTON,
  ],
  component: ComponentName.POPOVER,
}
