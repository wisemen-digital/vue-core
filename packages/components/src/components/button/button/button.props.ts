import type { Icon } from '@/icons/icons'
import type { CustomizableElement } from '@/utils/props.util'

export interface ButtonProps extends CustomizableElement<'button'> {
  /**
   * The test id of the button.
   * @default null
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
   * @default 'default'
   */
  size?: '2xl' | 'default' | 'lg' | 'sm' | 'xl'
  /**
   * The type of the button.
   * @default 'button'
   */
  type?: 'button' | 'reset' | 'submit'
  /**
   * The variant of the button.
   * @default 'default'
   */
  variant?: 'default' | 'destructive-primary' | 'destructive-secondary' | 'destructive-tertiary' | 'secondary' | 'secondary-color' | 'tertiary' | 'tertiary-color'
}
