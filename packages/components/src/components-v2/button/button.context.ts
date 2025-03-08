import {
  type ComputedRef,
  inject,
  type InjectionKey,
  provide,
} from 'vue'

import type { ButtonProps } from '@/components-v2/button/button.props'
import type {
  CreateButtonStyle,
} from '@/components-v2/button/style/button.style'
import type { ClassConfig } from '@/customClassVariants'
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
