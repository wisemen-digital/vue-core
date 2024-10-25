import type { AcceptableValue } from 'reka-ui'
import {
  type ComputedRef,
  inject,
  type InjectionKey,
  provide,
} from 'vue'

import type { RadioGroupItem } from '@/types/radioGroup.type'

export interface RadioGroupContext<TValue extends AcceptableValue> {
  hasError: ComputedRef<boolean>
  isDisabled: ComputedRef<boolean>
  isItemChecked: (item: RadioGroupItem<TValue>) => boolean
  isRequired: ComputedRef<boolean>
  isTouched: ComputedRef<boolean>
  items: ComputedRef<RadioGroupItem<TValue>[]>
  model: ComputedRef<TValue | null>
}

const radioGroupContextKey: InjectionKey<RadioGroupContext<any>> = Symbol('radioGroupContextKey')

export function provideRadioGroupContext<TValue extends AcceptableValue>(context: RadioGroupContext<TValue>): void {
  provide(radioGroupContextKey, context)
}

export function injectRadioGroupContext<TValue extends AcceptableValue>(): RadioGroupContext<TValue> {
  const context = inject(radioGroupContextKey) as RadioGroupContext<TValue>

  if (context === undefined) {
    throw new Error('RadioGroup context is not provided. Please use `provideRadioGroupContext` to provide the context.')
  }

  return context as RadioGroupContext<TValue>
}
