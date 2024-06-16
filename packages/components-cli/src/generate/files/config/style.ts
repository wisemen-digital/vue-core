import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const style: Component = {
  files: [
    {
      type: ComponentType.STYLES,
      path: './',
    },
    {
      type: ComponentType.CONFIG,
      path: './tailwind.config.ts',
    },
  ],
  component: ComponentName.STYLES,
}
