import type { GetComponentPropCustomValues } from '@/customClassVariants'
import type { Icon } from '@/icons/icons'
import type {
  CustomizableElement,
  FormElement,
  InteractableElement,
  PrimitiveElement,
} from '@/utils/props.util'

export interface TextFieldProps extends PrimitiveElement, InteractableElement, FormElement, CustomizableElement<'textField'> {
  /**
   * Whether the input is loading.
   * @default false
   */
  isLoading?: boolean
  /**
   * Whether the input is spell check enabled.
   * @default false
   */
  isSpellCheckEnabled?: boolean
  /**
   * The autocomplete property of the input.
   * @default 'off'
   */
  autocomplete?: 'off' | 'on'
  /**
   * The icon displayed on the left side of the input. If set to null, no icon will be shown.
   * @default null
   */
  iconLeft?: Icon | null
  /**
   * The icon displayed on the right side of the input. If set to null, no icon will be shown.
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
  /**
   *
   */
  variant?: GetComponentPropCustomValues<'textField', 'variant'> | null
}

export interface TextFieldEmits {
  (event: 'focus', e: FocusEvent): void
  (event: 'blur', e: FocusEvent): void
}
