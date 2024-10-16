import type { PopoverProps } from '@/types/popover.type'
import type { StyleConfig } from '@/types/style.type'

export interface AppPopoverProps extends PopoverProps {
  styleConfig?: StyleConfig<'popover'> | null
}
