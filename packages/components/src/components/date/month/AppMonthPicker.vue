<script setup lang="ts">
import '@vuepic/vue-datepicker/dist/main.css'
import '@/components/date/style.css'

import type { DatePickerInstance } from '@vuepic/vue-datepicker'
import VueDatePicker from '@vuepic/vue-datepicker'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import DatePickerActions from '@/components/date/DatePickerActions.vue'
import type { MonthPickerValue } from '@/types/date.type'
import type { DatePickerHighlightConfig } from '@/types/datePickerConfig.type'

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
   * Disable specific dates.
   */
  disabledDates?: ((date: Date) => boolean) | Date[] | string[]
  /**
   * If true, clicking on a date value will automatically select the value.
   */
  enableAutoApply?: boolean
  /**
   * Specify highlighted dates.
   */
  highlightConfig?: Partial<DatePickerHighlightConfig>
  /**
   * Set datepicker locale: to extract month and weekday names.
   */
  locale?: string
  /**
   * Placeholder of the input.
   */
  placeholder?: string
}>(), {
  hasClearButton: false,
  isDisabled: false,
  isInvalid: false,
  allowTextInput: false,
  enableAutoApply: false,
  locale: 'nl',
})

const { t } = useI18n()

const modelValue = defineModel<MonthPickerValue | null>({
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
    :disabled-dates="props.disabledDates"
    :highlight="props.highlightConfig"
    :invalid="props.isInvalid"
    :locale="props.locale"
    :min-date="props.minDate"
    :max-date="props.maxDate"
    :placeholder="props.placeholder"
    :readonly="props.isReadonly"
    :text-input="props.allowTextInput"
    :month-change-on-arrows="false"
    :arrow-navigation="true"
    month-picker
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
