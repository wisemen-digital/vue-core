import type {
  Input,
  InputWrapper,
} from '@/types/input.type'

export interface RadioGroupProps extends Input, InputWrapper {
  /**
   * Whether the radio group is disabled.
   * @default false
   */
  isDisabled?: boolean
  /**
   * Provides a reason why the radio group is disabled,
   * when provided a tooltip will be shown on hover with the provided text.
   * @default null
   */
  disabledReason?: string | null
  /**
   * Controls the keyboard navigation direction of the radio group.
   * @default 'vertical'
   */
  orientation?: 'horizontal' | 'vertical'
}
