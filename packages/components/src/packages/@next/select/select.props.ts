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
  option: TValue extends Array<infer U> ? U : TValue,
  searchTerm: string,
) => boolean

export interface SelectProps<TValue extends SelectValue> extends
  PrimitiveElement,
  InteractableElement,
  PopperPropsWithArrowHiddenByDefault,
  CustomizableElement<'select'> {
  /**
   * Whether the input is loading.
   * @default false
   */
  isLoading?: boolean
  /**
   * Whether the open state is controlled by the `isOpen` prop.
   * @default false
   */
  isOpenControlled?: boolean
  /**
   * TODO: docs
   */
  filter?: {
    isEnabled: boolean
    fn?: SelectFilterFn<TValue>
  } | null
  /**
   * The placeholder of the filter input.
   * @default 't("component.select.filter_placeholder")'
   */
  filterPlaceholder?: string | null
  /**
   * The left icon of the input.
   * @default null
   */
  iconLeft?: Icon | null
  /**
   * The right icon of the input.
   * @default 'chevronSelectorVertical'
   */
  iconRight?: Icon | null
  /**
   * The placeholder text of the input.
   * @default null
   */
  placeholder?: string | null
  /**
   * Whether the select should remain open when the value changes.
   * @default true - when the value is an array
   * @default false - when the value is a single value
   */
  remainOpenOnValueChange?: boolean
  /**
   * Whether the select should use a virtual list.
   * When enabled, items must be restricted to the option type
   * @default null
   */
  virtualList?: {
    isEnabled: boolean
    optionHeight: number
  } | null
}
