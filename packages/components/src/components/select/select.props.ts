import type { Icon } from '@/icons/icons'
import type { FormFieldErrors } from '@/types/formFieldErrors.type'
import type { PopoverAlign, PopoverSide } from '@/types/popover.type'
import type {
  SelectItem,
  SelectValue,
} from '@/types/select.type'

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
   * Whether the input is readonly.
   * @default false
   */
  isReadonly?: boolean
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
  displayFn: (value: TValue) => string
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
  dropdownWidth?: 'available-width' | 'trigger-width'
  /**
   * The errors associated with the input.
   */
  errors?: FormFieldErrors | null
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
  items: SelectItem<TValue>[]
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
   * The type of the input.
   * @default 'text'
   */
  type?: 'date' | 'datetime-local' | 'email' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url'
}

export const appSelectPropsDefaultValues = {
  id: null,
  testId: null,
  isDisabled: false,
  isLoading: false,
  isReadonly: false,
  isRequired: false,
  isTouched: false,
  dropdownAlign: 'center',
  dropdownSide: 'bottom',
  dropdownWidth: 'trigger-width',
  errors: null,
  hint: null,
  iconLeft: null,
  label: null,
  placeholder: null,
  type: 'text',
} satisfies Partial<AppSelectProps<SelectValue>>
