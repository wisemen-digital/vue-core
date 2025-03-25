import type { AcceptableValue } from 'reka-ui'

import type { SelectProps } from '@/packages/@next/select/select.props'
import type { FormElement } from '@/utils/props.util'

export interface AutocompleteProps<TValue extends AcceptableValue>
  extends Omit<SelectProps<TValue>, 'virtualList'>, FormElement {
  debounceTimeoutInMs?: number
  items: TValue[]
}
