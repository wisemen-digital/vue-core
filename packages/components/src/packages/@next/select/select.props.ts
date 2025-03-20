import type { AcceptableValue } from 'reka-ui'

import type { Icon } from '@/icons/icons'
import type { PopperPropsWithArrowHiddenByDefault } from '@/packages/@next/shared/types/popperProps.type'
import type {
  CustomizableElement,
  InteractableElement,
  PrimitiveElement,
} from '@/utils/props.util'

export type SelectValue = AcceptableValue | AcceptableValue[]

export type SelectFilterFn<TValue extends SelectValue> = (
  option: TValue extends Array<infer U> ? U : NonNullable<TValue>,
  searchTerm: string,
) => boolean

export type SelectDisplayFn<TValue extends SelectValue> = (
  option: TValue extends Array<infer U> ? U : NonNullable<TValue>,
) => string

export interface SelectProps<TValue extends SelectValue> extends
  PrimitiveElement,
  InteractableElement,
  PopperPropsWithArrowHiddenByDefault,
  CustomizableElement<'select'> {
  /**
   * Whether the select input should display a loading state.
   * This is useful when data is being fetched asynchronously.
   * @default false
   */
  isLoading?: boolean
  /**
   * Determines whether the open/close state of the dropdown is controlled externally.
   * If `true`, the dropdown will only open or close when explicitly controlled via props.
   * If `false`, the dropdown state is managed internally.
   * @default false
   */
  isOpenControlled?: boolean
  /**
   * A function that determines how selected options are displayed in the input field.
   * It receives the selected option as an argument and should return a string representation.
   */
  displayFn: SelectDisplayFn<TValue>
  /**
   * Configuration for filtering the select options.
   * If `null`, filtering is disabled.
   * @default null;
   */
  filter?: {
    /**
     * Enables or disables filtering of the options.
     */
    isEnabled: boolean
    /**
     * Determines whether the filtering input is displayed inline within the dropdown.
     */
    isInline?: boolean
    /**
     * A custom filtering function that determines whether an option should be shown
     * based on the search term.
     * If not provided, a default filtering function is used.
     */
    fn?: SelectFilterFn<TValue>
  } | null
  /**
   * Placeholder text for the search input when filtering is enabled.
   * @default 't("component.select.filter_placeholder")'
   */
  filterPlaceholder?: string | null
  /**
   * Icon displayed on the left side of the input field.
   * If `null`, no icon is displayed.
   * @default null
   */
  iconLeft?: Icon | null
  /**
   * Icon displayed on the right side of the input field.
   * @default 'chevronSelectorVertical'
   */
  iconRight?: Icon | null
  /**
   * Placeholder text for the select input when no value is selected.
   * @default null
   */
  placeholder?: string | null
  /**
   * Determines whether the dropdown should remain open when the selected value changes.
   * - If `true`, the dropdown remains open after selecting an option.
   * - If `false`, the dropdown closes when an option is selected.
   * - If `null`, defaults to `true` if the select allows multiple selections, otherwise `false`.
   * @default null
   */
  remainOpenOnValueChange?: boolean | null
  /**
   * Placeholder text for the search input.
   * @default null
   */
  searchInputPlaceholder?: string | null
  /**
   * Configuration for enabling a virtualized list when displaying large sets of options.
   * @default null
   */
  virtualList?: {
    /**
     * Whether virtualization is enabled for the list of options.
     * This is useful for optimizing performance when dealing with a large number of items.
     */
    isEnabled: boolean
    /**
     * The fixed height (in pixels) of each option in the virtualized list.
     */
    optionHeight: number
  } | null
}

export interface SelectItemProps {
  isDisabled?: boolean
  value: AcceptableValue
}
