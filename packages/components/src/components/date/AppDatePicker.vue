<script setup lang="ts">
import { CalendarDate as IntCalendarDate } from '@internationalized/date'
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
import { useDatePickerStyle } from '@/components/date/datePicker.style'
import type { CalendarDate } from '@/objects/calendarDate.object'

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
   * Whether the input is required.
   * @default false
   */
  isRequired?: boolean
  /**
   * The format of the date.
   * @default 'DD/MM/YYYY'
   */
  format?: string
  /**
   * The modelValue of the date picker.
   * @default null
   */
  modelValue: CalendarDate | null | undefined
}>(), {
  id: null,
  maxDate: null,
  minDate: null,
  isDisabled: false,
  isInvalid: false,
  format: 'DD/MM/YYYY',
})

const emit = defineEmits<{
  'blur': []
  'update:modelValue': [Date | null]
}>()

const model = computed<IntCalendarDate | undefined>({
  get: () => {
    const value = props.modelValue

    if (value === null || value === undefined) {
      return undefined
    }

    return dateToCalendarDate(value)
  },
  set: (value: IntCalendarDate | undefined) => {
    if (value === undefined) {
      return emit('update:modelValue', null)
    }

    return emit('update:modelValue', calendarDateToDate(value))
  },
})

const { locale } = useI18n()

const id = props.id ?? useId()

const datePickerStyle = useDatePickerStyle()

const pickerClasses = computed<string>(() => datePickerStyle.picker())

const minDate = computed<IntCalendarDate | undefined>(() => {
  if (props.minDate === null) {
    return undefined
  }

  return dateToCalendarDate(props.minDate)
})

const maxDate = computed<IntCalendarDate | undefined>(() => {
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
    model.value = new IntCalendarDate(year, month, 1)
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
    model.value = new IntCalendarDate(year, 1, 1)
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

function onModelValueUpdate(value: Date | null): void {
  if (value === null) {
    model.value = undefined

    return
  }

  model.value = dateToCalendarDate(value)
}

function dateToCalendarDate(date: Date): IntCalendarDate {
  return new IntCalendarDate(date.getFullYear(), date.getMonth() + 1, date.getDate())
}

function calendarDateToDate(calendarDate: IntCalendarDate): Date {
  return new Date(calendarDate.year, calendarDate.month - 1, calendarDate.day)
}
</script>

<template>
  <div :class="pickerClasses">
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
        :is-disabled="props.isDisabled"
        :format="props.format"
        :min-value="props.minDate"
        :max-value="props.maxDate"
        @update:model-value="onModelValueUpdate"
        @blur="onBlur"
        @date-click="onTriggerClick"
      />

      <AppDateCalendarPickerContent
        v-if="!isMonthPickerVisible && !isYearPickerVisible"
        @month-click="onShowMonthPickerButtonClick"
        @blur="onBlur"
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

<style lang="postcss" scoped>
[data-radix-popper-content-wrapper] {
  @apply z-popover !important;
}
</style>
