import {
  type ComputedRef,
  inject,
  type InjectionKey,
  provide,
} from 'vue'

import type { Icon } from '@/icons/icons'

interface SelectContext {
  // TODO
  id: ComputedRef<string>
  testId: ComputedRef<null | string>
  hasError: ComputedRef<boolean>
  isDisabled: ComputedRef<boolean>
  isEmpty: ComputedRef<boolean>
  isFocused: ComputedRef<boolean>
  isHovered: ComputedRef<boolean>
  isLoading: ComputedRef<boolean>
  iconLeft: ComputedRef<Icon | null>
  placeholder: ComputedRef<null | string>
  value: ComputedRef<any>
  onBlur: () => void
  onFocus: () => void
  onMouseEnter: () => void
  onMouseLeave: () => void
  onTriggerKeyDown: (event: KeyboardEvent) => void
}

const selectContextKey: InjectionKey<SelectContext> = Symbol('selectContextKey')

export function provideSelectContext(context: SelectContext): void {
  provide(selectContextKey, context)
}

export function injectSelectContext(): SelectContext {
  const context = inject(selectContextKey)

  if (context === undefined) {
    throw new Error('Select context is not provided. Please use `provideSelectContext` to provide the context.')
  }

  return context
}
