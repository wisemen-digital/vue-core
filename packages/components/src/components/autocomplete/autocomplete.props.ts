import type { Icon } from '@/icons/icons'
import type { PopperProps } from '@/types'
import type {
  SelectOption,
  SelectValue,
} from '@/types/select.type'
import type { Stylable } from '@/types/stylable.type'

export type AutocompleteDisplayFn<TValue extends SelectValue> = (
  value: TValue extends Array<infer U> ? U : TValue
) => string

export interface AutocompleteProps<
  TValue extends SelectValue,
> extends Omit<
    PopperProps, 'isArrowHidden'
  >, Stylable<'select'> {
  /**
   * The id of the input.
   * @default null
   */
  id?: string | null
  /**
   * The test id of the input.
   * @default null
   */
  testId?: string | null
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
   * Whether the search input should be cleared when a selection is made.
   * @default false
   */
  clearSearchOnSelection?: boolean | null
  /**
   * The display function for the selected value.
   */
  displayFn: AutocompleteDisplayFn<TValue>
  /**
   * The errors associated with the input.
   */
  errors?: string[]
  /**
   * Whether the clear button should be hidden.
   * @default false
   */
  hideClearButton?: boolean | null
  /**
   * The hint text of the input.
   * @default null
   */
  hint?: string | null
  /**
   * The left icon of the input.
   * @default null
   */
  iconLeft?: Icon | null
  /**
   * The right icon of the input.
   * @default null
   */
  iconRight?: Icon | null
  /**
   * The items of the select.
   */
  items: SelectOption<TValue extends Array<infer U> ? U : TValue>[]
  /**
   * The label of the input.
   * @default null
   */
  label?: string | null
  /**
   * The placeholder text of the input.
   * @default null
   */
  placeholder?: string | null
}
