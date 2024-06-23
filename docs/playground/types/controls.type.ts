import type {
  AcceptableValue,
  Icon,
} from '@wisemen/vue-core'

export type Controls<TField extends string> = Record<TField, Control>

export type Control = DateControl
  | IconControl
  | SelectControl
  | SwitchControl
  | TextControl
export interface BaseControl {
  cols?: number
  label: string
  type: 'date' | 'icon' | 'select' | 'switch' | 'text'
}

export interface SelectControl extends BaseControl {
  default: AcceptableValue
  items: AcceptableValue[]
  type: 'select'
}

export interface TextControl extends BaseControl {
  default: string
  type: 'text'
}

export interface DateControl extends BaseControl {
  default: Date | null
  type: 'date'
}

export interface SwitchControl extends BaseControl {
  default: boolean
  type: 'switch'
}

export interface IconControl extends BaseControl {
  default: Icon | null
  type: 'icon'
}
