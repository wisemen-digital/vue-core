import type { DropdownMenuItem } from '@/types/dropdownMenu.type'
import type { PopoverProps } from '@/types/popover.type'

export interface AppDropdownMenuProps extends PopoverProps {
  items: DropdownMenuItem[]
}

export const appDropdownMenuPropsDefaultValues = {
  isArrowHidden: false,
  align: 'center',
  collisionPaddingInPx: 10,
  containerElement: null,
  offsetInPx: 4,
  popoverWidth: 'available-width',
  side: 'bottom',
} satisfies Partial<AppDropdownMenuProps>
