import {
  type ComputedRef,
  inject,
  type InjectionKey,
  provide,
} from 'vue'

import type { ClassConfig } from '@/customClassVariants'
import type { PopoverProps } from '@/packages/@next/popover/popover.props'
import type { CreatePopoverStyle } from '@/packages/@next/popover/style/popover.style'
import type { PropsToComputed } from '@/utils/props.util'

interface PopoverContext extends PropsToComputed<PopoverProps> {
  isOpen: ComputedRef<boolean>
  customClassConfig: ComputedRef<ClassConfig<'popover'>>
  style: ComputedRef<CreatePopoverStyle>
}

const popoverContextKey: InjectionKey<PopoverContext> = Symbol('popoverContext')

export function useProvidePopoverContext(context: PopoverContext): void {
  provide(popoverContextKey, context)
}

export function useInjectPopoverContext(): PopoverContext {
  const context = inject(popoverContextKey)

  if (context === undefined) {
    throw new Error('Popover context is not provided. Make sure to wrap your components in `PopoverRoot`.')
  }

  return context
}
