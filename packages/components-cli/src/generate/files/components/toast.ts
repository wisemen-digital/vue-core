import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const toast: Component = {
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: 'toast',
    },
    {
      type: ComponentType.TYPES,
      path: 'toast.type.ts',
    },
    {
      type: ComponentType.COMPOSABLES,
      path: 'toast/toast.composable.ts',
    },
    {
      type: ComponentType.COMPONENTS,
      path: 'sonner',
    },
  ],
  internalDependencies: [
    ComponentName.BUTTON,
  ],
  component: ComponentName.TOAST,
}
