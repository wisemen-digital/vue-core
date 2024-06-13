import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const command: Component = {
  files: [
    {
      path: 'command',
      type: ComponentType.COMPONENTS,
    },
    {
      path: 'commandItem.type.ts',
      type: ComponentType.TYPES,
    },
  ],
  component: ComponentName.COMMAND,
}
