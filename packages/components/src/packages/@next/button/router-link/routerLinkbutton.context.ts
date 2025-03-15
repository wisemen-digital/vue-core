import {
  type ComputedRef,
  inject,
  type InjectionKey,
  provide,
} from 'vue'

import type { ClassConfig } from '@/customClassVariants'
import type { RouterLinkButtonProps } from '@/packages/@next/button/router-link/routerLinkbutton.props'
import type { CreateButtonStyle } from '@/packages/@next/button/shared/style/button.style'
import type { PropsToComputed } from '@/utils/props.util'

interface RouterLinkButtonContext extends PropsToComputed<RouterLinkButtonProps> {
  customClassConfig: ComputedRef<ClassConfig<'button'>>
  style: ComputedRef<CreateButtonStyle>
}

const RouterLinkbuttonContextKey: InjectionKey<RouterLinkButtonContext> = Symbol('RouterLinkbuttonContext')

export function useProvideRouterLinkButtonContext(context: RouterLinkButtonContext): void {
  provide(RouterLinkbuttonContextKey, context)
}

export function useInjectRouterLinkButtonContext(): RouterLinkButtonContext {
  const context = inject(RouterLinkbuttonContextKey)

  if (context === undefined) {
    throw new Error('RouterLinkButton context is not provided. Make sure to wrap your components in `RouterLinkButtonRoot`.')
  }

  return context
}
