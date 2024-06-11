import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const input: Component = {
  dependencies: [
    'maska',
    'libphonenumber-js',
  ],
  files: [
    {
      path: 'input',
      type: ComponentType.COMPONENTS,
    },
  ],
  internalDependencies: [
    ComponentName.BUTTON,
    ComponentName.FORM,
    ComponentName.TOGGLE,
  ],
  component: ComponentName.INPUT,
}
