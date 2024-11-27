import type { PopperProps } from '@/types'
import type { DropdownMenuItem } from '@/types/dropdownMenu.type'
import type { Stylable } from '@/types/stylable.type'

export interface DropdownMenuProps extends PopperProps, Stylable<'dropdownMenu'> {
  enableGlobalKeyboardShortcuts?: boolean
  items: DropdownMenuItem[]
}
