import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const radioGroup: Component = {
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: 'radio-group',
    },
  ],
  internalDependencies: [
    ComponentName.FORM,
  ],
  component: ComponentName.RADIO_GROUP,
}
