<script setup lang="ts">
import { ComboboxTrigger } from 'radix-vue'

import AppIcon from '../icon/AppIcon.vue'

const props = defineProps<{
  isDisabled: boolean
}>()
</script>

<template>
  <ComboboxTrigger
    :disabled="props.isDisabled"
    :class="{
      'cursor-not-allowed opacity-50': props.isDisabled,
    }"
    class="box-content p-3 outline-none"
  >
    <AppIcon
      icon="chevronDown"
      size="sm"
      class="text-muted-foreground"
    />
  </ComboboxTrigger>
</template>
