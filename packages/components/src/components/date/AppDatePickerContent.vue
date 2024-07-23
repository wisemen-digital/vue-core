<script setup lang="ts">
import {
  DatePickerArrow,
  DatePickerContent,
} from 'radix-vue'
import { computed } from 'vue'

import { useDatePickerStyle } from '@/components/date/datePicker.style'

const emit = defineEmits<{
  blur: []
}>()

const datePickerStyle = useDatePickerStyle()

const pickerContentClasses = computed<string>(() => datePickerStyle.pickerContent())
const pickerContentArrowClasses = computed<string>(() => datePickerStyle.pickerContentArrow())

function onBlur(): void {
  emit('blur')
}
</script>

<template>
  <DatePickerContent
    :side-offset="4"
    :class="pickerContentClasses"
    @interact-outside="onBlur"
  >
    <DatePickerArrow :class="pickerContentArrowClasses" />
    <slot />
  </DatePickerContent>
</template>
