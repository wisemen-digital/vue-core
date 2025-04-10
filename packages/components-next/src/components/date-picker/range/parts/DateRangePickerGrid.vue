<script setup lang="ts">
import type { DateValue } from 'reka-ui'
import {
  RangeCalendarCell as RekaRangeCalendarCell,
  RangeCalendarGrid as RekaRangeCalendarGrid,
  RangeCalendarGridBody as RekaRangeCalendarGridBody,
  RangeCalendarGridHead as RekaRangeCalendarGridHead,
  RangeCalendarGridRow as RekaRangeCalendarGridRow,
  RangeCalendarHeadCell as RekaRangeCalendarHeadCell,
} from 'reka-ui'

import { mergeClasses } from '@/class-variant/customClassVariants'
import { useInjectDateRangePickerContext } from '@/components/date-picker/range/dateRangePicker.context'
import type { Grid } from '@/components/date-picker/shared/datePicker.type'
import { dateValueToDate } from '@/components/date-picker/shared/datePicker.util'
import DatePickerDate from '@/components/date-picker/single/parts/DatePickerDate.vue'
import DatePickerDateProvider from '@/components/date-picker/single/parts/DatePickerDateProvider.vue'

const props = defineProps<{
  grid: Grid<DateValue>[]
  weekDays: string[]
}>()

const {
  classConfig,
  customClassConfig,
  style,
} = useInjectDateRangePickerContext()
</script>

<template>
  <div class="gap-xl flex">
    <template
      v-for="(month, monthIndex) in props.grid"
      :key="month.value.toString()"
    >
      <div
        v-if="monthIndex !== 0"
        class="bg-tertiary w-px"
      />

      <RekaRangeCalendarGrid class="w-70">
        <RekaRangeCalendarGridHead>
          <RekaRangeCalendarGridRow class="grid grid-cols-7">
            <RekaRangeCalendarHeadCell
              v-for="day in props.weekDays"
              :key="day"
              :class="style.weekDayLabel({
                class: mergeClasses(classConfig?.weekDayLabel, customClassConfig.weekDayLabel),
              })"
            >
              {{ day }}
            </RekaRangeCalendarHeadCell>
          </RekaRangeCalendarGridRow>
        </RekaRangeCalendarGridHead>

        <RekaRangeCalendarGridBody class="gap-y-xs flex flex-col">
          <RekaRangeCalendarGridRow
            v-for="weekDates in month.rows"
            :key="weekDates.toString()"
            class="grid grid-cols-7 items-center"
          >
            <RekaRangeCalendarCell
              v-for="weekDate in weekDates"
              :key="weekDate.toString()"
              :date="weekDate"
            >
              <DatePickerDateProvider
                :date="weekDate"
                :month="month.value"
              >
                <slot
                  :date="dateValueToDate(weekDate)"
                  name="date"
                >
                  <DatePickerDate />
                </slot>
              </DatePickerDateProvider>
            </RekaRangeCalendarCell>
          </RekaRangeCalendarGridRow>
        </RekaRangeCalendarGridBody>
      </RekaRangeCalendarGrid>
    </template>
  </div>
</template>
