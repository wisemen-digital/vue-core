import type { Icon } from '@/icons/icons'
import type { FormFieldErrors } from '@/types/formFieldErrors.type'

export interface AppTextFieldProps {
  /**
   * The id of the input.
   * @default null
   */
  id?: null | string
  /**
   * The test id of the input.
   * @default null
   */
  testId?: null | string
  /**
   * Whether the input is disabled.
   * @default false
   */
  isDisabled?: boolean
  /**
   * Whether the input is loading.
   * @default false
   */
  isLoading?: boolean
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
   * The autocorrect property of the input.
   * @default 'off'
   */
  autoComplete?: 'off' | 'on'
  /**
   * The errors associated with the input.
   */
  errors?: FormFieldErrors | null
  /**
   * The hint text of the input.
   * @default null
   */
  hint?: null | string
  /**
   * The left icon of the input.
   * @default null
   */
  iconLeft?: Icon | null
  /**
   * The right icon of the input.
   * @default null
   */
  iconRight?: Icon | null
  /**
   * The label of the input.
   * @default null
   */
  label?: null | string
  /**
   * The placeholder text of the input.
   * @default null
   */
  placeholder?: null | string
  /**
   * The type of the input.
   * @default 'text'
   */
  type?: 'date' | 'datetime-local' | 'email' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url'
}

export const appTextFieldPropsDefaultValues = {
  id: null,
  isDisabled: false,
  isLoading: false,
  isReadonly: false,
  isRequired: false,
  isSpellCheckEnabled: false,
  autoComplete: 'off',
  errors: null,
  hint: null,
  iconLeft: null,
  iconRight: null,
  label: null,
  placeholder: null,
  type: 'text',
} satisfies AppTextFieldProps
