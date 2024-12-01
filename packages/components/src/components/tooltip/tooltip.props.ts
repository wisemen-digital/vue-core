import type { PopperProps } from '@/types/popper'
import type { Stylable } from '@/types/stylable.type'

export interface TooltipProps extends PopperProps, Stylable<'tooltip'> {
  /**
   * When true, the tooltip will be hidden.
   * @default false
   */
  isHidden?: boolean
  /**
   * The duration in milliseconds to wait before showing the tooltip.
   * @default 0
   */
  delayDuration?: number
  /**
   * When true, trying to hover the content will result in the tooltip closing as the pointer leaves the trigger.
   * @default false
   */
  disableHoverableContent?: boolean
  /**
   * When true, clicking on trigger will close the tooltip.
   * @default false
   */
  enableCloseOnTriggerClick?: boolean
}
