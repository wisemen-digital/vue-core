import type { Icon } from '@/icons/icons'
import type { KeyboardKey } from '@/types/keyboard.type'
import type { Routes } from '@/types/routes.type'

interface DropdownMenuBaseOption {
  testId?: string
  isDestructive?: boolean
  isDisabled?: boolean
  icon?: Icon
  keyboardKeys?: KeyboardKey[]
  label: string
}

export interface DropdownMenuOption extends DropdownMenuBaseOption {
  type: 'option'
  onSelect: () => void
}

export interface DropdownMenuRoute extends DropdownMenuBaseOption {
  // @ts-expect-error no matching signature
  to: Routes[number]
  type: 'route'
}

export interface DropdownMenuSubMenu {
  testId?: string
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
  | DropdownMenuRoute
  | DropdownMenuSeparator
  | DropdownMenuSubMenu
