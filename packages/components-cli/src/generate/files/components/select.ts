import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const select: Component = {
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: 'select',
    },
  ],
  internalDependencies: [
    ComponentName.COMBOBOX,
    ComponentName.FORM,
  ],
  component: ComponentName.SELECT,
}
