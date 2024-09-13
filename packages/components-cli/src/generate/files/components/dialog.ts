import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const dialog: Component = {
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: 'dialog',
    },
    {
      type: ComponentType.TYPES,
      path: 'dialog.type.ts',
    },
    {
      type: ComponentType.COMPOSABLES,
      path: '/dialog/dialog.composable.ts',
    },
  ],
  internalDependencies: [
    ComponentName.BUTTON,
  ],
  component: ComponentName.DIALOG,
}
