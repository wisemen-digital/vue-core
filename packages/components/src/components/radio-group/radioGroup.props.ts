import type {
  AcceptableValue,
} from 'reka-ui'

import type { FormFieldErrors } from '@/types/formFieldErrors.type'
import type { RadioGroupItem } from '@/types/radioGroup.type'
import type { StyleConfig } from '@/types/style.type'

export interface AppRadioGroupProps<TValue extends AcceptableValue> {
  /**
   * The id of the radioGroup.
   * @default null
   */
  id?: null | string
  /**
   * The test id of the input.
   * @default null
   */
  testId?: null | string
  /**
   * Whether the radioGroup is disabled.
   * @default false
   */
  isDisabled?: boolean
  /**
   * Whether the input is readonly.
   * @default false
   */
  isReadonly?: boolean
  /**
   * Whether the radioGroup is required.
   * @default false
   */
  isRequired?: boolean
  /**
   * Whether the input is touched. Used to determine if an error should be shown.
   * @default false
   */
  isTouched?: boolean
  /**
   * The errors associated with the radioGroup.
   */
  errors?: FormFieldErrors | null
  /**
   * The hint text of the radioGroup.
   * @default null
   */
  hint?: null | string
  /**
   * The items of the radioGroup.
   */
  items: RadioGroupItem<TValue extends Array<infer U> ? U : TValue>[]
  /**
   *  The label of the radioGroup
   * @default null
   */
  label?: null | string
  /**
   *
   */
  styleConfig?: StyleConfig<'button'> | null

}

export const appRadioGroupPropsDefaultValues = {
  id: null,
  isDisabled: false,
  isReadonly: false,
  isRequired: false,
  isTouched: false,
  errors: null,
  hint: null,
  label: null,
  styleConfig: null,
} satisfies Partial<AppRadioGroupProps<AcceptableValue>>
