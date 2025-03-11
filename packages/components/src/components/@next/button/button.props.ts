import type { ButtonStyle } from '@/components/@next/button/style/button.style'
import type { Icon } from '@/icons/icons'
import type {
  CustomizableElement,
  InteractableElement,
  PrimitiveElement,
} from '@/utils/props.util'

export interface ButtonProps extends PrimitiveElement, InteractableElement, CustomizableElement<'button'> {
  /**
   * Indicates whether the button is in a loading state. When true, interactions are disabled.
   * @default false
   */
  isLoading?: boolean

  /**
   * The icon displayed on the left side of the button text. If set to null, no left icon will be shown.
   * @default null
   */
  iconLeft?: Icon | null

  /**
   * The icon displayed on the right side of the button text. If set to null, no right icon will be shown.
   * @default null
   */
  iconRight?: Icon | null

  /**
   * Defines the button’s size.
   * @default 'md'
   */
  size?: ButtonStyle['size']

  /**
   * Specifies the button's type attribute.
   * @default 'button'
   */
  type?: 'button' | 'reset' | 'submit'

  /**
   * Defines the visual style of the button.
   * @default 'primary'
   */
  variant?: ButtonStyle['variant']
}

export interface ButtonEmits {
  (event: 'click', e: MouseEvent): void
  (event: 'focus', e: FocusEvent): void
  (event: 'blur', e: FocusEvent): void
}
