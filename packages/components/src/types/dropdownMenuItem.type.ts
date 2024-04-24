import type {
  Ref,
  VNode,
} from 'vue'

import type { Icon } from '../icons/icons'
import type { KeyboardKey } from './keyboard.type'
import type { AcceptableValue } from './selectItem.type'

export interface DropdownMenuDivider {
  type: 'divider'
}

export interface DropdownMenuLabel {
  label: string
  type: 'label'
}

export interface DropdownMenuSubMenu {
  icon?: Icon
  items: DropdownMenuItem[]
  label: string
  render?: () => VNode
  type: 'subMenu'
}

export interface DropdownMenuGroup {
  items: DropdownMenuItem[]
  type: 'group'
}

export interface DropdownMenuOption {
  icon?: Icon
  keyboardShortcutKeys?: KeyboardKey[]
  label: string
  onSelect: () => void
  render?: () => VNode
  type: 'option'
}

export interface DropdownMenuCheckbox {
  isSelected: Ref<boolean>
  keyboardShortcutKeys?: KeyboardKey[]
  label: string
  onSelect: () => void
  render?: () => VNode
  type: 'checkbox'
}

export interface DropdownMenuRadioGroup {
  items: DropdownMenuRadio[]
  modelValue: Ref<AcceptableValue | null>
  type: 'radioGroup'
  updateModelValue: (value: AcceptableValue) => void
}

export interface DropdownMenuRadio {
  keyboardShortcutKeys?: KeyboardKey[]
  label: string
  render?: () => VNode
  type: 'radio'
  value: AcceptableValue
}

export type DropdownMenuItem = DropdownMenuCheckbox
  | DropdownMenuDivider
  | DropdownMenuGroup
  | DropdownMenuLabel
  | DropdownMenuOption
  | DropdownMenuRadioGroup
  | DropdownMenuSubMenu
