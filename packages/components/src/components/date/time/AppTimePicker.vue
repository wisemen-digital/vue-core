<script setup lang="ts">
import '@vuepic/vue-datepicker/dist/main.css'
import '@/components/date/style.css'

import VueDatePicker from '@vuepic/vue-datepicker'

import type {
  TimePickerValue,
} from '@/types/date.type'

type FnParam = (TimePickerValue | undefined)[] | TimePickerValue | TimePickerValue[]

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
   * Disable specific times.
   */
  disabledTimes?: ((time: FnParam) => boolean) | TimePickerValue[]
  /**
   * Wether to enable seconds in the time picker.
   */
  enableSeconds?: boolean
  /**
   * The value which is used to increment minutes via arrows.
   */
  minutesIncrement?: number | string
  /**
   * Placeholder of the input.
   */
  placeholder?: string
}>(), {
  hasClearButton: false,
  is12: false,
  isDisabled: false,
  isInvalid: false,
  isTextInputAllowed: false,
  enableSeconds: false,
})

const modelValue = defineModel<TimePickerValue | null>({
  required: true,
})
</script>

<template>
  <VueDatePicker
    :id="props.id ?? undefined"
    v-model="modelValue"
    :clearable="props.hasClearButton"
    :data-testid="props.testId"
    :disabled="props.isDisabled"
    :disabled-times="props.disabledTimes"
    :enable-seconds="props.enableSeconds"
    :is-24="!props.is12"
    :invalid="props.isInvalid"
    :max-time="props.maxTime"
    :min-time="props.minTime"
    :minutes-increment="props.minutesIncrement"
    :placeholder="props.placeholder"
    :readonly="props.isReadonly"
    :text-input="props.isTextInputAllowed"
    :auto-apply="true"
    :arrow-navigation="true"
    time-picker
  />
</template>

<style>
</style>
