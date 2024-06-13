import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const breadcrumbs: Component = {
  files: [
    {
      path: 'breadcrumbs',
      type: ComponentType.COMPONENTS,
    },
    {
      path: 'breadcrumbItem.type.ts',
      type: ComponentType.TYPES,
    },
  ],
  internalDependencies: [
    ComponentName.BUTTON,
    ComponentName.DROPDOWN_MENU,
  ],
  component: ComponentName.BREADCRUMBS,
}
