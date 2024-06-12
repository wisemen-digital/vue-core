import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const tabs: Component = {
  files: [
    {
      path: 'tabs',
      type: ComponentType.COMPONENTS,
    },
    {
      path: 'tabItem.type.ts',
      type: ComponentType.TYPES,
    },
  ],
  internalDependencies: [
    ComponentName.BUTTON,
    ComponentName.FORM,
  ],
  component: ComponentName.TABS,
}
