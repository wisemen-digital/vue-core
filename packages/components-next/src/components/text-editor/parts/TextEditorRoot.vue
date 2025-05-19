<script setup lang="ts">
import { computed } from 'vue'

import type { ResolvedClassConfig } from '@/class-variant/classVariant.type'
import { getCustomComponentVariant } from '@/class-variant/customClassVariants'
import { useProvideTextEditorContext } from '@/components/text-editor/textEditor.context'
import type {
  TextEditorEmits,
  TextEditorProps,
} from '@/components/text-editor/textEditor.props'
import type { CreateTextEditorStyle } from '@/components/text-editor/textEditor.style'
import { createTextEditorStyle } from '@/components/text-editor/textEditor.style'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import { toComputedRefs } from '@/utils/props.util'

const props = withDefaults(defineProps<TextEditorProps>(), {
  id: null,
  testId: null,
  isDisabled: false,
  isRequired: false,
  isTouched: false,
  classConfig: null,
  errorMessage: null,
  hint: null,
  label: null,
})

const emit = defineEmits<TextEditorEmits>()

const modelValue = defineModel<string | null>({ required: true })

const { theme } = injectThemeProviderContext()

const textEditorStyle = computed<CreateTextEditorStyle>(
  () => createTextEditorStyle({ variant: props.variant ?? undefined }),
)

const customClassConfig = computed<ResolvedClassConfig<'textEditor'>>(
  () => getCustomComponentVariant('textEditor', theme.value, { variant: props.variant }),
)

function onBlur(event: FocusEvent): void {
  emit('blur', event)
}

function onFocus(event: FocusEvent): void {
  emit('focus', event)
}

useProvideTextEditorContext({
  ...toComputedRefs(props),
  customClassConfig,
  modelValue,
  style: textEditorStyle,
  onBlur,
  onFocus,
})
</script>

<template>
  <slot />
</template>
