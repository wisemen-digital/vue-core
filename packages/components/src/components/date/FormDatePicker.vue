<script setup lang="ts">
import AppDatePicker from '@/components/date/AppDatePicker.vue'
import FormElement from '@/components/form-element/FormElement.vue'
import { useComponentAttrs } from '@/composables/componentAttrs.composable'
import type {
  DatePickerHighlightConfig,
  DatePickerMarker,
} from '@/types/datePickerConfig.type'
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
   * If true, clicking on a date value will automatically select the value.
   */
  enableAutoApply?: boolean
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
   * Allow selecting multiple single dates. When changing time, the latest selected date is affected.
   */
  multiple?: boolean
  /**
   * Placeholder of the input.
   */
  placeholder?: string
  /**
   * The tooltip of the input.
   */
  tooltip?: string
}>(), {
  hasClearButton: false,
  isDisabled: false,
  isRequired: false,
  isTouched: false,
  allowTextInput: false,
  disableMonthYearPickers: false,
  enableAutoApply: false,
  enableTimePicker: false,
  locale: 'nl',
  mode: 'date',
  multiple: false,
})

const model = defineModel<Date | null>({
  required: true,
})

const { classAttr, otherAttrs } = useComponentAttrs()
</script>

<template>
  <FormElement
    v-slot="{ isInvalid, id }"
    :tooltip="props.tooltip"
    :class="classAttr"
    :errors="props.errors"
    :is-required="props.isRequired"
    :is-touched="props.isTouched"
    :is-disabled="props.isDisabled"
    :label="props.label"
  >
    <AppDatePicker
      :id="id"
      v-model="model"
      v-bind="otherAttrs"
      :allow-text-input="props.allowTextInput"
      :disabled="props.isDisabled"
      :disabled-dates="props.disabledDates"
      :disable-month-year-pickers="props.disableMonthYearPickers"
      :enable-auto-apply="props.enableAutoApply"
      :enable-time-picker="props.enableTimePicker"
      :flow="props.flow"
      :has-clear-button="props.hasClearButton"
      :highlight-config="props.highlightConfig"
      :is-invalid="isInvalid"
      :locale="props.locale"
      :min-date="props.minDate"
      :markers="props.markers"
      :max-date="props.maxDate"
      :multiple="props.multiple"
      :placeholder="props.placeholder"
      :test-id="props.testId"
    />
  </FormElement>
</template>
