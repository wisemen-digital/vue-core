import type { GetComponentPropCustomValues } from '@/customClassVariants'
import type { Icon } from '@/icons/icons'
import type { IconButtonStyle } from '@/packages/@next/button/icon/style/iconButton.style'
import type { SharedButtonProps } from '@/packages/@next/button/shared/sharedButton.props'
import type { CustomizableElement } from '@/utils/props.util'

export interface IconButtonProps extends SharedButtonProps, CustomizableElement<'iconButton'> {

  /**
   * The icon to display inside the button.
   */
  icon: Icon

  /**
   * The accessible label describing the button’s purpose.
   * This is used by screen readers and should provide meaningful context.
   */
  label: string
  /**
   * Defines the button’s size.
   * @default 'md'
   */
  size?: IconButtonStyle['size']
  /**
   * Defines the visual style of the button.
   * @default 'primary'
   */
  variant?: GetComponentPropCustomValues<'iconButton', 'variant'> | IconButtonStyle['variant']
}
