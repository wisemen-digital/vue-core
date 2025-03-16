import type { PopperPropsWithArrowVisibleByDefault } from '@/packages/@next/shared/types/popperProps.type'
import type {
  CustomizableElement,
  PrimitiveElement,
} from '@/utils/props.util'

export interface TooltipProps extends PopperPropsWithArrowVisibleByDefault, PrimitiveElement, CustomizableElement<'tooltip'> {
  /**
   * When true, the tooltip will be hidden.
   * @default false
   */
  isHidden?: boolean
  /**
   * When true, clicking on trigger will close the tooltip.
   * @default false
   */
  closeOnTriggerClick?: boolean
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
}
