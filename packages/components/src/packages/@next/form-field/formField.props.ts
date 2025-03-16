import type {
  CustomizableElement,
  FormElement,
} from '@/utils/props.util'

export interface FormFieldProps extends FormElement, CustomizableElement<'formField'> {
  for: string
}
