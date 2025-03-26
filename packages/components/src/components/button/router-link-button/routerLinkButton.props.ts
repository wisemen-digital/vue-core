import type { Icon } from '@/icons/icons'
import type { Routes } from '@/types'
import type { Stylable } from '@/types/stylable.type'

export interface RouterLinkButtonProps extends Stylable<'button'> {
  /**
   * The test id of the button.
   */
  dataTestId?: string | null
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
