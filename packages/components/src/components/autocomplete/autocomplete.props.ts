import type { Icon } from '@/icons/icons'
import type { PopperProps } from '@/types'
import type { FormFieldErrors } from '@/types/formFieldErrors.type'
import type {
  SelectOption,
  SelectValue,
} from '@/types/select.type'
import type { Stylable } from '@/types/stylable.type'

export type AutocompleteDisplayFn<TValue extends SelectValue> = (
  value: TValue extends Array<infer U> ? U : TValue
) => string

export interface AutocompleteProps<TValue extends SelectValue> extends Omit<PopperProps, 'isArrowHidden'>, Stylable<'select'> {
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
}
