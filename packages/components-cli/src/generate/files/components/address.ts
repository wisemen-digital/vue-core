import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const address: Component = {
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: 'address',
    },
    {
      type: ComponentType.COMPOSABLES,
      path: 'address-autocomplete',
    },
    {
      type: ComponentType.TYPES,
      path: 'addressForm.model.ts',
    },
    {
      type: ComponentType.UTILS,
      path: 'address.util.ts',
    },
  ],
  component: ComponentName.ADDRESS,
}
