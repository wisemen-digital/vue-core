<script setup lang="ts">
import { getLocalTimeZone } from '@internationalized/date'
import { RangeCalendarCellTrigger as RekaRangeCalendarCellTrigger } from 'reka-ui'

import { mergeClasses } from '@/class-variant/customClassVariants'
import { useInjectDateRangePickerContext } from '@/components/date-picker/range/dateRangePicker.context'
import { getDaysInMonth } from '@/components/date-picker/shared/datePicker.util'
import { useInjectDatePickerDateContext } from '@/components/date-picker/shared/datePickerDate.context'

const {
  classConfig,
  customClassConfig,
  style,
} = useInjectDateRangePickerContext()

const {
  date, month,
} = useInjectDatePickerDateContext()
</script>

<template>
  <RekaRangeCalendarCellTrigger
    v-slot="{ today }"
    :day="date"
    :month="month"
    :class="style.date({
      class: mergeClasses(classConfig?.date, customClassConfig.date),
    })"
    :data-first-day-of-week="date.toDate(getLocalTimeZone()).getDay() === 1 || undefined"
    :data-last-day-of-week="date.toDate(getLocalTimeZone()).getDay() === 0 || undefined"
    :data-first-day-of-month="date.day === 1 || undefined"
    :data-last-day-of-month="date.day === getDaysInMonth(date.month, date.year) || undefined"
  >
    <div
      :class="style.innerDate({
        class: mergeClasses(classConfig?.innerDate, customClassConfig.innerDate),
      })"
    >
      <slot :day="date.day">
        {{ date.day }}
      </slot>
    </div>

    <div
      v-if="today"
      :class="style.todayIndicator({
        class: mergeClasses(customClassConfig.todayIndicator, classConfig?.todayIndicator),
      })"
    />
  </RekaRangeCalendarCellTrigger>
</template>
