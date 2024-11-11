import type { Icon } from '@/icons/icons'
import type { FormFieldErrors } from '@/types/formFieldErrors.type'
import type { PopperProps } from '@/types/popper'
import type {
  SelectItem,
  SelectValue,
} from '@/types/select.type'
import type { Stylable } from '@/types/stylable.type'

export type SelectDisplayFn<TValue extends SelectValue> = (
  value: TValue extends Array<infer U> ? U : TValue
) => string

export type SelectFilterFn<TValue extends SelectValue> = (
  option: TValue extends Array<infer U> ? U : TValue,
  searchTerm: string,
) => boolean

export interface SelectProps<TValue extends SelectValue> extends Omit<PopperProps, 'isArrowHidden'>, Stylable<'select'> {
  /**
   * The id of the input.
   * @default null
   */
  id?: null | string
  /**
   * The test id of the input.
   * @default null
   */
  testId?: null | string
  /**
   * Whether the arrow is visible.
   * @default false
   */
  isArrowVisible?: boolean
  /**
   * Whether the input is disabled.
   * @default false
   */
  isDisabled?: boolean
  /**
   * Whether the input is loading.
   * @default false
   */
  isLoading?: boolean
  /**
   * Whether the input is required.
   */
  isRequired?: boolean
  /**
   * Whether the input is touched. Used to determine if an error should be shown.
   * @default false
   */
  isTouched?: boolean
  /**
   * The display function for the selected value.
   */
  displayFn: SelectDisplayFn<TValue>
  /**
   * The errors associated with the input.
   */
  errors?: FormFieldErrors | null
  /**
   * The function to filter the options.
   */
  filterFn?: SelectFilterFn<TValue> | null
  /**
   * The hint text of the input.
   * @default null
   */
  hint?: null | string
  /**
   * The left icon of the input.
   * @default null
   */
  iconLeft?: Icon | null
  /**
   * The right icon of the input.
   * @default 'chevronSelectorVertical'
   */
  iconRight?: Icon
  /**
   * The items of the select.
   */
  items: SelectItem<TValue extends Array<infer U> ? U : TValue>[]
  /**
   * The label of the input.
   * @default null
   */
  label?: null | string
  /**
   * The placeholder text of the input.
   * @default null
   */
  placeholder?: null | string
  /**
   * The placeholder of the search input.
   * @default 't("component.select.search_placeholder")'
   */
  searchPlaceholder?: string
  /**
   * Whether the select should remain open when the value changes.
   * @default true - when the value is an array
   * @default false - when the value is a single value
   */
  shouldRemainOpenOnValueChange?: boolean | null
  /**
   * Whether the select should use a virtual list.
   * When enabled, items must be restricted to the option type
   * @default null
   */
  virtualList?: {
    optionHeight: number
  } | null
}
