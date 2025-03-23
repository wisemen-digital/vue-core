import type { FormFieldSlots } from '@/packages/@next/form-field/formField.slots'

export interface TextFieldSlots extends FormFieldSlots {
  /**
   * Content to be displayed on the left side of the text field.
   */
  left: () => unknown
  /**
   * Content to be displayed on the right side of the text field.
   */
  right: () => unknown
}
