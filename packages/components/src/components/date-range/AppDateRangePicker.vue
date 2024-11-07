<script setup lang="ts">
import '@vuepic/vue-datepicker/dist/main.css'
import '@/components/date/style.css'

import type { DatePickerInstance } from '@vuepic/vue-datepicker'
import VueDatePicker from '@vuepic/vue-datepicker'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import DatePickerActions from '@/components/date/DatePickerActions.vue'
import type { DatePickerRangeValue } from '@/types/date.type'
import type {
  DatePickerHighlightConfig,
  DatePickerMarker,
  DatePickerRangeConfig,
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
   * Disable specific dates.
   */
  disabledDates?: ((date: Date) => boolean) | Date[] | string[]
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
  /**
   * Options configuration for the ranged datepicker.
   */
  rangeConfig: DatePickerRangeConfig
}>(), {
  hasClearButton: false,
  isDisabled: false,
  isInline: false,
  isInvalid: false,
  isMonthYearPickersDisabled: false,
  isTextInputAllowed: false,
})

const i18n = useI18n()

const modelValue = defineModel<DatePickerRangeValue | null>({
  required: true,
})

const model = computed<[Date, Date] | [string, string] | null>({
  get: () => {
    if (modelValue.value !== null) {
      const { end, start } = modelValue.value

      return [
        start,
        end,
      ] as [Date, Date]
    }

    return null
  },
  set: (value) => {
    if (value !== null) {
      const updatedValue = {
        end: value[1],
        start: value[0],
      }

      modelValue.value = updatedValue
    }
    else {
      modelValue.value = null
    }
  },
})

const dp = ref<DatePickerInstance | null>(null)

function selectDate(): void {
  if (dp.value?.selectDate == null) {
    return
  }

  dp.value.selectDate()
}

function closeMenu(): void {
  if (dp.value?.closeMenu == null) {
    return
  }

  dp.value.closeMenu()
}
</script>

<template>
  <VueDatePicker
    :id="props.id ?? undefined"
    ref="dp"
    v-model="model"
    :auto-apply="false"
    :clearable="props.hasClearButton"
    :data-test-id="props.testId"
    :inline="props.isInline"
    :disabled="props.isDisabled"
    :disabled-dates="props.disabledDates"
    :disable-month-year-select="props.isMonthYearPickersDisabled"
    :highlight="props.highlightConfig"
    :invalid="props.isInvalid"
    :locale="i18n.locale.value"
    :min-date="props.minDate"
    :markers="props.markers"
    :max-date="props.maxDate"
    :placeholder="props.placeholder"
    :readonly="props.isReadonly"
    :text-input="props.isTextInputAllowed"
    :range="{
      ...props.rangeConfig,
      noDisabledRange: props.rangeConfig.hasNoDisabledRange,
    }"
    :arrow-navigation="true"
    :enable-time-picker="false"
    :month-change-on-arrows="false"
  >
    <template #action-buttons>
      <DatePickerActions
        @cancel="closeMenu"
        @select="selectDate"
      >
        <template #cancel-text>
          {{ i18n.t('components.calendar.cancel') }}
        </template>
        <template #select-text>
          {{ i18n.t('components.calendar.select') }}
        </template>
      </DatePickerActions>
    </template>
  </VueDatePicker>
</template>

<style>
</style>
