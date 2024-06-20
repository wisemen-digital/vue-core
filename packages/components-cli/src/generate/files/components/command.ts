import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const command: Component = {
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: 'command',
    },
    {
      type: ComponentType.TYPES,
      path: 'commandItem.type.ts',
    },
  ],
  component: ComponentName.COMMAND,
}
