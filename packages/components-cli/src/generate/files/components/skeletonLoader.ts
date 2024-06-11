import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const skeletonLoader: Component = {
  files: [
    {
      path: 'skeleton-loader',
      type: ComponentType.COMPONENTS,
    },
  ],
  component: ComponentName.SKELETON_LOADER,
}
