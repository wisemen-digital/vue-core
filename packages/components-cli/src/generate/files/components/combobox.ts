import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const combobox: Component = {
  files: [
    {
      path: 'combobox',
      type: ComponentType.COMPONENTS,
    },
    {
      path: 'comboboxItem.type.ts',
      type: ComponentType.TYPES,
    },
    {
      path: 'comboboxProps.type.ts',
      type: ComponentType.TYPES,
    },
    {
      path: 'combobox.type.ts',
      type: ComponentType.TYPES,
    },
  ],
  internalDependencies: [
    ComponentName.FORM,
    ComponentName.TAGS_INPUT,
  ],
  component: ComponentName.COMBOBOX,
}
