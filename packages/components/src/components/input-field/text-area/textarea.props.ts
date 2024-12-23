import type { FormFieldErrors } from '@/types/formFieldErrors.type'
import type { Stylable } from '@/types/stylable.type'

export interface TextareaProps extends Stylable<'textarea'> {
  /**
   * The id of the input.
   * @default null
   */
  id?: string | null
  /**
   * The test id of the input.
   * @default null
   */
  testId?: string | null
  /**
   * Whether the input is disabled.
   * @default false
   */
  isDisabled?: boolean
  /**
   * Whether the input is readonly.
   * @default false
   */
  isReadonly?: boolean
  /**
   * Whether the input is required.
   */
  isRequired?: boolean
  /**
   * Whether the input is spell check enabled.
   * @default false
   */
  isSpellCheckEnabled?: boolean
  /**
   * Whether the input is touched. Used to determine if an error should be shown.
   * @default false
   */
  isTouched?: boolean
  /**
   * The errors associated with the input.
   */
  errors?: FormFieldErrors | null
  /**
   * The hint text of the input.
   * @default null
   */
  hint?: string | null
  /**
   * The label of the input.
   * @default null
   */
  label?: string | null
  /**
   * The placeholder text of the input.
   * @default null
   */
  placeholder?: string | null
  /**
   * Whether the textarea can be resized.
   * @default 'none'
   */
  resize?: 'auto-vertical' | 'both' | 'horizontal' | 'none' | 'vertical'
}
