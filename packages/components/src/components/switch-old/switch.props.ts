import type { Icon } from '@/icons/icons'
import type { FormElementProps } from '@/types/formElement.type'
import type { Stylable } from '@/types/stylable.type'

export interface SwitchProps extends FormElementProps, Stylable<'switch'> {
  /**
   * The icon to display in the indicator when the switch is checked.
   * @default null
   */
  iconChecked?: Icon | null
  /**
   * The icon to display in the indicator when the switch is not checked.
   * @default null
   */
  iconUnchecked?: Icon | null
  /**
   * The size of the switch.
   * @default 'default'
   */
  size?: 'default' | 'sm'
}
