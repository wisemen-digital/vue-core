import {
  inject,
  type InjectionKey,
  provide,
} from 'vue'

interface RadioGroupContext {}

const radioGroupContextKey: InjectionKey<RadioGroupContext> = Symbol('radioGroupContextKey')

export function provideRadioGroupContext(context: RadioGroupContext): void {
  provide(radioGroupContextKey, context)
}

export function injectRadioGroupContext(): RadioGroupContext {
  const context = inject(radioGroupContextKey)

  if (context === undefined) {
    throw new Error('RadioGroup context is not provided. Make sure to wrap your app with `<ConfigProvider />`.')
  }

  return context
}
