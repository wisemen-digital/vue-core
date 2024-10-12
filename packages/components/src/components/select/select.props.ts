import type { Icon } from '@/icons/icons'
import type { FormFieldErrors } from '@/types/formFieldErrors.type'
import type {
  PopoverProps,
} from '@/types/popover.type'
import type {
  SelectItem,
  SelectValue,
} from '@/types/select.type'
import type { StyleConfig } from '@/types/style.type'

export type SelectDisplayFn<TValue extends SelectValue> = (
  value: TValue extends Array<infer U> ? U : TValue
) => string

export type SelectFilterFn<TValue extends SelectValue> = (
  option: TValue extends Array<infer U> ? U : TValue,
  searchTerm: string,
) => boolean

export interface AppSelectProps<TValue extends SelectValue> extends Omit<PopoverProps, 'isArrowHidden'> {
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
   * @default 't("components.select.search_placeholder")'
   */
  searchPlaceholder?: string
  /**
   * Whether the select should remain open when the value changes.
   * @default true - when the value is an array
   * @default false - when the value is a single value
   */
  shouldRemainOpenOnValueChange?: boolean | null
  /**
   *
   */
  styleConfig?: StyleConfig<'select'> | null
}

export const appSelectPropsDefaultValues = {
  id: null,
  testId: null,
  isArrowVisible: false,
  isDisabled: false,
  isLoading: false,
  isRequired: false,
  isTouched: false,
  align: 'center',
  collisionPaddingInPx: 0,
  containerElement: null,
  errors: null,
  filterFn: null,
  hint: null,
  iconLeft: null,
  iconRight: 'chevronSelectorVertical',
  label: null,
  offsetInPx: 4,
  placeholder: null,
  popoverWidth: 'anchor-width',
  shouldRemainOpenOnValueChange: null,
  side: 'bottom',
  styleConfig: null,
} satisfies Partial<AppSelectProps<SelectValue>>
