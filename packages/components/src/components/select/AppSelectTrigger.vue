<script setup lang="ts">
import { SelectTrigger } from 'radix-vue'

const props = withDefaults(defineProps<{
  id?: null | string
  isDisabled?: boolean
  isInvalid?: boolean
}>(), {
  id: null,
  isDisabled: false,
  isInvalid: false,
})
</script>

<template>
  <SelectTrigger
    :id="props.id"
    :class="{
      'border-input-border focus-visible:ring-ring': !props.isInvalid,
      'border-destructive focus-visible:ring-destructive': props.isInvalid,
      'cursor-not-allowed opacity-50': props.isDisabled,
    }"
    class="flex h-10 w-full items-center justify-between rounded-input border border-solid bg-input ring-offset-background duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
  >
    <slot />
  </SelectTrigger>
</template>
