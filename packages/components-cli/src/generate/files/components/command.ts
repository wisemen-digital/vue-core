import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const command: Component = {
  files: [
    {
      path: 'command',
      type: ComponentType.COMPONENTS,
    },
  ],
  component: ComponentName.COMMAND,
}
