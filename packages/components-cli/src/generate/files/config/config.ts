import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const config: Component = {
  files: [
    {
      type: ComponentType.CONFIG,
      path: './',
    },
  ],
  component: ComponentName.CONFIG_GLOBAL,
}
