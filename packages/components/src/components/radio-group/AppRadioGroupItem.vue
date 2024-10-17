<script setup lang="ts">
import { RadioGroupItem } from 'reka-ui'

import AppRadioGroupIndicator from '@/components/radio-group/AppRadioGroupIndicator.vue'

const props = defineProps<{
  id: string
  value: string
}>()
</script>

<template>
  <RadioGroupItem
    :id="props.id"
    :value="props.value"
  >
    <slot>
      <AppRadioGroupIndicator />
    </slot>
  </RadioGroupItem>
</template>
