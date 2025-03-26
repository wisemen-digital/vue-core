import {
  type ComputedRef,
  inject,
  type InjectionKey,
  provide,
} from 'vue'

interface CheckboxContext {
  hasError: ComputedRef<boolean>
  isChecked: ComputedRef<boolean>
  isDisabled: ComputedRef<boolean>
  isFocused: ComputedRef<boolean>
  isHovered: ComputedRef<boolean>
  isIndeterminate: ComputedRef<boolean>
}

const checkboxContextKey: InjectionKey<CheckboxContext> = Symbol('checkboxContextKey')

export function provideCheckboxContext(context: CheckboxContext): void {
  provide(checkboxContextKey, context)
}

export function injectCheckboxContext(): CheckboxContext {
  const context = inject(checkboxContextKey)

  if (context === undefined) {
    throw new Error('Checkbox context is not provided. Please use `provideCheckboxContext` to provide the context.')
  }

  return context
}
