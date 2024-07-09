import type {
  Ref,
  VNode,
} from 'vue'
import type { RouteLocationNamedRaw } from 'vue-router'

import type { DropdownMenuStyleProps } from '@/components/dropdown-menu/dropdownMenu.style'
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

export interface DropdownMenuRenderOption {
  render: () => VNode
  type: 'renderOption'
}

interface DropdownMenuBaseOption {
  isDisabled?: boolean
  isHidden?: boolean
  icon?: Icon
  keyboardShortcutKeys?: KeyboardKey[]
  label: string
  variant?: DropdownMenuStyleProps['variant']
}

export interface DropdownMenuSelectOption extends DropdownMenuBaseOption {
  type: 'selectOption'
  onSelect: () => void
}

export interface DropdownMenuRouteOption extends DropdownMenuBaseOption {
  target?: string
  to: RouteLocationNamedRaw
  type: 'routeOption'
}

export interface DropdownMenuCheckboxOption extends DropdownMenuBaseOption {
  isSelected: Ref<boolean>
  type: 'checkboxOption'
  onSelect: () => void
}

export interface DropdownMenuRadioGroup {
  items: DropdownMenuRadioOption[]
  modelValue: Ref<AcceptableValue | null>
  type: 'radioGroup'
  updateModelValue: (value: AcceptableValue) => void
}

export interface DropdownMenuRadioOption extends DropdownMenuBaseOption {
  type: 'radioOption'
  value: AcceptableValue
}

export type DropdownMenuItem =
  | DropdownMenuCheckboxOption
  | DropdownMenuDivider
  | DropdownMenuGroup
  | DropdownMenuLabel
  | DropdownMenuRadioGroup
  | DropdownMenuRenderOption
  | DropdownMenuRouteOption
  | DropdownMenuSelectOption
  | DropdownMenuSubMenu
