export type SelectValue = Record<string, any>
  | boolean
  | number
  | string

export interface SelectSeparator {
  type: 'separator'
}

export interface SelectGroup<TValue extends SelectValue> {
  items: SelectItem<TValue>[]
  label: string
  type: 'group'
}

export interface SelectOption<TValue extends SelectValue> {
  isDisabled?: boolean
  type: 'option'
  value: TValue
}

export type SelectItem<TValue extends SelectValue> = SelectGroup<TValue>
  | SelectOption<TValue>
  | SelectSeparator
