import {
  type ComputedRef,
  inject,
  type InjectionKey,
  provide,
  type Ref,
} from 'vue'

import type { SelectDisplayFn } from '@/components/select/select.props'
import type { Icon } from '@/icons/icons'
import type { SelectValue } from '@/types/select.type'

interface SelectContext {
  inputId: ComputedRef<string>
  testId: ComputedRef<null | string>
  hasError: ComputedRef<boolean>
  isDisabled: ComputedRef<boolean>
  isFocused: ComputedRef<boolean>
  isHovered: ComputedRef<boolean>
  isLoading: ComputedRef<boolean>
  isMultiple: ComputedRef<boolean>
  isOpen: ComputedRef<boolean>
  displayFn: SelectDisplayFn<SelectValue>
  iconLeft: ComputedRef<Icon | null>
  iconRight: ComputedRef<Icon>
  modelValue: Ref<SelectValue>
  placeholder: ComputedRef<null | string>
  searchPlaceholder: ComputedRef<string>
  searchTerm: Ref<string>
  onTriggerBlur: () => void
  onTriggerFocus: () => void
  onTriggerKeyDown: (event: KeyboardEvent) => void
  onTriggerMouseEnter: () => void
  onTriggerMouseLeave: () => void
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
