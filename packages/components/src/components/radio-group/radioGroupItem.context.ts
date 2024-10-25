import {
  type ComputedRef,
  inject,
  type InjectionKey,
  provide,
} from 'vue'

export interface RadioGroupItemContext {
  isChecked: ComputedRef<boolean>
  isDisabled: ComputedRef<boolean>
  isFocused: ComputedRef<boolean>
  isHovered: ComputedRef<boolean>
}

const radioGroupItemContextKey: InjectionKey<RadioGroupItemContext> = Symbol('radioGroupItemContextKey')

export function provideRadioGroupItemContext(
  context: RadioGroupItemContext,
): void {
  provide(radioGroupItemContextKey, context)
}

export function injectRadioGroupItemContext(): RadioGroupItemContext {
  const context = inject(radioGroupItemContextKey) as RadioGroupItemContext

  if (context === undefined) {
    throw new Error('RadioGroupItem context is not provided. Please use `provideRadioGroupItemContext` to provide the context.')
  }

  return context as RadioGroupItemContext
}
