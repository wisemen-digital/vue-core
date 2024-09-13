import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const accordion: Component = {
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: 'accordion',
    },
    {
      type: ComponentType.TYPES,
      path: 'accordionItem.type.ts',
    },
  ],
  component: ComponentName.ACCORDION,
}
