import type { GetComponentPropCustomValues } from '@/customClassVariants'
import type {
  CustomizableElement,
  FormElement,
} from '@/utils/props.util'

export interface FormFieldProps extends FormElement, CustomizableElement<'formField'> {
  /**
   * The unique identifier of the associated form field.
   * This is typically used to link the label to the corresponding input element.
   */
  for: string
  /**
   *
   */
  layout?: 'horizontal' | 'vertical'
  /**
   *
   */
  variant?: GetComponentPropCustomValues<'formField', 'variant'> | null
}
