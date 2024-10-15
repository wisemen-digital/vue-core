import type { Icon } from '@/icons/icons'

export interface DropdownMenuOption {
  isDestructive?: boolean
  isDisabled?: boolean
  icon?: Icon
  label: string
  type: 'option'
  onSelect: () => void
}

export interface DropdownMenuSubMenu {
  icon?: Icon
  items: DropdownMenuItem[]
  label: string
  type: 'subMenu'
}

export interface DropdownMenuGroup {
  items: DropdownMenuItem[]
  label?: string
  type: 'group'
}

export interface DropdownMenuSeparator {
  type: 'separator'
}

export type DropdownMenuItem = DropdownMenuGroup
  | DropdownMenuOption
  | DropdownMenuSeparator
  | DropdownMenuSubMenu
