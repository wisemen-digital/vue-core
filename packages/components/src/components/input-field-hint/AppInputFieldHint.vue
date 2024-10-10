<script setup lang="ts">
import { computed } from 'vue'

import { inputFieldHintStyle } from '@/components/input-field-hint/inputFieldHint.style'
import type { StyleConfig } from '@/types/style.type.js'

const props = withDefaults(defineProps<{
  inputId: string
  hint: string
  styleConfig?: StyleConfig<'inputFieldHint'> | null
}>(), {
  styleConfig: null,
})

const style = inputFieldHintStyle()
const hintClasses = computed<string>(() => style.hint())
</script>

<template>
  <span
    :id="`${props.inputId}-hint`"
    :class="hintClasses"
    :style="props.styleConfig"
    aria-live="polite"
    role="alert"
  >
    {{ props.hint }}
  </span>
</template>
