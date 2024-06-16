import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const textarea: Component = {
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: 'textarea',
    },
  ],
  internalDependencies: [
    ComponentName.FORM,
  ],
  component: ComponentName.TEXTAREA,
}
