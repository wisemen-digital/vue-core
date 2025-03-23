import type {
  ComputedRef,
  Ref,
} from 'vue'

import type { ClassConfig } from '@/customClassVariants'
import { useContext } from '@/packages/@next/shared/context.composable'
import type { CreateTextFieldStyle } from '@/packages/@next/text-field/style/textField.style'
import type { TextFieldProps } from '@/packages/@next/text-field/textField.props'
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
