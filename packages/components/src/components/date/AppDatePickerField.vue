<script setup lang="ts">
import { CalendarDate as IntCalendarDate } from '@internationalized/date'
import dayjs from 'dayjs'
import {
  DatePickerField,
  DatePickerTrigger,
} from 'radix-vue'
import { computed, ref } from 'vue'

import AppIconButton from '@/components/button/AppIconButton.vue'
import { useDatePickerStyle } from '@/components/date/datePicker.style'

const props = defineProps<{
  isDisabled?: boolean
  isInvalid?: boolean
  format: string
  modelValue: IntCalendarDate | null | undefined
}>()

const emit = defineEmits<{
  'blur': []
  'dateClick': []
  'update:modelValue': [IntCalendarDate | null]
}>()

function onTriggerClick(): void {
  if (props.isDisabled) {
    return
  }

  emit('dateClick')
}

const dateValue = ref<string>(getInitialValue())

function onBlur(): void {
  const isValidDate = dayjs(dateValue.value, props.format).isValid()

  if (isValidDate) {
    const newDate = dayjs(dateValue.value).toDate()

    emit('update:modelValue', new IntCalendarDate(newDate.getFullYear(), newDate.getMonth() + 1, newDate.getDate()))

    return
  }

  dateValue.value = ''
  emit('update:modelValue', null)
}

const dateModel = computed<string>({
  get: () => {
    if (props.modelValue === null || props.modelValue === undefined) {
      return dateValue.value
    }

    return dayjs(props.modelValue.toString()).format(props.format)
  },
  set: (value: string) => {
    dateValue.value = value
  },
})

const datePickerStyle = useDatePickerStyle()

const pickerFieldClasses = computed<string>(() => datePickerStyle.pickerField({
  isDisabled: props.isDisabled,
  isInvalid: props.isInvalid,
}))

const pickerFieldInputClasses = computed<string>(() => datePickerStyle.pickerFieldInput())

function getInitialValue(): string {
  if (props.modelValue === null || props.modelValue === undefined) {
    return ''
  }

  return dayjs(props.modelValue.toString()).format(props.format)
}
</script>

<template>
  <DatePickerField
    :class="pickerFieldClasses"
  >
    <input
      v-model="dateModel"
      :placeholder="props.format.toLowerCase()"
      :disabled="props.isDisabled"
      :class="pickerFieldInputClasses"
      type="text"
      @blur="onBlur"
    >

    <DatePickerTrigger
      as-child
      @click="onTriggerClick"
    >
      <AppIconButton
        :is-disabled="props.isDisabled"
        label="calendar"
        class="ml-auto"
        variant="ghost"
        size="sm"
        icon="calendar"
      />
    </DatePickerTrigger>
  </DatePickerField>
</template>
