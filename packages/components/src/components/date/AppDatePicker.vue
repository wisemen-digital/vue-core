<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'
import {
  DatePickerRoot,
  useId,
} from 'radix-vue'
import {
  computed,
  ref,
} from 'vue'
import { useI18n } from 'vue-i18n'

import AppDateCalendarPickerContent from '@/components/date/AppDateCalendarPickerContent.vue'
import AppDateMonthPickerContent from '@/components/date/AppDateMonthPickerContent.vue'
import AppDatePickerField from '@/components/date/AppDatePickerField.vue'
import AppDateYearPickerContent from '@/components/date/AppDateYearPickerContent.vue'

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
  maxDate?: Date | null
  /**
   * The min date.
   * @default null
   */
  minDate?: Date | null
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
   * Whether the input is required.
   * @default false
   */
  isRequired?: boolean
  /**
   * The modelValue of the date picker.
   * @default null
   */
  modelValue: Date | null
}>(), {
  id: null,
  maxDate: null,
  minDate: null,
  isDisabled: false,
  isInvalid: false,
  isLoading: false,
  iconLeft: undefined,
  iconRight: undefined,
  placeholder: null,
  type: 'text',
})

const emit = defineEmits<{
  'blur': []
  'update:modelValue': [Date | null]
}>()

const model = computed<CalendarDate | undefined>({
  get: () => {
    const value = props.modelValue

    if (value === null) {
      return undefined
    }

    return dateToCalendarDate(value)
  },
  set: (value: CalendarDate | undefined) => {
    if (value === undefined) {
      return emit('update:modelValue', null)
    }

    return emit('update:modelValue', calendarDateToDate(value))
  },
})

const { locale } = useI18n()

const id = props.id ?? useId()

function dateToCalendarDate(date: Date): CalendarDate {
  return new CalendarDate(date.getFullYear(), date.getMonth() + 1, date.getDate())
}

function calendarDateToDate(calendarDate: CalendarDate): Date {
  return new Date(calendarDate.year, calendarDate.month - 1, calendarDate.day)
}

const minDate = computed<CalendarDate | undefined>(() => {
  if (props.minDate === null) {
    return undefined
  }

  return dateToCalendarDate(props.minDate)
})

const maxDate = computed<CalendarDate | undefined>(() => {
  if (props.maxDate === null) {
    return undefined
  }

  return dateToCalendarDate(props.maxDate)
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
  if (model.value === undefined) {
    model.value = new CalendarDate(year, month, 1)
  }
  else {
    model.value.set({
      day: 1,
      month,
      year,
    })
  }

  isMonthPickerVisible.value = false
}

function onTriggerClick(): void {
  if (props.isDisabled) {
    return
  }

  isYearPickerVisible.value = false
  isMonthPickerVisible.value = false
}

function onYearSelect(year: number): void {
  if (model.value === undefined) {
    model.value = new CalendarDate(year, 1, 1)
  }
  else {
    model.value.set({
      day: model.value.day,
      month: model.value.month,
      year,
    })
  }

  isYearPickerVisible.value = false
  isMonthPickerVisible.value = true
}

function onModelValueUpdate(value: CalendarDate | undefined): void {
  if (value === undefined) {
    model.value = undefined

    return
  }

  model.value = new CalendarDate(value.year, value.month, value.day)
}
</script>

<template>
  <div class="flex w-full flex-col gap-2">
    <DatePickerRoot
      :id="id"
      v-model="model"
      :fixed-weeks="true"
      :required="props.isRequired"
      :min-value="minDate"
      :max-value="maxDate"
      :prevent-deselect="true"
      :locale="locale"
      :disabled="props.isDisabled"
    >
      <AppDatePickerField
        :is-invalid="props.isInvalid"
        :model-value="modelValue"
        :min-value="props.minDate"
        :max-value="props.maxDate"
        type="date"
        @update:model-value="onModelValueUpdate"
        @blur="onBlur"
        @date-click="onTriggerClick"
      />

      <AppDateCalendarPickerContent
        v-if="!isMonthPickerVisible && !isYearPickerVisible"
        @month-click="onShowMonthPickerButtonClick"
        @year-click="onShowYearPickerButtonClick"
      />
      <AppDateMonthPickerContent
        v-if="isMonthPickerVisible"
        @month-click="onMonthSelect"
        @year-click="onShowYearPickerButtonClick"
      />
      <AppDateYearPickerContent
        v-if="isYearPickerVisible"
        @year-click="onYearSelect"
      />
    </DatePickerRoot>
  </div>
</template>

<style>
[data-radix-popper-content-wrapper] {
  @apply !z-popover;
}
</style>
