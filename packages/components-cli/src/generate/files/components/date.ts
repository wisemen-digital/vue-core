import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const date: Component = {
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: 'date',
    },
    {
      type: ComponentType.COMPONENTS,
      path: 'date-range',
    },
    {
      type: ComponentType.TYPES,
      path: 'date.type.ts',
    },
    {
      type: ComponentType.TYPES,
      path: 'datePickerConfig.type.ts',
    },
  ],
  component: ComponentName.DATE,
}
