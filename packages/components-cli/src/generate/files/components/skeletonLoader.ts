import type { Component } from '@/generate/components.type'
import { ComponentName, ComponentType } from '@/generate/components.type'

export const skeletonLoader: Component = {
  files: [
    {
      type: ComponentType.COMPONENTS,
      path: 'skeleton-loader',
    },
  ],
  internalDependencies: [
    ComponentName.CONTAINER,
  ],
  component: ComponentName.SKELETON_LOADER,
}
