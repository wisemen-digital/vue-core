import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const composables: Component = {
  files: [
    {
      type: ComponentType.COMPOSABLES,
      path: 'componentAttrs.composable.ts',
    },
    {
      type: ComponentType.COMPOSABLES,
      path: 'pagination',
    },
    {
      type: ComponentType.COMPOSABLES,
      path: 'debounceSearch.composable.ts',
    },
  ],
  component: ComponentName.COMPOSABLES,
}
