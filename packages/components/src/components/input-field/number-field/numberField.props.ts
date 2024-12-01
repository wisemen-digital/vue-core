import type { TextFieldProps } from '@/components/input-field/text-field/textField.props'

export interface NumberFieldProps extends Omit<TextFieldProps, 'type'> {
  /**
   * Whether the controls are visible.
   * @default false
   */
  areControlsHidden?: boolean
  /**
   * The format options of the number input.
   * @default null
   */
  formatOptions?: Intl.NumberFormatOptions | null
  /**
   * The maximum value of the number input.
   * @default null
   */
  max?: number | null
  /**
   * The minimum value of the number input.
   * @default null
   */
  min?: number | null
  /**
   * The step of the number input.
   * @default 1
   */
  step?: number
}
