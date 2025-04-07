import type { GetComponentPropCustomValues } from '@/customClassVariants'
import type { PopperPropsWithArrowVisibleByDefault } from '@/types/popperProps.type'
import type {
  CustomizableElement,
  TestId,
} from '@/utils/props.util'

export interface PopoverProps extends TestId, PopperPropsWithArrowVisibleByDefault, CustomizableElement<'popover', [
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
