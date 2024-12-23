import {
  type ComputedRef,
  inject,
  type InjectionKey,
  provide,
} from 'vue'

interface RadioGroupContext {
  inputId: string
  testId: ComputedRef<string | null>

}

const radioGroupContextKey: InjectionKey<RadioGroupContext> = Symbol('radioGroupContextKey')

export function provideRadioGroupContext(context: RadioGroupContext): void {
  provide(radioGroupContextKey, context)
}

export function injectRadioGroupContext(): RadioGroupContext {
  const context = inject(radioGroupContextKey)

  if (context === undefined) {
    throw new Error('RadioGroup context is not provided. Please use `provideRadioGroupContext` to provide the context.')
  }

  return context
}
