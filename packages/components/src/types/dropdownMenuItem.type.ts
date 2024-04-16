import type { Icon } from '../icons/icons'
import type { KeyboardCommand } from './keyboard.type'

export interface DropdownMenuDivider {
  type: 'divider'
}

export interface DropdownMenuLabel {
  label: string
  type: 'label'
}

export interface DropdownMenuSubMenu {
  icon?: Icon
  id?: string
  items: DropdownMenuItem[]
  label: string
  type: 'subMenu'
}

export interface DropdownMenuGroup {
  items: DropdownMenuItem[]
  type: 'group'
}

export interface DropdownMenuOption {
  command?: Omit<KeyboardCommand, 'onPressed'>
  icon?: Icon
  id?: string
  label: string
  onSelect: () => void
  type: 'option'
}

export type DropdownMenuItem = DropdownMenuDivider
  | DropdownMenuGroup
  | DropdownMenuLabel
  | DropdownMenuOption
  | DropdownMenuSubMenu
