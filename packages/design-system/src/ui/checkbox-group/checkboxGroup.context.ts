import type { AcceptableValue } from 'reka-ui'
import type {
  ComputedRef,
  InjectionKey,
} from 'vue'
import {
  inject,
  provide,
} from 'vue'

interface CheckboxGroupContext {
  isIndeterminate: ComputedRef<boolean>
  modelValue: ComputedRef<AcceptableValue[]>
  registerCheckbox: (id: string, value: AcceptableValue) => void
  toggleAll: () => void
  unRegisterCheckbox: (id: string) => void
}

export const checkboxGroupContextKey: InjectionKey<CheckboxGroupContext> = Symbol('CheckboxGroupContextKey')

export function useProvideCheckboxGroupContext(context: CheckboxGroupContext): void {
  provide(checkboxGroupContextKey, context)
}

export function useInjectCheckboxGroupContext(): CheckboxGroupContext {
  const context = inject(checkboxGroupContextKey, null)

  if (context === null) {
    throw new Error('CheckboxGroupContext not provided')
  }

  return context
}
