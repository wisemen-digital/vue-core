<script setup lang="ts">
import '@vuepic/vue-datepicker/dist/main.css'
import '@/components/date/style.css'

import VueDatePicker from '@vuepic/vue-datepicker'

import type { MonthPickerValue } from '@/types/date.type.ts'
import type {
  DatePickerHighlightConfig,
} from '@/types/datePickerConfig.type.ts'

const props = withDefaults(defineProps<{
  /**
   * All dates after the given date will be disabled.
   */
  maxDate?: Date | string
  /**
   * All dates before the given date will be disabled.
   */
  minDate?: Date | string
  /**
   * Add a clear icon to the input field where you can set the value to null.
   */
  hasClearButton?: boolean
  /**
   * Disables the input.
   */
  isDisabled?: boolean
  /**
   * Set an invalid state to the input.
   */
  isInvalid?: boolean
  /**
   * Sets the input in readonly state.
   */
  isReadonly?: boolean
  /**
   * When true, will try to parse the date from the user input.
   */
  allowTextInput?: boolean
  /**
   * If false, clicking on a date value will not automatically select the value.
   */
  disableAutoApply?: boolean
  /**
   * Disable specific dates.
   */
  disabledDates?: ((date: Date) => boolean) | Date[] | string[]
  /**
   * Specify highlighted dates.
   */
  highlightConfig?: Partial<DatePickerHighlightConfig>
  /**
   * Set datepicker locale: to extract month and weekday names.
   */
  locale?: string
  /**
   * Placeholder of the input.
   */
  placeholder?: string
}>(), {
  hasClearButton: false,
  isDisabled: false,
  isInvalid: false,
  allowTextInput: false,
  disableAutoApply: false,
  locale: 'nl',
  mode: 'date',
})

const modelValue = defineModel<MonthPickerValue | null>({
  required: true,
})
</script>

<template>
  <VueDatePicker
    v-model="modelValue"
    :auto-apply="!props.disableAutoApply"
    :clearable="props.hasClearButton"
    :disabled="props.isDisabled"
    :disabled-dates="props.disabledDates"
    :highlight="props.highlightConfig"
    :invalid="props.isInvalid"
    :locale="props.locale"
    :min-date="props.minDate"
    :max-date="props.maxDate"
    :partial-flow="!props.disableAutoApply"
    :placeholder="props.placeholder"
    :readonly="props.isReadonly"
    :text-input="props.allowTextInput"
    month-picker
  />
</template>

<style>
</style>
