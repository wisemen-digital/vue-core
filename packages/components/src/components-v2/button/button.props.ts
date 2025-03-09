import type { ButtonStyle } from '@/components-v2/button/style/button.style'
import type { Icon } from '@/icons/icons'
import type {
  CustomizableElement,
  InteractableElement,
} from '@/utils/props.util'

export interface ButtonProps extends InteractableElement, CustomizableElement<'button'> {
  /**
   * Indicates whether the button is in a loading state.
   * When true, the button may show a loading spinner and disable interactions.
   * @default false
   */
  isLoading?: boolean

  /**
   * The icon displayed on the left side of the button text.
   * If set to null, no left icon will be shown.
   * @default null
   */
  iconLeft?: Icon | null

  /**
   * The icon displayed on the right side of the button text.
   * If set to null, no right icon will be shown.
   * @default null
   */
  iconRight?: Icon | null

  /**
   * Defines the button’s size.
   * Accepts predefined sizes from `ButtonStyle['size']`.
   * @default 'md'
   */
  size?: ButtonStyle['size']

  /**
   * Specifies the button's type attribute.
   * - `'button'`: A regular button that does not submit forms.
   * - `'submit'`: Submits the form it belongs to.
   * - `'reset'`: Resets all form fields to their initial values.
   * @default 'button'
   */
  type?: 'button' | 'reset' | 'submit'

  /**
   * Defines the visual style of the button.
   * Available variants:
   * - **`primary`**: The default primary button style.
   * - **`secondary-gray`**: A secondary button with a gray theme.
   * - **`secondary-color`**: A secondary button with a colored theme.
   * - **`tertiary-gray`**: A tertiary button with a gray theme.
   * - **`tertiary-color`**: A tertiary button with a colored theme.
   * - **`destructive-primary`**: A primary button for destructive actions.
   * - **`destructive-secondary`**: A secondary button for destructive actions.
   * - **`destructive-tertiary`**: A tertiary button for destructive actions.
   *
   * @default 'primary'
   */
  variant?: ButtonStyle['variant']
}
