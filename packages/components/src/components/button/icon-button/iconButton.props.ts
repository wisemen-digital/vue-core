import type { Icon } from '@/icons/icons'
import type { StyleConfig } from '@/types/style.type'

export interface IconButtonProps {
  /**
   * The test id of the button.
   */
  testId?: null | string
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
  size?: '2xl' | 'default' | 'lg' | 'sm' | 'xl'
  /**
   * The style config of the button.
   * @default null
   */
  styleConfig?: StyleConfig<'iconButton'> | null
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
