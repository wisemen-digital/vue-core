import type {
  CustomizableElement,
  GetComponentProp,
} from '@/class-variant/classVariant.type'
import type {
  FormElement,
  InteractableElement,
  TestId,
} from '@/utils/props.util'

export interface TextEditorProps extends TestId, InteractableElement, FormElement, CustomizableElement<'textEditor'> {
  /**
   * Defines the visual style of the input.
   */
  variant?: GetComponentProp<'textField', 'variant'> | null
}

export interface TextEditorEmits {
  (event: 'focus', e: FocusEvent): void
  (event: 'blur', e: FocusEvent): void
}
