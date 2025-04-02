import type { GetComponentPropCustomValues } from '@/customClassVariants'
import type {
  CustomizableElement,
  FormElement,
  InteractableElement,
  PrimitiveElement,
} from '@/utils/props.util'

export interface TextareaProps extends PrimitiveElement, InteractableElement, FormElement, CustomizableElement<'textarea'> {
  /**
   * Whether the input is spell check enabled.
   * @default false
   */
  isSpellCheckEnabled?: boolean
  /**
   * The autocomplete property of the input.
   * @default 'off'
   */
  autocomplete?: 'off' | 'on'
  /**
   * The placeholder text of the input.
   * @default null
   */
  placeholder?: string | null
  /**
   * Whether the textarea can be resized.
   * - `’auto-vertical’`: The textarea will resize vertically depending on the content height.
   * - `’both’`: The textarea can be resized vertically and horizontally.
   * - `’horizontal’`: The textarea can be resized horizontally, but not vertically.
   * - `’none’`: The textarea cannot be resized.
   * - `’vertical’`: The textarea can be resized vertically, but not horizontally.
   * @default 'none'
   */
  resize?: 'auto-vertical' | 'both' | 'horizontal' | 'none' | 'vertical'
  /**
   *
   */
  variant?: GetComponentPropCustomValues<'textField', 'variant'> | null
}
