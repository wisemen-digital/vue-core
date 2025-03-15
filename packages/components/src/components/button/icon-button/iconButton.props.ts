import type { ButtonProps } from '@/components/button/button/button.props'
import type { Icon } from '@/icons/icons'
import type { Stylable } from '@/types/stylable.type'

export interface IconButtonProps extends Stylable<'iconButton'> {
  /**
   * The test id of the button.
   */
  testId?: string | null
  /**
   * Whether the button is disabled.
   * @default false
   */
  isDisabled?: boolean
  /**
   * Whether the button is in a loading state.
   * @default false
   */
  isLoading?: boolean
  /**
   * The icon of the button.
   */
  icon: Icon
  /**
   * The label for the button for accessibility
   */
  label: string
  /**
   * The size of the button.
   * @default 'default'
   */
  size?: ButtonProps['size']
  /**
   * The type of the button.
   * @default 'button'
   */
  type?: ButtonProps['type']
  /**
   * The variant of the button.
   * @default 'default'
   */
  variant?: ButtonProps['variant']
}
