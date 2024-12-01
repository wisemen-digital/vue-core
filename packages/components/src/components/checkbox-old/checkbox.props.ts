import type { FormElementProps } from '@/types/formElement.type'
import type { Stylable } from '@/types/stylable.type'

export interface CheckboxProps extends FormElementProps, Stylable<'checkbox'> {
  /**
   * Whether the checkbox is in an indeterminate state.
   * @default false
   */
  isIndeterminate?: boolean
}
