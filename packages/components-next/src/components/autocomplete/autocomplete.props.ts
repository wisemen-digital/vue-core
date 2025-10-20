import type { AcceptableValue } from 'reka-ui'

import type { SelectProps } from '@/components/select/select.props'
import type { PublicProps } from '@/types/props.type'
import type { FormElement } from '@/utils/props.util'

export interface AutocompleteProps<TValue extends AcceptableValue> extends Omit<SelectProps<TValue>, 'filter' | 'virtualList'>, FormElement {
  /**
   * Whether the search term is optional.
   * If `true`, the dropdown can be opened without entering a search term.
   * @default false
   */
  isSearchTermOptional?: boolean
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

export type AutocompletePublicProps<TValue extends AcceptableValue> = PublicProps<AutocompleteProps<TValue>>
