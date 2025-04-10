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

import { mergeClasses } from '@/class-variant/customClassVariants'
import type { Grid } from '@/components/date-picker/shared/datePicker.type'
import { dateValueToDate } from '@/components/date-picker/shared/datePicker.util'
import { useInjectDatePickerContext } from '@/components/date-picker/single/datePicker.context'
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
} = useInjectDatePickerContext()
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

      <RekaCalendarGrid
        :class="style.grid({
          class: mergeClasses(classConfig?.grid, customClassConfig.grid),
        })"
      >
        <RekaCalendarGridHead>
          <RekaCalendarGridRow
            :class="style.gridRow({
              class: mergeClasses(classConfig?.gridRow, customClassConfig.gridRow),
            })"
          >
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

        <RekaCalendarGridBody
          :class="style.gridBody({
            class: mergeClasses(classConfig?.gridBody, customClassConfig.gridBody),
          })"
        >
          <RekaCalendarGridRow
            v-for="weekDates in month.rows"
            :key="weekDates.toString()"
            :class="style.gridRow({
              class: mergeClasses(classConfig?.gridRow, customClassConfig.gridRow),
            })"
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
    </template>
  </div>
</template>
