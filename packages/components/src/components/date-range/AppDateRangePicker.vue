<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'
import {
  type DateRange,
  DateRangePickerRoot,
  useId,
} from 'radix-vue'
import {
  computed,
  ref,
} from 'vue'
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

const minDate = computed<CalendarDate | undefined>(() => {
  if (props.minDate === null) {
    return undefined
  }

  return props.minDate
})

const maxDate = computed<CalendarDate | undefined>(() => {
  if (props.maxDate === null) {
    return undefined
  }

  return props.maxDate
})

function onBlur(): void {
  emit('blur')
}

const isYearPickerVisible = ref<boolean>(false)
const isMonthPickerVisible = ref<boolean>(false)

function onShowYearPickerButtonClick(): void {
  isYearPickerVisible.value = true
  isMonthPickerVisible.value = false
}

function onShowMonthPickerButtonClick(): void {
  isMonthPickerVisible.value = true
  isYearPickerVisible.value = false
}

function onMonthSelect(month: number, year: number): void {
  model.value = new CalendarDate(year ?? new Date().getFullYear(), month, model.value?.day ?? new Date().getDate())

  isMonthPickerVisible.value = false
}

function onTriggerClick(): void {
  if (props.isDisabled) {
    return
  }

  isYearPickerVisible.value = false
  isMonthPickerVisible.value = false
}

function onYearSelect(number: number): void {
  if (model.value === undefined) {
    model.value = new CalendarDate(number, new Date().getMonth() + 1, 1)
  }
  else {
    model.value?.set({
      day: model.value?.day ?? new Date().getDate(),
      month: model.value?.month ?? new Date().getMonth(),
      year: number,
    })
  }

  isYearPickerVisible.value = false
  isMonthPickerVisible.value = true
}
</script>

<template>
  <div class="flex flex-col gap-2">
    <DateRangePickerRoot
      id="date-field"
      :number-of-months="props.numberOfMonths"
      :is-date-unavailable="date => date.day === 19"
    >
      <AppDateRangePickerField />

      <AppDateRangePickerContent />
    </DateRangePickerRoot>
  </div>
</template>

<style>
[data-radix-popper-content-wrapper] {
  @apply !z-popover;
}
</style>
