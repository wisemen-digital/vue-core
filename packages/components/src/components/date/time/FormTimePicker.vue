<script setup lang="ts">
import '@vuepic/vue-datepicker/dist/main.css'
import '@/components/date/style.css'

import FormElement from '@/components/form-element/FormElement.vue'
import type {
  TimePickerValue,
} from '@/types/date.type'
import type { FormFieldErrors } from '@/types/formFieldErrors.type'

import AppTimePicker from './AppTimePicker.vue'

type FnParam = (TimePickerValue | undefined)[] | TimePickerValue | TimePickerValue[]

const props = withDefaults(defineProps<{
  /**
   * The test id of the input.
   * @default undefined
   */
  testId?: string
  /**
   * Sets the maximal available time to pick.
   */
  maxTime?: TimePickerValue
  /**
   * Sets the minimal available time to pick.
   */
  minTime?: TimePickerValue
  /**
   * Add a clear icon to the input field where you can set the value to null.
   */
  hasClearButton?: boolean
  /**
   * Wether to use 12H mode.
   */
  is12?: boolean
  /**
   * Disables the input.
   */
  isDisabled?: boolean
  /**
   *  Whether the input is required.
   */
  isRequired?: boolean
  /**
   * When true, will try to parse the date from the user input.
   */
  isTextInputAllowed?: boolean
  /**
   * Whether the input is touched.
   */
  isTouched: boolean
  /**
   * Disable specific times.
   */
  disabledTimes?: ((time: FnParam) => boolean) | TimePickerValue[]
  /**
   * Wether to enable seconds in the time picker.
   */
  enableSeconds?: boolean
  /**
   * The errors associated with the input.
   */
  errors: FormFieldErrors
  /**
   * The label of the input.
   */
  label: string
  /**
   * The value which is used to increment minutes via arrows.
   */
  minutesIncrement?: number | string
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
  is12: false,
  isDisabled: false,
  isRequired: false,
  isTextInputAllowed: false,
  enableSeconds: false,
})

const modelValue = defineModel<TimePickerValue | null>({
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
    <AppTimePicker
      :id="id"
      v-model="modelValue"
      :test-id="props.testId"
      :max-time="props.maxTime"
      :min-time="props.minTime"
      :has-clear-button="props.hasClearButton"
      :is12="props.is12"
      :is-disabled="props.isDisabled"
      :is-invalid="isInvalid"
      :is-text-input-allowed="props.isTextInputAllowed"
      :disabled-times="props.disabledTimes"
      :enable-seconds="props.enableSeconds"
      :minutes-increment="props.minutesIncrement"
      :placeholder="props.placeholder"
    />
  </FormElement>
</template>

<style>
</style>
