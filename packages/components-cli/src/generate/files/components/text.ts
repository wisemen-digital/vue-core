import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const text: Component = {
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: 'text',
    },
  ],
  component: ComponentName.TEXT,
}
