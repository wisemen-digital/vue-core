import type {
  AutocompleteInput,
  Input,
  InputWrapper,
} from '@/types/input.type'

export interface CheckboxProps extends Input, InputWrapper, AutocompleteInput {
  isIndeterminate?: boolean
  /**
   * The size of the text field.
   * @default 'md'
   */
  size?: 'md' | 'sm'

}
