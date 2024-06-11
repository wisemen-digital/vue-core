import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const input: Component = {
  files: [
    {
      path: 'input',
      type: ComponentType.COMPONENTS,
    },
  ],
  component: ComponentName.INPUT,
}
