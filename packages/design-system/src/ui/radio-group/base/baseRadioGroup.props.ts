import type { AcceptableInputValue } from 'reka-ui'

import type { DisabledWithReason } from '@/types/disabledWithReason.type'

export interface BaseRadioGroupItemProps extends DisabledWithReason {
  /**
   * Whether the label should be visually hidden.
   * @default false
   */
  isLabelHidden?: boolean
  /**
   * A description displayed underneath the label.
   * @default null
   */
  description?: string | null
  /**
   * The label displayed next to the radio item.
   */
  label: string
  /**
   * The value of the radio group item.
   */
  value: AcceptableInputValue
}
