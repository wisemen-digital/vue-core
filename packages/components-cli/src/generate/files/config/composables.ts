import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const composables: Component = {
  files: [
    {
      type: ComponentType.COMPOSABLES,
      path: 'component-attrs/componentAttrs.composable.ts',
    },
    {
      type: ComponentType.COMPOSABLES,
      path: 'pagination',
    },
    {
      type: ComponentType.COMPOSABLES,
      path: 'debounce-search/debounceSearch.composable.ts',
    },
    {
      type: ComponentType.COMPOSABLES,
      path: 'loading/loading.composable.ts',
    },
    {
      type: ComponentType.COMPOSABLES,
      path: 'document-title/documentTitle.composable.ts',
    },
    {
      type: ComponentType.COMPOSABLES,
      path: 'api-error-toast/apiErrorToast.composable.ts',
    },
  ],
  component: ComponentName.COMPOSABLES,
}
