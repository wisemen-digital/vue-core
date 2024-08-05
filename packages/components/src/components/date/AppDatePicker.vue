<script setup lang="ts">
import '@vuepic/vue-datepicker/dist/main.css'

import VueDatePicker from '@vuepic/vue-datepicker'

import type {
  DatePickerHighlightConfig,
  DatePickerMarker,
} from '@/types/datePickerConfig.type.ts'

const props = withDefaults(defineProps<{
  /**
   * Add a clear icon to the input field where you can set the value to null.
   */
  hasClearButton?: boolean
  /**
   * Disables the input.
   */
  isDisabled?: boolean
  /**
   * When true, will try to parse the date from the user input.
   */
  allowTextInput?: boolean
  /**
   * If false, clicking on a date value will not automatically select the value
   */
  disableAutoApply?: boolean
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
   * Define the selecting order. Position in the array will specify the execution step.
   * @default []
   */
  hideNavigation?: ('calendar' | 'hours' | 'minutes' | 'month' | 'seconds' | 'time' | 'year')[]
  /**
   * Specify highlighted dates
   */
  highlightConfig?: Partial<DatePickerHighlightConfig>
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
   * Sets the input in readonly state.
   */
  readonly?: boolean
}>(), {
  hasClearButton: false,
  isDisabled: false,
  allowTextInput: false,
  disableAutoApply: false,
  enableTimePicker: false,
  mode: 'date',
  multiple: false,
})

const modelValue = defineModel<Date | null>({
  required: true,
})
</script>

<template>
  <VueDatePicker
    v-model="modelValue"
    :text-input="props.allowTextInput"
    :flow="props.flow"
    :clearable="props.hasClearButton"
    :auto-apply="!props.disableAutoApply"
    :partial-flow="!props.disableAutoApply"
    :placeholder="props.placeholder"
    :markers="props.markers"
    :highlight="props.highlightConfig"
    :readonly="props.readonly"
    :disabled="props.isDisabled"
    :multi-dates="props.multiple"
    :hide-navigation="props.hideNavigation"
    :enable-time-picker="props.enableTimePicker"
  />
</template>

<style>
</style>
