import type { AcceptableValue } from 'reka-ui'
import type {
  ComputedRef,
  InjectionKey,
  Ref,
} from 'vue'
import {
  inject,
  provide,
} from 'vue'

interface RadioGroupItemContext {
  inputId: string
  testId: ComputedRef<string | null>
  hasError: ComputedRef<boolean>
  isChecked: Ref<boolean>
  isDisabled: ComputedRef<boolean>
  isFocused: ComputedRef<boolean>
  isHovered: ComputedRef<boolean>
  isReadonly: ComputedRef<boolean>
  isRequired: ComputedRef<boolean>
  hint: ComputedRef<string | null>
  value: ComputedRef<AcceptableValue>
  onBlur: () => void
  onFocus: () => void
  onMouseEnter: () => void
  onMouseLeave: () => void
}

const radioGroupItemContextKey: InjectionKey<RadioGroupItemContext> = Symbol('radioGroupItemContextKey')

export function provideRadioGroupItemContext(context: RadioGroupItemContext): void {
  provide(radioGroupItemContextKey, context)
}

export function injectRadioGroupItemContext(): RadioGroupItemContext {
  const context = inject(radioGroupItemContextKey)

  if (context === undefined) {
    throw new Error('RadioGroupItem context is not provided. Please use `provideRadioGroupItemContext` to provide the context.')
  }

  return context
}
