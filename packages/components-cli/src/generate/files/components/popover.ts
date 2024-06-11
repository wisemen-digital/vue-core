import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const popover: Component = {
  files: [
    {
      path: 'popover',
      type: ComponentType.COMPONENTS,
    },
  ],
  internalDependencies: [
    ComponentName.BUTTON,
  ],
  component: ComponentName.POPOVER,
}
