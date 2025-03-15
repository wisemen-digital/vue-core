import type { GetComponentPropCustomValues } from '@/customClassVariants'
import type { Icon } from '@/icons/icons'
import type { ButtonStyle } from '@/packages/@next/button/shared/style/button.style'
import type { SharedButtonProps } from '@/packages/@next/button/shared/sharedButton.props'
import type { CustomizableElement } from '@/utils/props.util'

export interface ButtonProps extends SharedButtonProps, CustomizableElement<'button'> {
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
  size?: ButtonStyle['size'] | GetComponentPropCustomValues<'button', 'size'>
  /**
   * Defines the visual style of the button.
   * @default 'primary'
   */
  variant?: ButtonStyle['variant'] | GetComponentPropCustomValues<'button', 'variant'>
}
