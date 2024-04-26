import type { AcceptableValue } from 'src/types/selectItem.type'

export type Controls<TField extends string> = Record<TField, Control>

export type Control = SelectControl | TextControl
interface BaseControl {
  label: string
  type: 'select' | 'text'
}

export interface SelectControl extends BaseControl {
  default: AcceptableValue
  options: AcceptableValue[]
  type: 'select'
}

export interface TextControl extends BaseControl {
  default: string
  type: 'text'
}

export function createControls<TField extends string>(controls: Controls<TField>): Controls<TField> {
  return controls
}
