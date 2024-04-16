<script setup lang="ts">
import { SelectValue } from 'radix-vue'

const props = defineProps<{
  isEmpty: boolean
}>()
</script>

<template>
  <SelectValue
    :class="{
      'text-input-placeholder': props.isEmpty,
    }"
    class="w-full truncate px-3 text-left text-sm"
  >
    <slot />
  </SelectValue>
</template>
