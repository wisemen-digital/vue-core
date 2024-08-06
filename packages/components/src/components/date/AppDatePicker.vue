<script setup lang="ts">
import '@vuepic/vue-datepicker/dist/main.css'
import '@/components/date/style.css'

import VueDatePicker from '@vuepic/vue-datepicker'

import type {
  DatePickerHighlightConfig,
  DatePickerMarker,
} from '@/types/datePickerConfig.type.ts'

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
   * If true, removes the month and year picker.
   */
  disableMonthYearPickers?: boolean
  /**
   * Disable specific dates.
   */
  disabledDates?: ((date: Date) => boolean) | Date[] | string[]
  /**
   * Whether the time picker is also enabled or not.
   */
  enableTimePicker?: boolean
  /**
   * Define the selecting order. Position in the array will specify the execution step.
   * @default []
   */
  flow?: ('calendar' | 'hours' | 'minutes' | 'month' | 'seconds' | 'time' | 'year')[]
  /**
   * Specify highlighted dates.
   */
  highlightConfig?: Partial<DatePickerHighlightConfig>
  /**
   * Set datepicker locale: to extract month and weekday names.
   */
  locale?: string
  /**
   * Add markers to the specified dates with (optional) tooltips. For color options, you can use any css valid color.
   */
  markers?: DatePickerMarker[]
  /**
   * Allow selecting multiple single dates. When changing time, the latest selected date is affected.
   */
  multiple?: boolean
  /**
   * Placeholder of the input.
   */
  placeholder?: string
}>(), {
  id: null,
  hasClearButton: false,
  isDisabled: false,
  isInvalid: false,
  allowTextInput: false,
  disableAutoApply: false,
  disableMonthYearPickers: false,
  enableTimePicker: false,
  locale: 'nl',
  mode: 'date',
  multiple: false,
})

const modelValue = defineModel<Date | null>({
  required: true,
})
</script>

<template>
  <VueDatePicker
    :id="props.id ?? undefined"
    v-model="modelValue"
    :auto-apply="!props.disableAutoApply"
    :clearable="props.hasClearButton"
    :data-testid="props.testId"
    :disabled="props.isDisabled"
    :disabled-dates="props.disabledDates"
    :disable-month-year-select="props.disableMonthYearPickers"
    :enable-time-picker="props.enableTimePicker"
    :flow="props.flow"
    :highlight="props.highlightConfig"
    :invalid="props.isInvalid"
    :locale="props.locale"
    :min-date="props.minDate"
    :markers="props.markers"
    :max-date="props.maxDate"
    :multi-dates="props.multiple"
    :partial-flow="!props.disableAutoApply"
    :placeholder="props.placeholder"
    :readonly="props.isReadonly"
    :text-input="props.allowTextInput"
  />
</template>

<style>
</style>
