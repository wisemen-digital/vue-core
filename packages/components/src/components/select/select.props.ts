import type { Icon } from '@/icons/icons'
import type { FormFieldErrors } from '@/types/formFieldErrors.type'
import type {
  PopoverAlign,
  PopoverSide,
  PopoverWidth,
} from '@/types/popover.type'
import type {
  SelectItem,
  SelectValue,
} from '@/types/select.type'

export type SelectDisplayFn<TValue extends SelectValue> = (
  value: TValue extends Array<infer U> ? U : TValue
) => string

export interface AppSelectProps<TValue extends SelectValue> {
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
   * The alignment of the dropdown.
   * @default 'center'
   */
  dropdownAlign?: PopoverAlign
  /**
   * The side of the dropdown.
   * @default 'bottom'
   */
  dropdownSide?: PopoverSide
  /**
   * The width of the popover.
   */
  dropdownWidth?: PopoverWidth
  /**
   * The errors associated with the input.
   */
  errors?: FormFieldErrors | null
  /**
   * The function to filter the options.
   */
  filterFn?: ((option: TValue, searchTerm: string) => boolean) | null
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
   * Whether the select should remain open when the value changes.
   * @default true - when the value is an array
   * @default false - when the value is a single value
   */
  shouldRemainOpenOnValueChange?: boolean | null
  /**
   *
   */
  styleClass?: string[]
}

export const appSelectPropsDefaultValues = {
  id: null,
  testId: null,
  isDisabled: false,
  isLoading: false,
  isRequired: false,
  isTouched: false,
  dropdownAlign: 'center',
  dropdownSide: 'bottom',
  dropdownWidth: 'anchor-width',
  errors: null,
  filterFn: null,
  hint: null,
  iconLeft: null,
  label: null,
  placeholder: null,
  shouldRemainOpenOnValueChange: null,
  styleClass: undefined,
} satisfies Partial<AppSelectProps<SelectValue>>
