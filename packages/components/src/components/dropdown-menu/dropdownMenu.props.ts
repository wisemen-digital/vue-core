import type { PopperProps } from '@/types'
import type { DropdownMenuItem } from '@/types/dropdownMenu.type'

export interface DropdownMenuProps extends PopperProps {
  enableGlobalKeyboardShortcuts?: boolean
  items: DropdownMenuItem[]
}
