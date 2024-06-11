import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const dropdownMenu: Component = {
  files: [
    {
      path: 'dropdown-menu',
      type: ComponentType.COMPONENTS,
    },
  ],
  component: ComponentName.DROPDOWN_MENU,
}
