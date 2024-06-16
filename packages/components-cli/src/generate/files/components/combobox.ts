import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const combobox: Component = {
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: 'combobox',
    },
    {
      type: ComponentType.TYPES,
      path: 'comboboxItem.type.ts',
    },
    {
      type: ComponentType.TYPES,
      path: 'comboboxProps.type.ts',
    },
    {
      type: ComponentType.TYPES,
      path: 'combobox.type.ts',
    },
  ],
  internalDependencies: [
    ComponentName.FORM,
    ComponentName.TAGS_INPUT,
  ],
  component: ComponentName.COMBOBOX,
}
