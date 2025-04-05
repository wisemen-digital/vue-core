<script setup lang="ts">
import { RangeCalendarCellTrigger as RekaRangeCalendarCellTrigger } from 'reka-ui'

import { useInjectDateRangePickerContext } from '@/components/date-picker/range/dateRangePicker.context'
import { useInjectDatePickerDateContext } from '@/components/date-picker/shared/datePickerDate.context'
import { mergeClasses } from '@/customClassVariants'

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
  >
    <slot :day="date.day">
      <span class="z-10">
        {{ date.day }}
      </span>
    </slot>

    <div
      v-if="today"
      :class="style.todayIndicator({
        class: mergeClasses(customClassConfig.todayIndicator, classConfig?.todayIndicator),
      })"
    />
  </RekaRangeCalendarCellTrigger>
</template>
