import type { Icon } from '@/icons/icons'

export interface AppIconButtonProps {
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

export const appIconButtonPropsDefaultValues = {
  isDisabled: false,
  isLoading: false,
  size: 'default',
  type: 'button',
  variant: 'default',
} satisfies Partial<AppIconButtonProps>
