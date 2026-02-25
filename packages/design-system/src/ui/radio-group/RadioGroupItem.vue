<script setup lang="ts">
import type { AcceptableInputValue } from 'reka-ui'

import BaseRadioGroup from '@/ui/radio-group/base/BaseRadioGroup.vue'

defineProps<{
  description?: string | null
  isLabelHidden?: boolean
  label: string
  value: AcceptableInputValue
}>()

const emit = defineEmits<{
  blur: []
  focus: []
}>()
</script>

<template>
  <BaseRadioGroup
    :value="value"
    :label="label"
    :description="description"
    :is-label-hidden="isLabelHidden"
    @blur="emit('blur')"
    @focus="emit('focus')"
  />
</template>
