import {
  type ComputedRef,
  inject,
  type InjectionKey,
  provide,
  type Ref,
} from 'vue'

import type {
  SelectDisplayFn,
  SelectProps,
} from '@/components/select/select.props'
import type { DarkModeValue } from '@/composables/dark-mode/darkMode.composable'
import type { Icon } from '@/icons/icons'
import type { SelectItem, SelectValue } from '@/types'
import type {
  PopperAlign,
  PopperSide,
  PopperWidth,
} from '@/types/popper'

interface SelectContext {
  inputId: string
  testId: ComputedRef<string | null>
  hasError: ComputedRef<boolean>
  hasFilter: ComputedRef<boolean>
  isArrowVisible: ComputedRef<boolean>
  isDisabled: ComputedRef<boolean>
  isEmpty: ComputedRef<boolean>
  isFocused: ComputedRef<boolean>
  isHovered: ComputedRef<boolean>
  isLoading: ComputedRef<boolean>
  isMultiple: ComputedRef<boolean>
  isOpen: Ref<boolean>
  darkModeValue: ComputedRef<DarkModeValue>
  displayFn: SelectDisplayFn<SelectValue>
  filteredItems: ComputedRef<SelectItem<SelectValue>[]>
  hint: ComputedRef<string | null>
  iconLeft: ComputedRef<Icon | null>
  iconRight: ComputedRef<Icon | null>
  items: ComputedRef<SelectItem<SelectValue>[]>
  modelValue: Ref<SelectValue>
  placeholder: ComputedRef<string | null>
  popoverAlign: ComputedRef<PopperAlign>
  popoverCollisionPaddingInPx: ComputedRef<number>
  popoverContainerElement: ComputedRef<HTMLElement | null>
  popoverOffsetInPx: ComputedRef<number>
  popoverSide: ComputedRef<PopperSide>
  popoverWidth: ComputedRef<PopperWidth | null>
  searchPlaceholder: ComputedRef<string | null>
  searchTerm: Ref<string>
  shouldremainOpenOnSelect: ComputedRef<boolean>
  styleConfig: ComputedRef<SelectProps<SelectValue>['styleConfig']>
  theme: ComputedRef<string>
  virtualList: ComputedRef<NonNullable<SelectProps<SelectValue>['virtualList']> | null>
  onFilterInput: () => void
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
