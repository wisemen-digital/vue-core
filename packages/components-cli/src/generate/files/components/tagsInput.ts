import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const tagsInput: Component = {
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: 'tags-input',
    },
  ],
  component: ComponentName.TAGS_INPUT,
}
