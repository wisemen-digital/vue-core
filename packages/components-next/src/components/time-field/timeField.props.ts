import type { GetComponentPropCustomValues } from '@/customClassVariants'
import type { Icon } from '@/icons/icons'
import type {
  CustomizableElement,
  FormElement,
  InteractableElement,
  TestId,
} from '@/utils/props.util'

export interface TimeFieldProps extends TestId, InteractableElement, FormElement, CustomizableElement<'timeField'> {
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
   * The icon displayed on the left side of the input. If set to null, no icon will be shown.
   * @default null
   */
  iconLeft?: Icon | null
  /**
   * The icon displayed on the right side of the input. If set to null, no icon will be shown.
   * @default null
   */
  iconRight?: Icon | null
  /**
   *
   */
  variant?: GetComponentPropCustomValues<'timeField', 'variant'> | null
}
