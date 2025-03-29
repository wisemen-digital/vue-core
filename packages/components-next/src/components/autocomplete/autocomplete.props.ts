import type { AcceptableValue } from 'reka-ui'

import type { SelectProps } from '@/components/select/select.props'
import type { FormElement } from '@/utils/props.util'

export interface AutocompleteProps<TValue extends AcceptableValue> extends Omit<SelectProps<TValue>, 'virtualList'>, FormElement {
  /**
   * The debounce timeout in milliseconds.
   * @default 300
   */
  debounceTimeoutInMs?: number
  /**
   * The items to display.
   */
  items: TValue[]
}
