<script setup lang="ts">
import { computed } from 'vue'

import { inputFieldHintStyle } from '@/components/input-field-hint/inputFieldHint.style'

const props = defineProps<{
  hint: null | string
}>()

const style = inputFieldHintStyle()
const hintClasses = computed<string>(() => style.hint())
</script>

<template>
  <!-- TODO: animate -->
  <span
    v-if="props.hint !== null"
    :class="hintClasses"
  >
    {{ props.hint }}
  </span>
</template>
