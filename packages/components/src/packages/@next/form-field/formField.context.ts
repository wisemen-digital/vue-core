import type {
  ComputedRef,
} from 'vue'

import type { ClassConfig } from '@/customClassVariants'
import type { FormFieldProps } from '@/packages/@next/form-field/formField.props'
import type { CreateFormFieldStyle } from '@/packages/@next/form-field/style/formField.style'
import { useContext } from '@/packages/@next/shared/context.composable'
import type { PropsToComputed } from '@/utils/props.util'

interface FormFieldContext extends PropsToComputed<FormFieldProps> {
  customClassConfig: ComputedRef<ClassConfig<'formField'>>
  style: ComputedRef<CreateFormFieldStyle>

}

export const [
  useProvideFormFieldContext,
  useInjectFormFieldContext,
] = useContext<FormFieldContext>('formFieldContext')
