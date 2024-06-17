import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const dropdownMenu: Component = {
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: 'dropdown-menu',
    },
    {
      type: ComponentType.TYPES,
      path: 'dropdownMenuItem.type.ts',
    },
  ],
  internalDependencies: [
    ComponentName.KEYBOARD,
  ],
  component: ComponentName.DROPDOWN_MENU,
}
