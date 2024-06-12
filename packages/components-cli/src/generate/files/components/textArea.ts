import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const textarea: Component = {
  files: [
    {
      path: 'textarea',
      type: ComponentType.COMPONENTS,
    },
  ],
  internalDependencies: [
    ComponentName.FORM,
  ],
  component: ComponentName.TEXTAREA,
}
