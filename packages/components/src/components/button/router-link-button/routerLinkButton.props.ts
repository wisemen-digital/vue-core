import type { Icon } from '@/icons/icons'
import type { Routes } from '@/types'
import type { StyleConfig } from '@/types/style.type'

export interface RouterLinkButtonProps {
  /**
   * The test id of the button.
   */
  dataTestId?: null | string
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
   * The style config of the button.
   * @default null
   */
  styleConfig?: StyleConfig<'button'> | null
  /**
   * The route to link to.
   */
  // @ts-expect-error no matching signature
  to: Routes[number]
  /**
   * The variant of the button.
   * @default 'default'
   */
  variant?: 'default' | 'destructive-primary' | 'destructive-secondary' | 'destructive-tertiary' | 'secondary' | 'secondary-color' | 'tertiary' | 'tertiary-color'
}
