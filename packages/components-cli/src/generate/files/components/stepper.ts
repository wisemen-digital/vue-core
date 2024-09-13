import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const stepper: Component = {
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: 'stepper',
    },
    {
      type: ComponentType.TYPES,
      path: 'stepper.type.ts',
    },
    {
      type: ComponentType.COMPOSABLES,
      path: 'stepper/stepper.composable.ts',
    },
  ],
  component: ComponentName.STEPPER,
}
