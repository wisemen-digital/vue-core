import {
  type ComputedRef,
  inject,
  type InjectionKey,
  provide,
  type Ref,
} from 'vue'

import type { ClassConfig } from '@/customClassVariants'
import type { CreateTextFieldStyle } from '@/packages/@next/text-field/style/textField.style'
import type { TextFieldProps } from '@/packages/@next/text-field/textField.props'
import type { PropsToComputed } from '@/utils/props.util'

interface TextFieldContext extends PropsToComputed<TextFieldProps> {
  customClassConfig: ComputedRef<ClassConfig<'textField'>>
  modelValue: Ref<string | null>
  style: ComputedRef<CreateTextFieldStyle>
}

const textFieldContextKey: InjectionKey<TextFieldContext> = Symbol('textFieldContext')

export function useProvideTextFieldContext(context: TextFieldContext): void {
  provide(textFieldContextKey, context)
}

export function useInjectTextFieldContext(): TextFieldContext {
  const context = inject(textFieldContextKey)

  if (context === undefined) {
    throw new Error('TextField context is not provided. Make sure to wrap your components in `TextFieldRoot`.')
  }

  return context
}
