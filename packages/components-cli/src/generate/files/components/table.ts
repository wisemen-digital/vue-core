import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const table: Component = {
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: 'table',
    },
    {
      type: ComponentType.TYPES,
      path: 'table.type.ts',
    },
  ],
  internalDependencies: [
    ComponentName.BUTTON,
    ComponentName.SKELETON_LOADER,
  ],
  component: ComponentName.TABLE,
}
