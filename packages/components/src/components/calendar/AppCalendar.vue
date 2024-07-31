<script setup lang="ts">
import type { DateValue } from '@internationalized/date'
import {
  CalendarCell,
  CalendarCellTrigger,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHead,
  CalendarGridRow,
  CalendarHeadCell,
  CalendarRoot,
} from 'radix-vue'
import { computed } from 'vue'

import AppCalendarHeader from './AppCalendarHeader.vue'
import { useCalendarStyle } from './calendar.style'

const props = withDefaults(
  defineProps<{
    /**
     * Whether or not to always display 6 weeks in the calendar
     */
    hasFixedWeeks?: boolean
    /**
     * True causes the previous/next buttons to navigate by the number of months displayed at once rather than one month
     */
    hasPagedNavigation?: boolean
    /**
     * A function that returns whether or not a date is disabled
     */
    isDateDisabled?: (date: DateValue) => boolean
    /**
     * A function that returns whether or not a date is unavailable
     */
    isDateUnavailable?: (date: DateValue) => boolean
    /**
     * Whether or not the calendar is disabled
     */
    isDisabled?: boolean
    /**
     * Whether or not the calendar is readonly
     */
    isReadonly?: boolean
    /**
     * The locale to use for formatting dates
     */
    locale?: string
    /**
     * The maximum date that can be selected
     */
    maxValue?: DateValue
    /**
     * The minimum date that can be selected
     */
    minValue?: DateValue
    /**
     * Whether or not multiple dates can be selected
     */
    multiple?: boolean
    /**
     * The number of months to display at once
     */
    numberOfMonths?: number
    /**
     * The placeholder date, which is used to determine what month to display when no date is selected.
     */
    placeholder?: DateValue
  }>(),
  {
    hasFixedWeeks: true,
    hasPagedNavigation: false,
    isDisabled: false,
    isReadonly: false,
    locale: 'nl',
    multiple: false,
    numberOfMonths: 1,
  },
)

const modelValue = defineModel<DateValue | DateValue[]>({
  required: true,
})

const calendarStyle = useCalendarStyle()

const rootClasses = computed<string>(() => calendarStyle.root())
const gridContainerClasses = computed<string>(() => calendarStyle.gridContainer())
const gridClasses = computed<string>(() => calendarStyle.grid())
const headGridRowClasses = computed<string>(() => calendarStyle.headGridRow())
const headCellClasses = computed<string>(() => calendarStyle.headCell())
const dataGridRowClasses = computed<string>(() => calendarStyle.dataGridRow())
const dataCellClasses = computed<string>(() => calendarStyle.dataCell())
const cellTriggerClasses = computed<string>(() => calendarStyle.cellTrigger())
</script>

<template>
  <CalendarRoot
    v-slot="{ weekDays, grid }"
    v-model="modelValue"
    :is-date-unavailable="props.isDateUnavailable"
    :is-date-disabled="props.isDateDisabled"
    :fixed-weeks="props.hasFixedWeeks"
    :disabled="props.isDisabled"
    :locale="props.locale"
    :max-value="props.maxValue"
    :min-value="props.minValue"
    :multiple="props.multiple"
    :number-of-months="props.numberOfMonths"
    :paged-navigation="props.hasPagedNavigation"
    :placeholder="props.placeholder"
    :readonly="props.isReadonly"
    :week-starts-on="0"
    :class="rootClasses"
  >
    <AppCalendarHeader />

    <div :class="gridContainerClasses">
      <CalendarGrid
        v-for="month in grid"
        :key="month.value.toString()"
        :class="gridClasses"
      >
        <CalendarGridHead>
          <CalendarGridRow :class="headGridRowClasses">
            <CalendarHeadCell
              v-for="day in weekDays"
              :key="day"
              :class="headCellClasses"
            >
              {{ day }}
            </CalendarHeadCell>
          </CalendarGridRow>
        </CalendarGridHead>
        <CalendarGridBody class="grid">
          <CalendarGridRow
            v-for="(weekDates, index) in month.rows"
            :key="`weekDate-${index}`"
            :class="dataGridRowClasses"
          >
            <CalendarCell
              v-for="weekDate in weekDates"
              :key="weekDate.toString()"
              :date="weekDate"
              :class="dataCellClasses"
            >
              <CalendarCellTrigger
                :day="weekDate"
                :month="month.value"
                :class="cellTriggerClasses"
              />
            </CalendarCell>
          </CalendarGridRow>
        </CalendarGridBody>
      </CalendarGrid>
    </div>
  </CalendarRoot>
</template>
