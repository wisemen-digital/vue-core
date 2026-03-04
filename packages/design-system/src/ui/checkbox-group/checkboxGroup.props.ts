export interface CheckboxGroupProps {
  /**
   * Whether the checkbox group is disabled.
   * @default false
   */
  isDisabled?: boolean
  /**
   * Provides a reason why the checkbox group is disabled,
   * when provided a tooltip will be shown on hover with the provided text.
   * @default null
   */
  disabledReason?: string | null
  /**
   * Controls the keyboard navigation direction of the checkbox group.
   * @default 'vertical'
   */
  orientation?: 'horizontal' | 'vertical'

}
