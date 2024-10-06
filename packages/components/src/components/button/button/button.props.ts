import type { Icon } from '@/icons/icons'
import type { StyleConfig } from '@/types/style.type'

export interface AppButtonProps {
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
  size?: 'default' | 'sm'
  styleConfig?: StyleConfig<'button'> | null
  /**
   * The type of the button.
   * @default 'button'
   */
  type?: 'button' | 'reset' | 'submit'

  /**
   * The variant of the button.
   * @default 'default'
   */
  variant?: 'default' | 'destructive' | 'ghost' | 'muted' | 'outline' | string & {}
}

export const appButtonPropsDefaultValues = {
  isDisabled: false,
  isLoading: false,
  iconLeft: null,
  iconRight: null,
  size: 'default',
  styleConfig: null,
  type: 'button',
  variant: 'default',
} satisfies AppButtonProps
