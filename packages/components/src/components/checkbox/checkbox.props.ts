import type { AcceptableValue } from 'reka-ui'

import type { FormElementProps } from '@/types/formElement.type'
import type { Stylable } from '@/types/stylable.type'

export interface CheckboxProps extends FormElementProps, Stylable<'checkbox'> {
  /**
   * Whether the checkbox is in an indeterminate state.
   * @default false
   */
  isIndeterminate?: boolean
  /**
   * The value of the checkbox. Only used when the checkbox is in a group.
   * @default null
   */
  value?: AcceptableValue | null
}
