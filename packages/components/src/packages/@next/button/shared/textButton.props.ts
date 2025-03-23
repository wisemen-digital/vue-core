import type { GetComponentPropCustomValues } from '@/customClassVariants'
import type { Icon } from '@/icons/icons'
import type { SharedButtonProps } from '@/packages/@next/button/shared/sharedButton.props'
import type { TextButtonStyle } from '@/packages/@next/button/shared/textButton.style'
import type { CustomizableElement } from '@/utils/props.util'

export interface TextButtonProps extends SharedButtonProps, CustomizableElement<'button'> {
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
  size?: GetComponentPropCustomValues<'button', 'size'> | TextButtonStyle['size']
  /**
   * Defines the visual style of the button.
   * @default 'primary'
   */
  variant?: GetComponentPropCustomValues<'button', 'variant'> | TextButtonStyle['variant']
}
