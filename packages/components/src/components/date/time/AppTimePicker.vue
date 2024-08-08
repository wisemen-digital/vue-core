<script setup lang="ts">
import '@vuepic/vue-datepicker/dist/main.css'
import '@/components/date/style.css'

import type { DatePickerInstance } from '@vuepic/vue-datepicker'
import VueDatePicker from '@vuepic/vue-datepicker'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import DatePickerActions from '@/components/date/DatePickerActions.vue'
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
  allowTextInput?: boolean
  /**
   * Disable specific times.
   */
  disabledTimes?: ((time: FnParam) => boolean) | TimePickerValue[]
  /**
   * If true, clicking on a date value will automatically select the value.
   */
  enableAutoApply?: boolean
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
  allowTextInput: false,
  enableAutoApply: false,
  enableSeconds: false,
})

const { t } = useI18n()

const modelValue = defineModel<TimePickerValue | null>({
  required: true,
})

const dp = ref<DatePickerInstance | null>(null)

function selectDate(): void {
  dp.value?.selectDate()
}

function closeMenu(): void {
  dp.value?.closeMenu()
}
</script>

<template>
  <VueDatePicker
    :id="props.id ?? undefined"
    ref="dp"
    v-model="modelValue"
    :auto-apply="props.enableAutoApply"
    :clearable="props.hasClearButton"
    :data-testid="props.testId"
    :disabled="props.isDisabled"
    :disabled-times="props.disabledTimes"
    :enable-seconds="props.enableSeconds"
    :invalid="props.isInvalid"
    :max-time="props.maxTime"
    :min-time="props.minTime"
    :minutes-increment="props.minutesIncrement"
    :placeholder="props.placeholder"
    :readonly="props.isReadonly"
    :text-input="props.allowTextInput"
    :arrow-navigation="true"
    :is-24="!props.is12"
    time-picker
  >
    <template #action-buttons>
      <DatePickerActions
        @cancel="closeMenu"
        @select="selectDate"
      >
        <template #cancel-text>
          {{ t('components.calendar.cancel') }}
        </template>
        <template #select-text>
          {{ t('components.calendar.select') }}
        </template>
      </DatePickerActions>
    </template>
  </VueDatePicker>
</template>

<style>
</style>
