import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const dropdownMenu: Component = {
  files: [
    {
      path: 'dropdown-menu',
      type: ComponentType.COMPONENTS,
    },
    {
      path: 'dropdownMenuItem.type.ts',
      type: ComponentType.TYPES,
    },
  ],
  internalDependencies: [
    ComponentName.KEYBOARD,
  ],
  component: ComponentName.DROPDOWN_MENU,
}
