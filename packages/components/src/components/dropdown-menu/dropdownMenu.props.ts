import type { DropdownMenuItem } from '@/types/dropdownMenu.type'
import type { PopoverProps } from '@/types/popover.type'

export interface AppDropdownMenuProps extends PopoverProps {
  items: DropdownMenuItem[]
}
