import type { AcceptableValue } from 'reka-ui'

import type { GetComponentPropCustomValues } from '@/customClassVariants'
import type {
  CustomizableElement,
  FormElement,
  InteractableElement,
  TestId,
} from '@/utils/props.util'

export type CheckboxValue = AcceptableValue

export interface CheckboxProps extends TestId, InteractableElement, FormElement, CustomizableElement<'checkbox'> {
  /**
   * Whether the checkbox is indeterminate.
   * @default false
   */
  isIndeterminate?: boolean
  /**
   * The value of the checkbox. Only used when the checkbox is in a group.
   * @default null
   */
  value?: CheckboxValue
  /**
   *
   */
  variant?: GetComponentPropCustomValues<'checkbox', 'variant'> | null
}
