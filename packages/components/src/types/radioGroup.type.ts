import type { AcceptableValue } from './acceptableValue.type'

export type SelectValue = AcceptableValue

export interface RadioGroupOption<TValue extends SelectValue> {
  testId?: string
  isDisabled?: boolean
  hint?: string
  label: string
  type: 'option'
  value: TValue
}

export type RadioGroupItem<TValue extends SelectValue> = RadioGroupOption<TValue>
