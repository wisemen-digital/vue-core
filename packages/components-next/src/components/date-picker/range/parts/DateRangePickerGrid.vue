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
  <div
    :class="style.gridContainer({
      class: mergeClasses(classConfig?.gridContainer, customClassConfig.gridContainer),
    })"
  >
    <template
      v-for="(month, monthIndex) in props.grid"
      :key="month.value.toString()"
    >
      <div
        v-if="monthIndex !== 0"
        :class="style.monthSeparator({
          class: mergeClasses(classConfig?.monthSeparator, customClassConfig.monthSeparator),
        })"
      />

      <RekaRangeCalendarGrid
        :class="style.grid({
          class: mergeClasses(classConfig?.grid, customClassConfig.grid),
        })"
      >
        <RekaRangeCalendarGridHead>
          <RekaRangeCalendarGridRow
            :class="style.gridRow({
              class: mergeClasses(classConfig?.gridRow, customClassConfig.gridRow),
            })"
          >
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

        <RekaRangeCalendarGridBody
          :class="style.gridBody({
            class: mergeClasses(classConfig?.gridBody, customClassConfig.gridBody),
          })"
        >
          <RekaRangeCalendarGridRow
            v-for="weekDates in month.rows"
            :key="weekDates.toString()"
            :class="style.gridRow({
              class: mergeClasses(classConfig?.gridRow, customClassConfig.gridRow),
            })"
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
