<script setup lang="ts">
import '@vuepic/vue-datepicker/dist/main.css'
import '@/components/date/style.css'

import AppDateRangePicker from '@/components/date-range/AppDateRangePicker.vue'
import FormElement from '@/components/form-element/FormElement.vue'
import type {
  DatePickerHighlightConfig,
  DatePickerMarker,
  DatePickerRangeConfig,
} from '@/types/datePickerConfig.type.ts'
import type { FormFieldErrors } from '@/types/formFieldErrors.type'

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
   *  Whether the input is required.
   */
  isRequired?: boolean
  /**
   * Whether the input is touched.
   */
  isTouched: boolean
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
   * The errors associated with the input.
   */
  errors: FormFieldErrors
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
   * The label of the input.
   */
  label: string
  /**
   * Set datepicker locale: to extract month and weekday names.
   */
  locale?: string
  /**
   * Add markers to the specified dates with (optional) tooltips. For color options, you can use any css valid color.
   */
  markers?: DatePickerMarker[]
  /**
   * Placeholder of the input.
   */
  placeholder?: string
  /**
   * Options configuration for the ranged datepicker.
   */
  rangeConfig: DatePickerRangeConfig
  /**
   * The tooltip of the input.
   */
  tooltip?: string
}>(), {
  hasClearButton: false,
  isDisabled: false,
  isRequired: false,
  allowTextInput: false,
  disableAutoApply: false,
  disableMonthYearPickers: false,
  enableTimePicker: false,
  locale: 'nl',
})

const modelValue = defineModel<[Date, Date] | [string, string] | null>({
  required: true,
})
</script>

<template>
  <FormElement
    v-slot="{ isInvalid }"
    :tooltip="props.tooltip"
    :errors="props.errors"
    :is-required="props.isRequired"
    :is-touched="props.isTouched"
    :is-disabled="props.isDisabled"
    :label="props.label"
  >
    <AppDateRangePicker
      v-model="modelValue"
      :disable-auto-apply="props.disableAutoApply"
      :has-clear-button="props.hasClearButton"
      :disabled="props.isDisabled"
      :disabled-dates="props.disabledDates"
      :disable-month-year-pickers="props.disableMonthYearPickers"
      :enable-time-picker="props.enableTimePicker"
      :flow="props.flow"
      :highlight-config="props.highlightConfig"
      :invalid="isInvalid"
      :locale="props.locale"
      :min-date="props.minDate"
      :markers="props.markers"
      :max-date="props.maxDate"
      :placeholder="props.placeholder"
      :allow-text-input="props.allowTextInput"
      :range-config="props.rangeConfig"
    />
  </FormElement>
</template>

<style>
</style>
