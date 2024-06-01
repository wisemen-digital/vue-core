import type {
  Ref,
  VNode,
} from 'vue'
import type { RouteLocationNamedRaw } from 'vue-router'

import type { Icon } from '@/icons/icons'
import type { KeyboardKey } from '@/types/keyboard.type'
import type { AcceptableValue } from '@/types/selectItem.type'

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

interface DropdownMenuBaseOption {
  icon?: Icon
  keyboardShortcutKeys?: KeyboardKey[]
  label: string
  render?: () => VNode
  type: 'option'
}

interface DropdownMenuSelectOption extends DropdownMenuBaseOption {
  onSelect: () => void
}

interface DropdownMenuRouteOption extends DropdownMenuBaseOption {
  target?: string
  to?: RouteLocationNamedRaw | null
}

export type DropdownMenuOption = DropdownMenuRouteOption | DropdownMenuSelectOption

export interface DropdownMenuCheckbox {
  isSelected: Ref<boolean>
  keyboardShortcutKeys?: KeyboardKey[]
  label: string
  render?: () => VNode
  type: 'checkbox'
  onSelect: () => void
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
