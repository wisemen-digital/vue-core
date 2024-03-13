<script setup lang="ts">
import { Label } from 'radix-vue'
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  for: string
  isDisabled?: boolean
  isInvalid?: boolean
  isRequired?: boolean
  label: string
}>(), {
  isDisabled: false,
  isInvalid: false,
  isRequired: false,
})

const label = computed<string>(() => {
  if (props.isRequired) {
    return `${props.label} *`
  }

  return props.label
})
</script>

<template>
  <Label :for="props.for">
    <span
      :class="{
        'text-destructive': props.isInvalid,
        'text-muted-foreground': !props.isInvalid,
        'opacity-50': props.isDisabled,
      }"
      class="text-sm duration-200"
    >
      {{ label }}
    </span>
  </Label>
</template>
