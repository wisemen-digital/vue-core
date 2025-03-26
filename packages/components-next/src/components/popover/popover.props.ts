import type { PopperPropsWithArrowVisibleByDefault } from '@/types/popperProps.type'
import type {
  CustomizableElement,
  PrimitiveElement,
} from '@/utils/props.util'

export interface PopoverProps extends PopperPropsWithArrowVisibleByDefault, PrimitiveElement, CustomizableElement<'popover'> {
  /**
   * The element to which the popover should be anchored.
   */
  anchorReferenceElement?: HTMLElement | null
}
