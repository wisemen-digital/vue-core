import type { GetComponentPropCustomValues } from '@/customClassVariants'
import type { PopperPropsWithArrowVisibleByDefault } from '@/types/popperProps.type'
import type {
  CustomizableElement,
  PrimitiveElement,
} from '@/utils/props.util'

export interface PopoverProps extends PopperPropsWithArrowVisibleByDefault, PrimitiveElement, CustomizableElement<'popover', [
  {
    name: 'closeButton'
    component: 'iconButton'
  },
]> {
  /**
   * The HTML element that serves as the anchor point for the popover.
   * If set to `null`, the popover will not be anchored to the trigger element.
   * @default null
   */
  anchorReferenceElement?: HTMLElement | null
  /**
   *
   */
  variant?: GetComponentPropCustomValues<'popover', 'variant'> | null
}
