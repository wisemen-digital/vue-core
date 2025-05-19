import type {
  ComputedRef,
  Ref,
} from 'vue'

import type { ResolvedClassConfig } from '@/class-variant/classVariant.type'
import type { TextEditorProps } from '@/components/text-editor/textEditor.props'
import type { CreateTextEditorStyle } from '@/components/text-editor/textEditor.style'
import { useContext } from '@/composables/context/context.composable'
import type { PropsToComputed } from '@/utils/props.util'

interface TextEditorContext extends PropsToComputed<TextEditorProps> {
  customClassConfig: ComputedRef<ResolvedClassConfig<'textEditor'>>
  modelValue: Ref<string | null>
  style: ComputedRef<CreateTextEditorStyle>
  onBlur: (event: FocusEvent) => void
  onFocus: (event: FocusEvent) => void
}

export const [
  useProvideTextEditorContext,
  useInjectTextEditorContext,
] = useContext<TextEditorContext>('textEditorContext')
