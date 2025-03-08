import type { ButtonStyle } from '@/components-v2/button/style/button.style'
import type { Icon } from '@/icons/icons'
import type {
  CustomizableElement,
  InteractableElement,
} from '@/utils/props.util'

export interface ButtonProps extends InteractableElement, CustomizableElement<'button'> {
  /**
   * Whether the button is in a loading state.
   * @default false
   */
  isLoading?: boolean
  /**
   * The left icon of the button.
   * @default null
   */
  iconLeft?: Icon | null
  /**
   * The right icon of the button.
   * @default null
   */
  iconRight?: Icon | null
  /**
   * The size of the button.
   * @default 'md'
   */
  size?: ButtonStyle['size']
  /**
   * The type of the button.
   * @default 'button'
   */
  type?: 'button' | 'reset' | 'submit'
  /**
   * The variant of the button.
   * @default 'primary'
   */
  variant?: ButtonStyle['variant']
}
