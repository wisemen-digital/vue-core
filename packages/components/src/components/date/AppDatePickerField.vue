<script setup lang="ts">
import dayjs from 'dayjs'
import {
  DatePickerField,
  DatePickerTrigger,
} from 'radix-vue'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import AppIconButton from '@/components/button/AppIconButton.vue'
import { useDatePickerStyle } from '@/components/date/datePicker.style'

const props = defineProps<{
  isDisabled?: boolean
  isInvalid?: boolean
  format: string
  maxValue: Date | null
  minValue: Date | null
  modelValue: Date | null | undefined
}>()

const emit = defineEmits<{
  'blur': []
  'dateClick': []
  'update:modelValue': [Date | null]
}>()

const { locale } = useI18n()

function onTriggerClick(): void {
  if (props.isDisabled) {
    return
  }

  emit('dateClick')
}

const initialValue = props.modelValue === null || props.modelValue === undefined ? '' : dayjs(props.modelValue).format(props.format)

const dateValue = ref<string>(initialValue)

function onBlur(): void {
  const isValidDate = dayjs(dateValue.value).isValid()

  if (!isValidDate) {
    dateValue.value = ''
    emit('update:modelValue', null)

    return
  }

  const date = dayjs(dateValue.value, undefined, locale.value)

  emit('blur')

  if (props.minValue !== null && date.isBefore(props.minValue)) {
    emit('update:modelValue', props.minValue)

    return
  }

  if (props.maxValue !== null && date.isAfter(props.maxValue)) {
    emit('update:modelValue', props.maxValue)

    return
  }

  emit('update:modelValue', date.toDate())
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
