<script setup lang="ts">
import type { DateValue } from 'reka-ui'
import {
  CalendarCell as RekaCalendarCell,
  CalendarGrid as RekaCalendarGrid,
  CalendarGridBody as RekaCalendarGridBody,
  CalendarGridHead as RekaCalendarGridHead,
  CalendarGridRow as RekaCalendarGridRow,
  CalendarHeadCell as RekaCalendarHeadCell,
} from 'reka-ui'

import type { Grid } from '@/components/date-picker/shared/datePicker.type'
import { dateValueToDate } from '@/components/date-picker/shared/datePicker.util'
import { useInjectDatePickerContext } from '@/components/date-picker/single/datePicker.context'
import DatePickerDate from '@/components/date-picker/single/parts/DatePickerDate.vue'
import DatePickerDateProvider from '@/components/date-picker/single/parts/DatePickerDateProvider.vue'
import { mergeClasses } from '@/customClassVariants'

const props = defineProps<{
  grid: Grid<DateValue>[]
  weekDays: string[]
}>()

const {
  classConfig,
  customClassConfig,
  style,
} = useInjectDatePickerContext()
</script>

<template>
  <div class="flex gap-xl">
    <RekaCalendarGrid
      v-for="month in props.grid"
      :key="month.value.toString()"
      class="w-full"
    >
      <RekaCalendarGridHead>
        <RekaCalendarGridRow class="grid grid-cols-7">
          <RekaCalendarHeadCell
            v-for="day in props.weekDays"
            :key="day"
            :class="style.weekDayLabel({
              class: mergeClasses(classConfig?.weekDayLabel, customClassConfig.weekDayLabel),
            })"
          >
            {{ day }}
          </RekaCalendarHeadCell>
        </RekaCalendarGridRow>
      </RekaCalendarGridHead>

      <RekaCalendarGridBody class="flex flex-col gap-y-xs">
        <RekaCalendarGridRow
          v-for="weekDates in month.rows"
          :key="weekDates.toString()"
          class="grid grid-cols-7 items-center"
        >
          <RekaCalendarCell
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
          </RekaCalendarCell>
        </RekaCalendarGridRow>
      </RekaCalendarGridBody>
    </RekaCalendarGrid>
  </div>
</template>
