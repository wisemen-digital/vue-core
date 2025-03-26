import type { Icon } from '@/icons/icons'
import type { Stylable } from '@/types/stylable.type'

export interface IconProps extends Stylable<'icon'> {
  /**
   * The icon to be displayed
   */
  icon: Icon
}
