<script setup lang="ts">
import '@vuepic/vue-datepicker/dist/main.css'
import '@/components/date/style.css'

import VueDatePicker from '@vuepic/vue-datepicker'

import FormElement from '@/components/form-element/FormElement.vue'
import type { MonthPickerValue } from '@/types/date.type.ts'
import type { DatePickerHighlightConfig } from '@/types/datePickerConfig.type.ts'
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
  allowTextInput: false,
  disableAutoApply: false,
  locale: 'nl',
})

const modelValue = defineModel<MonthPickerValue | null>({
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
    <VueDatePicker
      v-model="modelValue"
      :auto-apply="!props.disableAutoApply"
      :clearable="props.hasClearButton"
      :disabled="props.isDisabled"
      :disabled-dates="props.disabledDates"
      :highlight="props.highlightConfig"
      :invalid="isInvalid"
      :locale="props.locale"
      :min-date="props.minDate"
      :max-date="props.maxDate"
      :placeholder="props.placeholder"
      :text-input="props.allowTextInput"
      month-picker
    />
  </FormElement>
</template>

<style>
</style>
