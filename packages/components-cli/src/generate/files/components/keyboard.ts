import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const keyboard: Component = {
  files: [
    {
      path: 'keyboard',
      type: ComponentType.COMPONENTS,
    },
    {
      path: 'keyboard.type.ts',
      type: ComponentType.TYPES,
    },
    {
      path: 'keyboardShortcut.type.ts',
      type: ComponentType.TYPES,
    },
    {
      path: 'keyboardShortcut.composable.ts',
      type: ComponentType.COMPOSABLES,
    },
  ],
  component: ComponentName.KEYBOARD,
}
