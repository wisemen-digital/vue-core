import type { SwitchStyle } from '@/components/switch/switch.style'
import type { GetComponentPropCustomValues } from '@/customClassVariants'
import type {
  CustomizableElement,
  FormElement,
  InteractableElement,
  PrimitiveElement,
} from '@/utils/props.util'

export interface SwitchProps extends PrimitiveElement, InteractableElement, FormElement, CustomizableElement<'switch'> {
  /**
   * Defines the switch’s size.
   * @default 'md'
   */
  size?: GetComponentPropCustomValues<'switch', 'size'> | SwitchStyle['size']
  /**
   *
   */
  variant?: GetComponentPropCustomValues<'switch', 'variant'> | null
}
