import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const toast: Component = {
  files: [
    {
      path: 'toast',
      type: ComponentType.COMPONENTS,
    },
  ],
  component: ComponentName.TOAST,
}
