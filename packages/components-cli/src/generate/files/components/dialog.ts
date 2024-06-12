import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const dialog: Component = {
  files: [
    {
      path: 'dialog',
      type: ComponentType.COMPONENTS,
    },
    {
      path: 'dialog.type.ts',
      type: ComponentType.TYPES,
    },
    {
      path: 'dialog.composable.ts',
      type: ComponentType.COMPOSABLES,
    },
  ],
  internalDependencies: [
    ComponentName.BUTTON,
  ],
  component: ComponentName.DIALOG,
}
