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
   * Controls the keyboard navigation direction of the radio group.
   * @default 'vertical'
   */
  orientation?: 'horizontal' | 'vertical'
}
