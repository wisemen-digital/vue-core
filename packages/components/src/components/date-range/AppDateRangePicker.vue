<script setup lang="ts">
import type { DateValue } from '@internationalized/date'
import { CalendarDate } from '@internationalized/date'
import {
  type DateRange,
  DateRangePickerRoot,
  useId,
} from 'radix-vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import AppDateRangePickerContent from '@/components/date-range/AppDateRangePickerContent.vue'
import AppDateRangePickerField from '@/components/date-range/AppDateRangePickerField.vue'

const props = withDefaults(defineProps<{
  /**
   * The id of the input.
   * @default null
   */
  id?: null | string
  /**
   * The max date.
   * @default null
   */
  maxDate?: CalendarDate | null
  /**
   * The min date.
   * @default null
   */
  minDate?: CalendarDate | null
  /**
   * Whether the input is disabled.
   * @default false
   */
  isDisabled?: boolean
  /**
   * Whether the input is invalid.
   * @default false
   */
  isInvalid?: boolean
  /**
   * The modelValue of the date picker.
   * @default null
   */
  modelValue: DateRange | null
  /**
   * Number of months to show.
   * @default 2
   */
  numberOfMonths?: number
}>(), {
  id: null,
  maxDate: null,
  minDate: null,
  isDisabled: false,
  isInvalid: false,
  isLoading: false,
  iconLeft: undefined,
  iconRight: undefined,
  numberOfMonths: 2,
  placeholder: null,
  type: 'text',
})

const emit = defineEmits<{
  'blur': []
  'update:modelValue': [DateRange | null]
}>()

const model = computed<DateRange | undefined>({
  get: () => {
    const value = props.modelValue

    return value === null ? undefined : value
  },
  set: (value: DateRange | undefined) => {
    if (value === undefined) {
      return null
    }

    if (props.minDate !== null && value.start !== undefined && value.start.compare(props.minDate) < 0) {
      return emit('update:modelValue', {
        end: value.end,
        start: props.minDate,
      })
    }

    if (props.maxDate !== null && value.end !== undefined && value.end.compare(props.maxDate) > 0) {
      return emit('update:modelValue', {
        end: props.maxDate,
        start: value.start,
      })
    }

    return emit('update:modelValue', value)
  },
})

const { locale } = useI18n()

const id = props.id ?? useId()

const minValue = computed<CalendarDate | undefined>(() => {
  return props.minDate === null ? undefined : props.minDate
})

const maxValue = computed<CalendarDate | undefined>(() => {
  return props.maxDate === null ? undefined : props.maxDate
})

const startDate = computed<Date | null>(() => {
  return model.value?.start === undefined ? null : calendarDateToDate(model.value.start)
})

const endDate = computed<Date | null>(() => {
  return model.value?.end === undefined ? null : calendarDateToDate(model.value.end)
})

function onBlur(): void {
  emit('blur')
}

function dateToCalendarDate(date: Date): CalendarDate {
  return new CalendarDate(date.getFullYear(), date.getMonth() + 1, date.getDate())
}

function calendarDateToDate(calendarDate: DateValue): Date {
  return new Date(calendarDate.year, calendarDate.month - 1, calendarDate.day)
}
</script>

<template>
  <div class="flex flex-col gap-2">
    <DateRangePickerRoot
      :id="id"
      v-model="model"
      :max-value="maxValue"
      :min-value="minValue"
      :number-of-months="props.numberOfMonths"
      :is-date-unavailable="date => date.day === 19"
    >
      <AppDateRangePickerField
        :start-date="startDate"
        :end-date="endDate"
        :is-disabled="props.isDisabled"
        :is-invalid="props.isInvalid"
        @blur="onBlur"
      />

      <AppDateRangePickerContent />
    </DateRangePickerRoot>
  </div>
</template>

<style lang="postcss" scoped>
[data-radix-popper-content-wrapper] {
  @apply z-popover !important;
}
</style>
