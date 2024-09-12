<script setup lang="ts">
import '@vuepic/vue-datepicker/dist/main.css'
import '@/components/date/style.css'

import VueDatePicker from '@vuepic/vue-datepicker'

import { useDatePickerLocale } from '@/components/date/datePickerLocale.composable'
import type { MonthPickerValue } from '@/types/date.type'
import type { DatePickerHighlightConfig } from '@/types/datePickerConfig.type'

const props = withDefaults(defineProps<{
  /**
   * The id of the input.
   * @default null
   */
  id?: null | string
  /**
   * The test id of the input.
   * @default undefined
   */
  testId?: string
  /**
   * All dates after the given date will be disabled.
   */
  maxDate?: Date
  /**
   * All dates before the given date will be disabled.
   */
  minDate?: Date
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
  isTextInputAllowed?: boolean
  /**
   * Disable specific dates.
   */
  disabledDates?: ((date: Date) => boolean) | Date[]
  /**
   * Specify highlighted dates.
   */
  highlightConfig?: Partial<DatePickerHighlightConfig>
  /**
   * Placeholder of the input.
   */
  placeholder?: string
}>(), {
  hasClearButton: false,
  isDisabled: false,
  isInvalid: false,
  isTextInputAllowed: false,
})

const datePickerLocale = useDatePickerLocale()

const modelValue = defineModel<MonthPickerValue | null>({
  required: true,
})
</script>

<template>
  <VueDatePicker
    :id="props.id ?? undefined"
    v-model="modelValue"
    :clearable="props.hasClearButton"
    :data-test-id="props.testId"
    :disabled="props.isDisabled"
    :disabled-dates="props.disabledDates"
    :highlight="props.highlightConfig"
    :invalid="props.isInvalid"
    :min-date="props.minDate"
    :max-date="props.maxDate"
    :placeholder="props.placeholder"
    :readonly="props.isReadonly"
    :text-input="props.isTextInputAllowed"
    :arrow-navigation="true"
    :format-locale="datePickerLocale.current.value"
    :auto-apply="true"
    :month-change-on-arrows="false"
    month-picker
  />
</template>

<style>
</style>
