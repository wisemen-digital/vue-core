import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const tabs: Component = {
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: 'tabs',
    },
    {
      type: ComponentType.TYPES,
      path: 'tabItem.type.ts',
    },
  ],
  internalDependencies: [
    ComponentName.BUTTON,
    ComponentName.FORM,
  ],
  component: ComponentName.TABS,
}
