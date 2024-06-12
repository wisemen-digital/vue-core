import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const loader: Component = {
  files: [
    {
      path: 'loader',
      type: ComponentType.COMPONENTS,
    },
  ],
  component: ComponentName.LOADER,
}
