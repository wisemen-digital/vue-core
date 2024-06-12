import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const lib: Component = {
  dependencies: [
    'formango',
    'cva@beta',
    '@wisemen/vue-core',
    'tailwind-merge',
    'zod',
  ],
  files: [
    {
      path: './',
      type: ComponentType.LIBS,
    },
  ],
  component: ComponentName.LIB,
}
