import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const progressBar: Component = {
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: 'progress-bar',
    },
  ],
  component: ComponentName.PROGRESS_BAR,
}
