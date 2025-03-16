import {
  type ComputedRef,
  inject,
  type InjectionKey,
  provide,
} from 'vue'

import type { ClassConfig } from '@/customClassVariants'
import type { FormFieldProps } from '@/packages/@next/form-field/formField.props'
import type { CreateFormFieldStyle } from '@/packages/@next/form-field/style/formField.style'
import type { PropsToComputed } from '@/utils/props.util'

interface FormFieldContext extends PropsToComputed<FormFieldProps> {
  customClassConfig: ComputedRef<ClassConfig<'formField'>>
  style: ComputedRef<CreateFormFieldStyle>

}

const formFieldContextKey: InjectionKey<FormFieldContext> = Symbol('formFieldContext')

export function useProvideFormFieldContext(context: FormFieldContext): void {
  provide(formFieldContextKey, context)
}

export function useInjectFormFieldContext(): FormFieldContext {
  const context = inject(formFieldContextKey)

  if (context === undefined) {
    throw new Error('FormField context is not provided. Make sure to wrap your components in `FormFieldRoot`.')
  }

  return context
}
