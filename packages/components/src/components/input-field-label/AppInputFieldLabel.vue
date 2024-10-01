<script setup lang="ts">
import { computed } from 'vue'

import { inputFieldLabelStyle } from '@/components/input-field-label/inputFieldLabel.style'

const props = defineProps<{
  isRequired: boolean
  for: string
  label: null | string
}>()

const style = inputFieldLabelStyle()
const labelClasses = computed<string>(() => style.label())
</script>

<template>
  <!-- TODO: animate -->
  <label
    v-if="props.label !== null"
    :class="labelClasses"
    :for="props.for"
  >
    {{ props.label }} <template v-if="props.isRequired">*</template>
  </label>
</template>
