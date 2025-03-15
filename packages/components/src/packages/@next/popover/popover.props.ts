import type { PopperPropsWithArrowVisibleByDefault } from '@/packages/@next/shared/types/popperProps.type'
import type {
  CustomizableElement,
  PrimitiveElement,
} from '@/utils/props.util'

export interface PopoverProps extends PopperPropsWithArrowVisibleByDefault, PrimitiveElement, CustomizableElement<'popover'> {
  /**
   * Hides the close button.
   * @default false
   */
  isCloseButtonHidden?: boolean
}
