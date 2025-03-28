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
   *
   */
  variant?: GetComponentPropCustomValues<'popover', 'variant'> | null
}
