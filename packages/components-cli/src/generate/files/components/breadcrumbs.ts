import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const breadcrumbs: Component = {
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: 'breadcrumbs',
    },
    {
      type: ComponentType.TYPES,
      path: 'breadcrumbItem.type.ts',
    },
  ],
  internalDependencies: [
    ComponentName.BUTTON,
    ComponentName.DROPDOWN_MENU,
  ],
  component: ComponentName.BREADCRUMBS,
}
