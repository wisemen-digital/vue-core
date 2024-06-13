import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const style: Component = {
  files: [
    {
      path: './',
      type: ComponentType.STYLES,
    },
    {
      path: './tailwind.config.ts',
      type: ComponentType.CONFIG,
    },
  ],
  component: ComponentName.STYLES,
}
