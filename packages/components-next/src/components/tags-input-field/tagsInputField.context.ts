import type {
  ComputedRef,
  Ref,
} from 'vue'

import type { ResolvedClassConfig } from '@/class-variant/classVariant.type'
import type { TagsInputFieldProps } from '@/components/tags-input-field/tagsInputField.props'
import type { CreateTagsInputFieldStyle } from '@/components/tags-input-field/tagsInputField.style'
import { useContext } from '@/composables/context/context.composable'
import type { PropsToComputed } from '@/utils/props.util'

interface TagsInputFieldContext extends PropsToComputed<TagsInputFieldProps> {
  customClassConfig: ComputedRef<ResolvedClassConfig<'tagsInputField'>>
  modelValue: Ref<string[]>
  style: ComputedRef<CreateTagsInputFieldStyle>
  onBlur: (event: FocusEvent) => void
  onFocus: (event: FocusEvent) => void
}

export const [
  useProvideTagsInputFieldContext,
  useInjectTagsInputFieldContext,
] = useContext<TagsInputFieldContext>('tagsInputFieldContext')
