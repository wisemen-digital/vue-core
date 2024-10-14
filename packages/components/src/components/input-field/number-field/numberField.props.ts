import type { AppTextFieldProps } from '@/components/input-field/text-field/textField.props'

export interface AppNumberFieldProps extends Omit<AppTextFieldProps, 'type'> {
  /**
   * Whether the controls are visible.
   * @default false
   */
  areControlsHidden?: boolean
  /**
   * The maximum value of the number input.
   * @default null
   */
  max?: null | number
  /**
   * The minimum value of the number input.
   * @default null
   */
  min?: null | number
  /**
   * The step of the number input.
   * @default 1
   */
  step?: number
}

export const appNumberFieldPropsDefaultValues = {
  id: null,
  testId: null,
  isDisabled: false,
  isLoading: false,
  isReadonly: false,
  isRequired: false,
  isSpellCheckEnabled: false,
  isTouched: false,
  areControlsHidden: false,
  autoComplete: 'off',
  errors: null,
  hint: null,
  iconLeft: null,
  iconRight: null,
  label: null,
  max: null,
  min: null,
  placeholder: null,
  step: 1,
  styleConfig: null,
} satisfies AppNumberFieldProps
