import type { GetComponentPropCustomValues } from '@/customClassVariants'
import type { Icon } from '@/icons/icons'
import type { SharedDateProps } from '@/types/shareDateProps.type'
import type {
  CustomizableElement,
  FormElement,
  InteractableElement,
  TestId,
} from '@/utils/props.util'

export interface DateFieldProps extends TestId, InteractableElement, FormElement, SharedDateProps, CustomizableElement<'dateField', [
  {
    name: 'datePicker'
    component: 'datePicker'
  },
]> {
  /**
   * Whether the input is loading.
   * @default false
   */
  isLoading?: boolean
  /**
   * The autocomplete property of the input.
   * @default 'off'
   */
  autocomplete?: 'off' | 'on'
  /**
   * Hides the date picker dropdown trigger when set to `true`.
   *
   * @default false
   */
  hideDatePicker?: boolean
  /**
   * The icon displayed on the left side of the input. If set to null, no icon will be shown.
   * @default null
   */
  iconLeft?: Icon | null
  /**
   *
   */
  variant?: GetComponentPropCustomValues<'dateField', 'variant'> | null
}
