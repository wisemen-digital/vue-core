<script setup lang="ts">
import type { AcceptableInputValue } from 'reka-ui'

import BaseRadioGroup from '@/ui/radio-group/base/BaseRadioGroup.vue'

const props = defineProps<{
  isDisabled?: boolean
  isLabelHidden?: boolean
  description?: string | null
  disabledReason?: string | null
  label: string
  value: AcceptableInputValue
}>()
</script>

<template>
  <BaseRadioGroup
    :value="props.value"
    :label="props.label"
    :description="props.description"
    :is-label-hidden="props.isLabelHidden"
    :is-disabled="props.isDisabled"
    :disabled-reason="props.disabledReason"
  />
</template>
