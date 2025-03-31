import type { AcceptableValue } from 'reka-ui'

import type { GetComponentPropCustomValues } from '@/customClassVariants'
import type {
  CustomizableElement,
  FormElement,
  InteractableElement,
  PrimitiveElement,
} from '@/utils/props.util'

export type RadioGroupItemValue = AcceptableValue

export interface RadioGroupItemProps extends PrimitiveElement, InteractableElement, FormElement, CustomizableElement<'radioGroupItem'> {
  /**
   * The value of the radio group item.
   */
  value: RadioGroupItemValue
  /**
   *
   */
  variant?: GetComponentPropCustomValues<'radioGroupItem', 'variant'> | null
}
