import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const text: Component = {
  files: [
    {
      path: 'text',
      type: ComponentType.COMPONENTS,
    },
  ],
  component: ComponentName.TEXT,
}
