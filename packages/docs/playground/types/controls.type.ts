import type { Icon } from '@components/index'
import type { AcceptableValue } from '@components/types/selectItem.type'

export type Controls<TField extends string> = Record<TField, Control>

export type Control = IconControl
  | SelectControl
  | SwitchControl
  | TextControl
export interface BaseControl {
  cols?: number
  label: string
  type: 'icon' | 'select' | 'switch' | 'text'
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

export interface SwitchControl extends BaseControl {
  default: boolean
  type: 'switch'
}

export interface IconControl extends BaseControl {
  default: Icon | null
  type: 'icon'
}

