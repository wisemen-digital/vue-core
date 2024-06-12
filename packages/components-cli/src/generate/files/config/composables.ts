import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const composables: Component = {
  files: [
    {
      path: 'componentAttrs.composable.ts',
      type: ComponentType.COMPOSABLES,
    },
    {
      path: 'pagination.composable.ts',
      type: ComponentType.COMPOSABLES,
    },
    {
      path: 'debounceSearch.composable.ts',
      type: ComponentType.COMPOSABLES,
    },
  ],
  component: ComponentName.COMPOSABLES,
}
