import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const sidebar: Component = {
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: 'sidebar-nav',
    },
    {
      type: ComponentType.TYPES,
      path: 'navigationItem.type.ts',
    },
  ],
  component: ComponentName.SIDEBAR_NAV,
}
