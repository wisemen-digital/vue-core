import type { PopperProps } from '@/types/popper'
import type { Stylable } from '@/types/stylable.type'

export interface PopoverProps extends PopperProps, Stylable<'popover'> {
  /**
   * The test id of the popover.
   * @default null
   */
  testId?: string | null
}
