import type { PopperProps } from '@/types/popper'
import type { StyleConfig } from '@/types/style.type'

export interface PopoverProps extends PopperProps {
  /**
   * The test id of the popover.
   * @default null
   */
  testId?: null | string
  styleConfig?: StyleConfig<'popover'> | null
}
