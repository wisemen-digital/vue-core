import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const checkbox: Component = {
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: 'checkbox',
    },
  ],
  internalDependencies: [
    ComponentName.FORM,
  ],
  component: ComponentName.CHECKBOX,
}
