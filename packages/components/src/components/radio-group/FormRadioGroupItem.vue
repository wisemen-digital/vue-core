<script setup lang="ts" generic="T extends string">
import { RadioGroupItem } from 'radix-vue'

const props = defineProps<{
  unstyled?: boolean
  value: T
}>()
</script>

<template>
  <RadioGroupItem
    :value="props.value"
    class="text-left outline-none ring-offset-2 ring-offset-background duration-200 focus:border-primary focus-visible:ring-2 focus-visible:ring-ring"
  >
    <slot />
  </RadioGroupItem>
</template>
