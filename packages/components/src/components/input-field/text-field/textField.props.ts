import type { Icon } from '@/icons/icons'
import type { FormElementProps } from '@/types/formElement.type'
import type { Stylable } from '@/types/stylable.type'

export interface TextFieldProps extends FormElementProps, Stylable<'textField'> {
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
   * Whether the input is spell check enabled.
   * @default false
   */
  isSpellCheckEnabled?: boolean
  /**
   * The autocorrect property of the input.
   * @default 'off'
   */
  autoComplete?: 'off' | 'on'
  /**
   * Whether the input should be focused automatically.
   * @default false
   */
  autoFocus?: boolean
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
   * The placeholder text of the input.
   * @default null
   */
  placeholder?: string | null
  /**
   * The type of the input.
   * @default 'text'
   */
  type?: 'date' | 'email' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url'
}
