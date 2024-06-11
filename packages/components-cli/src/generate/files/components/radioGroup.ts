import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const radioGroup: Component = {
  files: [
    {
      path: 'radio-group',
      type: ComponentType.COMPONENTS,
    },
  ],
  internalDependencies: [
    ComponentName.FORM,
  ],
  component: ComponentName.RADIO_GROUP,
}
