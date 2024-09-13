import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const editable: Component = {
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: 'editable',
    },
  ],
  component: ComponentName.EDITABLE,
}
