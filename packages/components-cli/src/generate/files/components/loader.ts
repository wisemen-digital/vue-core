import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const loader: Component = {
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: 'loader',
    },
  ],
  component: ComponentName.LOADER,
}
