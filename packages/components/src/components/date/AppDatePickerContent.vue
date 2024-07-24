<script setup lang="ts">
import {
  DatePickerArrow,
  DatePickerContent,
} from 'radix-vue'

const emit = defineEmits<{
  blur: []
}>()

function onBlur(): void {
  emit('blur')
}
</script>

<template>
  <DatePickerContent
    :side-offset="4"
    class="rounded-popover bg-popover shadow-popover-shadow will-change-[transform,opacity]"
    @interact-outside="onBlur"
  >
    <DatePickerArrow class="fill-white" />
    <slot />
  </DatePickerContent>
</template>
