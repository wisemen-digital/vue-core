import type { Icon } from '@/icons/icons.ts'

import type { AcceptableValue } from './acceptableValue.type'

export type SelectValue = AcceptableValue | AcceptableValue[]

export interface SelectSeparator {
  type: 'separator'
}

export interface SelectGroup<TValue extends SelectValue> {
  icon?: Icon
  items: SelectItem<TValue>[]
  label: string
  type: 'group'
}

export interface SelectOption<TValue extends SelectValue> {
  testId?: string
  isDisabled?: boolean
  icon?: Icon
  type: 'option'
  value: TValue
}

export type SelectItem<TValue extends SelectValue> = SelectGroup<TValue>
  | SelectOption<TValue>
  | SelectSeparator
