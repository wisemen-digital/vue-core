export type AcceptableValue = Record<string, any>
  | boolean
  | number
  | string

export interface SelectItemDivider {
  type: 'divider'
}

export interface SelectItemGroup<TValue extends AcceptableValue> {
  items: SelectItem<TValue>[]
  label: string
  type: 'group'
}

export interface SelectItemOption<TValue extends AcceptableValue> {
  isDisabled?: boolean
  type: 'option'
  value: TValue
}

export type SelectItem<TValue extends AcceptableValue> = SelectItemDivider
  | SelectItemGroup<TValue>
  | SelectItemOption<TValue>
