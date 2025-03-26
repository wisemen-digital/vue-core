import type { IconButtonStyle } from '@/components/button/icon-button/iconButton.style'
import type { SharedButtonProps } from '@/components/button/shared/sharedButton.props'
import type { GetComponentPropCustomValues } from '@/customClassVariants'
import type { Icon } from '@/icons/icons'
import type { CustomizableElement } from '@/utils/props.util'

export interface IconButtonProps extends SharedButtonProps, CustomizableElement<'iconButton'> {
  /**
   * The icon to display inside the button.
   */
  icon: Icon
  /**
   * Defines the button’s size.
   * @default 'md'
   */
  size?: GetComponentPropCustomValues<'iconButton', 'size'> | IconButtonStyle['size']
  /**
   * Defines the visual style of the button.
   * @default 'primary'
   */
  variant?: GetComponentPropCustomValues<'iconButton', 'variant'> | IconButtonStyle['variant']
}
