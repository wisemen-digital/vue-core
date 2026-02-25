import type { AcceptableInputValue } from 'reka-ui'

export interface BaseRadioGroupItemProps {
  /**
   * The label displayed next to the radio item.
   */
  label: string
  /**
   * The value of the radio group item.
   */
  value: AcceptableInputValue
  /**
   * A description displayed underneath the label.
   * @default null
   */
  description?: string | null
  /**
   * Whether this individual item is disabled.
   * @default false
   */
  isDisabled?: boolean
  /**
   * Whether the label should be visually hidden.
   * @default false
   */
  isLabelHidden?: boolean
}
