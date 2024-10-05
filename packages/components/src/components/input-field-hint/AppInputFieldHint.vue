<script setup lang="ts">
import { computed } from 'vue'

import { inputFieldHintStyle } from '@/components/input-field-hint/inputFieldHint.style'
import type { StyleConfig } from '@/types/style.type.js'

const props = withDefaults(defineProps<{
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
    :class="hintClasses"
    :style="props.styleConfig"
  >
    {{ props.hint }}
  </span>
</template>
