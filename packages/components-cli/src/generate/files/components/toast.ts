import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const toast: Component = {
  files: [
    {
      path: 'toast',
      type: ComponentType.COMPONENTS,
    },
    {
      path: 'toast.type.ts',
      type: ComponentType.TYPES,
    },
    {
      path: 'toast.composable.ts',
      type: ComponentType.COMPOSABLES,
    },
    {
      path: 'sonner',
      type: ComponentType.COMPONENTS,
    },
  ],
  internalDependencies: [
    ComponentName.BUTTON,
  ],
  component: ComponentName.TOAST,
}
