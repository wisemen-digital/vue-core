import type { AcceptableValue } from './acceptableValue.type'

export interface RadioGroupOption<TValue extends AcceptableValue> {
  testId?: string
  isDisabled?: boolean
  hint?: string
  label: string
  type: 'option'
  value: TValue
}

export type RadioGroupItem<TValue extends AcceptableValue> = RadioGroupOption<TValue>
