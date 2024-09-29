import type { Icon } from '@/icons/icons'

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
  /**
   * The type of the button.
   * @default 'button'
   */
  type?: 'button' | 'reset' | 'submit'
  /**
   * The variant of the button.
   * @default 'default'
   */
  variant?: 'default' | 'destructive' | 'ghost' | 'muted' | 'outline'
}

export const appButtonPropsDefaultValues = {
  isDisabled: false,
  isLoading: false,
  iconLeft: null,
  iconRight: null,
  size: 'default',
  type: 'button',
  variant: 'default',
} satisfies AppButtonProps
