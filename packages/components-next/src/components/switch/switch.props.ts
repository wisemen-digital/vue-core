import type {
  CustomizableElement,
  GetComponentProp,
} from '@/class-variant/classVariant.type'
import type {
  FormElement,
  InteractableElement,
  TestId,
} from '@/utils/props.util'

export interface SwitchProps extends TestId, InteractableElement, FormElement, CustomizableElement<'switch'> {
  /**
   * Defines the size of the switch.
   * @default 'md'
   */
  size?: GetComponentProp<'switch', 'size'>
  /**
   * Defines the visual style of the switch.
   */
  variant?: GetComponentProp<'switch', 'variant'> | null
}
