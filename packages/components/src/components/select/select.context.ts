import {
  type ComputedRef,
  inject,
  type InjectionKey,
  provide,
  type Ref,
} from 'vue'

import type { Icon } from '@/icons/icons'
import type { SelectItem, SelectValue } from '@/types/select.type'

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
  hint: ComputedRef<null | string>
  iconLeft: ComputedRef<Icon | null>
  iconRight: ComputedRef<Icon>
  items: ComputedRef<SelectItem<SelectValue>[]>
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
