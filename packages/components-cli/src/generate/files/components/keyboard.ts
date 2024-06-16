import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const keyboard: Component = {
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: 'keyboard',
    },
    {
      type: ComponentType.TYPES,
      path: 'keyboard.type.ts',
    },
    {
      type: ComponentType.TYPES,
      path: 'keyboardShortcut.type.ts',
    },
    {
      type: ComponentType.COMPOSABLES,
      path: 'keyboardShortcut.composable.ts',
    },
  ],
  component: ComponentName.KEYBOARD,
}
