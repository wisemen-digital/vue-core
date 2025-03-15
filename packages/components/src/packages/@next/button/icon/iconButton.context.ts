import {
  type ComputedRef,
  inject,
  type InjectionKey,
  provide,
} from 'vue'

import type { ClassConfig } from '@/customClassVariants'
import type { IconButtonProps } from '@/packages/@next/button/icon/iconButton.props'
import type { CreateIconButtonStyle } from '@/packages/@next/button/icon/style/iconButton.style'
import type { PropsToComputed } from '@/utils/props.util'

interface IconButtonContext extends PropsToComputed<IconButtonProps> {
  customClassConfig: ComputedRef<ClassConfig<'iconButton'>>
  style: ComputedRef<CreateIconButtonStyle>
}

const IconbuttonContextKey: InjectionKey<IconButtonContext> = Symbol('IconbuttonContext')

export function useProvideIconButtonContext(context: IconButtonContext): void {
  provide(IconbuttonContextKey, context)
}

export function useInjectIconButtonContext(): IconButtonContext {
  const context = inject(IconbuttonContextKey)

  if (context === undefined) {
    throw new Error('IconButton context is not provided. Make sure to wrap your components in `IconButtonRoot`.')
  }

  return context
}
