<script setup lang="ts">
import type { AcceptableInputValue } from 'reka-ui'

import type { DisabledWithReason } from '@/types/disabledWithReason.type'
import BaseRadioGroup from '@/ui/radio-group/base/BaseRadioGroup.vue'

const props = defineProps<{
  id?: string
  isLabelHidden?: boolean
  description?: string | null
  label: string
  value: AcceptableInputValue
} & DisabledWithReason>()
</script>

<template>
  <BaseRadioGroup
    :id="props.id"
    :value="props.value"
    :label="props.label"
    :description="props.description"
    :is-label-hidden="props.isLabelHidden"
    :is-disabled="props.isDisabled"
    :disabled-reason="props.disabledReason"
  />
</template>
