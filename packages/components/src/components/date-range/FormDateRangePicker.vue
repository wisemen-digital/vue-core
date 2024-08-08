<script setup lang="ts">
import '@vuepic/vue-datepicker/dist/main.css'
import '@/components/date/style.css'

import AppDateRangePicker from '@/components/date-range/AppDateRangePicker.vue'
import FormElement from '@/components/form-element/FormElement.vue'
import type { DatePickerRangeValue } from '@/types/date.type'
import type {
  DatePickerHighlightConfig,
  DatePickerMarker,
  DatePickerRangeConfig,
} from '@/types/datePickerConfig.type.ts'
import type { FormFieldErrors } from '@/types/formFieldErrors.type'

const props = withDefaults(defineProps<{
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
   * If true, removes the month and year picker.
   */
  disableMonthYearPickers?: boolean
  /**
   * Disable specific dates.
   */
  disabledDates?: ((date: Date) => boolean) | Date[] | string[]
  /**
   * The errors associated with the input.
   */
  errors: FormFieldErrors
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
  locale: 'nl',
})

const modelValue = defineModel<DatePickerRangeValue | null>({
  required: true,
})
</script>

<template>
  <FormElement
    v-slot="{ isInvalid, id }"
    :tooltip="props.tooltip"
    :errors="props.errors"
    :is-required="props.isRequired"
    :is-touched="props.isTouched"
    :is-disabled="props.isDisabled"
    :label="props.label"
  >
    <AppDateRangePicker
      :id="id"
      v-model="modelValue"
      :allow-text-input="props.allowTextInput"
      :disabled-dates="props.disabledDates"
      :disable-month-year-pickers="props.disableMonthYearPickers"
      :has-clear-button="props.hasClearButton"
      :highlight-config="props.highlightConfig"
      :is-disabled="props.isDisabled"
      :invalid="isInvalid"
      :locale="props.locale"
      :min-date="props.minDate"
      :markers="props.markers"
      :max-date="props.maxDate"
      :placeholder="props.placeholder"
      :range-config="props.rangeConfig"
      :test-id="props.testId"
    />
  </FormElement>
</template>

<style>
</style>
