import {
  type Component,
  ComponentName,
  ComponentType,
} from '@/generate/components.type'

export const router: Component = {
  files: [
    {
      type: ComponentType.COMPOSABLES,
      path: 'router',
    },
  ],
  component: ComponentName.ROUTER,
}
