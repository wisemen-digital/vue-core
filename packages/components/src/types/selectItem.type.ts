import type { Icon } from '@/icons/icons'

export type AcceptableValue = Record<string, any>
  | boolean
  | number
  | string

export interface SelectItemDivider {
  type: 'divider'
}

export interface SelectItemGroup<TValue extends AcceptableValue> {
  testId?: string
  icon?: Icon
  items: SelectItem<TValue>[]
  label: string
  size?: 'default' | 'lg' | 'sm'
  type: 'group'
}

export interface SelectItemOption<TValue extends AcceptableValue> {
  testId?: string
  isDisabled?: boolean
  type: 'option'
  value: TValue
}

export type SelectItem<TValue extends AcceptableValue> = SelectItemDivider
  | SelectItemGroup<TValue>
  | SelectItemOption<TValue>
