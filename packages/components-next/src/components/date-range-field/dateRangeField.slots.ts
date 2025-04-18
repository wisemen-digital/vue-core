import type { FormFieldSlots } from '@/components/form-field/formField.slots'

export interface DateRangeFieldSlots extends FormFieldSlots {
  /**
   * Content to be displayed on the left side of the text field.
   */
  left: () => unknown
  /**
   * Content to be displayed on the right side of the text field.
   */
  right: () => unknown
}
