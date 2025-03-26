import type {
  ComputedRef,
  Ref,
} from 'vue'

import type { TextFieldProps } from '@/components/text-field/textField.props'
import type { CreateTextFieldStyle } from '@/components/text-field/textField.style'
import { useContext } from '@/composables/context.composable'
import type { ClassConfig } from '@/customClassVariants'
import type { PropsToComputed } from '@/utils/props.util'

interface TextFieldContext extends PropsToComputed<TextFieldProps> {
  customClassConfig: ComputedRef<ClassConfig<'textField'>>
  modelValue: Ref<string | null>
  style: ComputedRef<CreateTextFieldStyle>
  onBlur: (event: FocusEvent) => void
  onFocus: (event: FocusEvent) => void
}

export const [
  useProvideTextFieldContext,
  useInjectTextFieldContext,
] = useContext<TextFieldContext>('textFieldContext')
