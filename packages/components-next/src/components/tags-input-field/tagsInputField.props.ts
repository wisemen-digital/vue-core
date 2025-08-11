import type {
  CustomizableElement,
  GetComponentProp,
} from '@/class-variant/classVariant.type'
import type {
  FormElement,
  InteractableElement,
  TestId,
} from '@/utils/props.util'

export interface TagsInputFieldProps extends TestId, InteractableElement, FormElement, CustomizableElement<'tagsInputField'> {
  /**
   * The placeholder text of the input.
   */
  placeholder?: string
  /**
   * Defines the visual style of the tagsInputField.
   */
  variant?: GetComponentProp<'tagsInputField', 'variant'> | null
}

export interface TagsInputFieldEmits {
  (event: 'focus', e: FocusEvent): void
  (event: 'blur', e: FocusEvent): void
}
