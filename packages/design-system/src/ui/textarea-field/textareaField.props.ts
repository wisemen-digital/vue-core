import type {
  AutocompleteInput,
  Input,
  InputWrapper,
} from '@/types/input.type'

export interface TextareaFieldProps extends Input, AutocompleteInput, InputWrapper {
  /**
   * Whether the textarea is in a loading state.
   * @default false
   */
  isLoading?: boolean
  /**
   * Whether the input is spell check enabled.
   * @default false
   */
  isSpellCheckEnabled?: boolean
  /**
   * The maximum number of characters allowed. When set, a character count
   * is shown in place of the hint.
   * @default null
   */
  maxLength?: number | null
  /**
   * The placeholder text of the textarea.
   * @default null
   */
  placeholder?: string | null

  /**
   * Whether the textarea can be resized.
   * - `'auto-vertical'`: The textarea will resize vertically depending on the content height.
   * - `'none'`: The textarea cannot be resized.
   * - `'vertical'`: The textarea can be resized vertically, but not horizontally.
   * @default 'none'
   */
  resize?: 'auto-vertical' | 'none' | 'vertical'
}
