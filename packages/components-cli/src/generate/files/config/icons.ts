import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const icons: Component = {
  files: [
    {
      type: ComponentType.ICONS,
      path: './',
    },
  ],
  component: ComponentName.ICON,
}
