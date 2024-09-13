import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const avatar: Component = {
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: 'avatar',
    },
  ],
  component: ComponentName.AVATAR,
}
