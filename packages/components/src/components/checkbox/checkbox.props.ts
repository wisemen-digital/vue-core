import type { FormFieldErrors } from '@/types/formFieldErrors.type'
import type { StyleConfig } from '@/types/style.type'

export interface AppCheckboxProps {
  /**
   * The id of the checkbox.
   * @default null
   */
  id?: null | string
  /**
   * The test id of the input.
   * @default null
   */
  testId?: null | string
  /**
   * Whether the checkbox is disabled.
   * @default false
   */
  isDisabled?: boolean
  /**
   * Whether the checkbox is in an indeterminate state.
   * @default false
   */
  isIndeterminate?: boolean
  /**
   * Whether the input is readonly.
   * @default false
   */
  isReadonly?: boolean
  /**
   * Whether the checkbox is required.
   * @default false
   */
  isRequired?: boolean
  /**
   * Whether the input is touched. Used to determine if an error should be shown.
   * @default false
   */
  isTouched?: boolean
  /**
   * The errors associated with the checkbox.
   */
  errors?: FormFieldErrors | null
  /**
   * The hint text of the checkbox.
   * @default null
   */
  hint?: null | string
  /**
   *  The label of the checkbox
   * @default null
   */
  label?: null | string
  /**
   *
   */
  styleConfig?: StyleConfig<'checkbox'> | null

}
