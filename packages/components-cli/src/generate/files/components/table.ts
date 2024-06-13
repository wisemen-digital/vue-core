import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const table: Component = {
  files: [
    {
      path: 'table',
      type: ComponentType.COMPONENTS,
    },
    {
      path: 'table.type.ts',
      type: ComponentType.TYPES,
    },
  ],
  internalDependencies: [
    ComponentName.BUTTON,
    ComponentName.SKELETON_LOADER,
  ],
  component: ComponentName.TABLE,
}
