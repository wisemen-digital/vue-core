import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const pagination: Component = {
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: 'pagination',
    },
  ],
  component: ComponentName.PAGINATION,
}
