import type { PopoverProps } from '@/types/popover.type'
import type { StyleConfig } from '@/types/style.type'

export interface AppPopoverProps extends PopoverProps {
  /**
   * The test id of the popover.
   * @default null
   */
  testId?: null | string
  styleConfig?: StyleConfig<'popover'> | null
}
