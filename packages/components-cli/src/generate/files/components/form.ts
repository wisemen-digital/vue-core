import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const form: Component = {
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: 'form-element',
    },
    {
      type: ComponentType.COMPONENTS,
      path: 'form-error',
    },
    {
      type: ComponentType.COMPONENTS,
      path: 'form-group',
    },
    {
      type: ComponentType.COMPONENTS,
      path: 'form-label',
    },
  ],
  component: ComponentName.FORM,
}
