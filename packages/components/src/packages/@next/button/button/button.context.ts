import {
  type ComputedRef,
  inject,
  type InjectionKey,
  provide,
} from 'vue'

import type { ClassConfig } from '@/customClassVariants'
import type { ButtonProps } from '@/packages/@next/button/shared/button.props'
import type { CreateButtonStyle } from '@/packages/@next/button/shared/style/button.style'
import type { PropsToComputed } from '@/utils/props.util'

interface ButtonContext extends PropsToComputed<ButtonProps> {
  customClassConfig: ComputedRef<ClassConfig<'button'>>
  style: ComputedRef<CreateButtonStyle>
}

const buttonContextKey: InjectionKey<ButtonContext> = Symbol('buttonContext')

export function useProvideButtonContext(context: ButtonContext): void {
  provide(buttonContextKey, context)
}

export function useInjectButtonContext(): ButtonContext {
  const context = inject(buttonContextKey)

  if (context === undefined) {
    throw new Error('Button context is not provided. Make sure to wrap your components in `ButtonRoot`.')
  }

  return context
}
