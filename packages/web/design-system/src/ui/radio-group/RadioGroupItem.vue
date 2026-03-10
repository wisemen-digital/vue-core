<script setup lang="ts">
import type { AcceptableInputValue } from 'reka-ui'

import BaseRadioGroup from '@/ui/radio-group/base/BaseRadioGroup.vue'

const props = defineProps<{
  isDisabled?: boolean
  description?: string | null
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
    :value="props.value"
    :label="props.label"
    :description="props.description"
    :is-disabled="props.isDisabled"
    @blur="emit('blur')"
    @focus="emit('focus')"
  />
</template>
