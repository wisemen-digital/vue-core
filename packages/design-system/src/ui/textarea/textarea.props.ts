import type {
  AutocompleteInput,
  Input,
  InputField,
  InputMeta,
} from '@/types/input.type'

export interface TextareaProps extends Input, AutocompleteInput, InputMeta, InputField {
  /**
   * The size of the text area.
   * @default 'md'
   */
  size?: 'md' | 'sm'

}
