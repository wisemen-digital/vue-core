import type { Component } from '../../components.type'
import { ComponentName, ComponentType } from '../../components.type'

export const appButton: Component = {
  component: ComponentName.APP_BUTTON,
  files: [
    {
      path: 'button/AppButton.vue',
      type: ComponentType.COMPONENTS,
    },
    {
      path: 'button/AppIconButton.vue',
      type: ComponentType.COMPONENTS,
    },
    {
      path: 'button/AppRouterLinkButton.vue',
      type: ComponentType.COMPONENTS,
    },
    {
      path: 'button/AppUnstyledButton.vue',
      type: ComponentType.COMPONENTS,
    },
    {
      path: 'button/button.style.ts',
      type: ComponentType.COMPONENTS,
    },
  ],
}
