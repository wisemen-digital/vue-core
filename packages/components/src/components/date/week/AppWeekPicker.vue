<script setup lang="ts">
import '@vuepic/vue-datepicker/dist/main.css'
import '@/components/date/style.css'

import VueDatePicker from '@vuepic/vue-datepicker'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import type { WeekPickerValue } from '@/types/date.type'
import type {
  DatePickerHighlightConfig,
  DatePickerMarker,
} from '@/types/datePickerConfig.type'

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
   * Whether the input is inline.
   */
  isInline?: boolean
  /**
   * Set an invalid state to the input.
   */
  isInvalid?: boolean
  /**
   * If true, removes the month and year picker.
   */
  isMonthYearPickersDisabled?: boolean
  /**
   * Sets the input in readonly state.
   */
  isReadonly?: boolean
  /**
   * When true, will try to parse the date from the user input.
   */
  isTextInputAllowed?: boolean
  /**
   * Disable teleporting the datepicker to the body.
   */
  disableTeleport?: boolean
  /**
   * Disable specific dates.
   */
  disabledDates?: ((date: Date) => boolean) | Date[]
  /**
   * Define the selecting order. Position in the array will specify the execution step.
   * @default []
   */
  flow?: ('calendar' | 'hours' | 'minutes' | 'month' | 'seconds' | 'time' | 'year')[]
  /**
   * Format of the input.
   */
  format?: string
  /**
   * Specify highlighted dates.
   */
  highlightConfig?: Partial<DatePickerHighlightConfig>
  /**
   * Add markers to the specified dates with (optional) tooltips. For color options, you can use any css valid color.
   */
  markers?: DatePickerMarker[]
  /**
   * Placeholder of the input.
   */
  placeholder?: string
}>(), {
  id: null,
  hasClearButton: false,
  isDisabled: false,
  isInline: false,
  isInvalid: false,
  isMonthYearPickersDisabled: false,
  isTextInputAllowed: false,
  disableTeleport: false,
  format: 'dd/MM/yyyy - dd/MM/yyyy',
})

const i18n = useI18n()

const modelValue = defineModel<WeekPickerValue | null>({
  required: true,
})

const computedModelValue = computed<Date[] | null>({
  get: () => {
    if (modelValue.value === null) {
      return null
    }

    return [
      new Date(modelValue.value.start),
      new Date(modelValue.value.end),
    ]
  },
  set: (value: Date[] | null) => {
    if (value === null) {
      modelValue.value = null

      return
    }

    modelValue.value = {
      end: value[1],
      start: value[0],
    }
  },
})
</script>

<template>
  <VueDatePicker
    :id="props.id ?? undefined"
    v-model="computedModelValue"
    :clearable="props.hasClearButton"
    :data-testid="props.testId"
    :disabled="props.isDisabled"
    :disabled-dates="props.disabledDates"
    :teleport="!props.disableTeleport"
    :disable-month-year-select="props.isMonthYearPickersDisabled"
    :flow="props.flow"
    :highlight="props.highlightConfig"
    :invalid="props.isInvalid"
    :locale="i18n.locale.value"
    :min-date="props.minDate"
    :enable-time-picker="false"
    :week-picker="true"
    :markers="props.markers"
    :max-date="props.maxDate"
    :placeholder="props.placeholder"
    :inline="props.isInline"
    :readonly="props.isReadonly"
    :text-input="props.isTextInputAllowed"
    :arrow-navigation="true"
    :auto-apply="true"
    :month-change-on-arrows="false"
    :partial-flow="true"
    :format="props.format"
  />
</template>

<style>
</style>
