import type {
  InteractableElement,
  PrimitiveElement,
} from '@/utils/props.util'

export interface SharedButtonProps extends PrimitiveElement, InteractableElement {
  /**
   * Indicates whether the button is in a loading state. When true, interactions are disabled.
   * @default false
   */
  isLoading?: boolean
  /**
   * Specifies the button’s type attribute.
   * @default 'button'
   */
  type?: 'button' | 'reset' | 'submit'
}

export interface ButtonEmits {
  (event: 'click', e: MouseEvent): void
  (event: 'focus', e: FocusEvent): void
  (event: 'blur', e: FocusEvent): void
}
