import type { AcceptableValue } from 'reka-ui'

import type { FormElementProps } from '@/types/formElement.type'
import type { Stylable } from '@/types/stylable.type'

export interface RadioGroupItemProps extends FormElementProps, Stylable<'radioGroupItem'> {
  /**
   * The value of the radio group item.
   */
  value: AcceptableValue
}
