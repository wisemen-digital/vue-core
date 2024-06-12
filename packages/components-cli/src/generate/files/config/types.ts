import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const types: Component = {
  files: [
    {
      path: 'dataItem.type.ts',
      type: ComponentType.TYPES,
    },
    {
      path: 'formFieldErrors.type.ts',
      type: ComponentType.TYPES,
    },
    {
      path: 'pagination.type.ts',
      type: ComponentType.TYPES,
    },
    {
      path: 'routes.type.ts',
      type: ComponentType.TYPES,
    },
    {
      path: 'selectItem.type.ts',
      type: ComponentType.TYPES,
    },
  ],
  component: ComponentName.TYPES,
}
