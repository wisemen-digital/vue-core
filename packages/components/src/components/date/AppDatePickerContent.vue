<script setup lang="ts">
import {
  DatePickerArrow,
  DatePickerContent,
} from 'radix-vue'
</script>

<template>
  <DatePickerContent
    :side-offset="4"
    class="rounded-popover bg-popover shadow-popover-shadow will-change-[transform,opacity]"
  >
    <DatePickerArrow class="fill-white" />
    <slot />
  </DatePickerContent>
</template>
