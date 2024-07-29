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

import AppCalendarHeader from './AppCalendarHeader.vue'

const props = withDefaults(
  defineProps<{
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
     * Whether or not to always display 6 weeks in the calendar
     */
    fixedWeeks?: boolean
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
     * True causes the previous/next buttons to navigate by the number of months displayed at once rather than one month
     */
    pagedNavigation?: boolean
    /**
     * The placeholder date, which is used to determine what month to display when no date is selected.
     */
    placeholder?: DateValue
    /**
     * Whether or not the calendar is readonly
     */
    readonly?: boolean
  }>(),
  {
    isDisabled: false,
    fixedWeeks: true,
    locale: 'nl',
    multiple: false,
    numberOfMonths: 1,
    pagedNavigation: false,
    readonly: false,
  },
)

const modelValue = defineModel<DateValue | DateValue[]>({
  required: true,
})
</script>

<template>
  <CalendarRoot
    v-slot="{ weekDays, grid }"
    v-model="modelValue"
    :is-date-unavailable="props.isDateUnavailable"
    :is-date-disabled="props.isDateDisabled"
    :fixed-weeks="props.fixedWeeks"
    :disabled="props.isDisabled"
    :locale="props.locale"
    :max-value="props.maxValue"
    :min-value="props.minValue"
    :multiple="props.multiple"
    :number-of-months="props.numberOfMonths"
    :paged-navigation="props.pagedNavigation"
    :placeholder="props.placeholder"
    :readonly="props.readonly"
    :week-starts-on="0"
    class="rounded-xl bg-white p-4 shadow-md"
  >
    <AppCalendarHeader />

    <div
      class="flex flex-col space-y-4 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0"
    >
      <CalendarGrid
        v-for="month in grid"
        :key="month.value.toString()"
        class="w-full border-collapse select-none space-y-1"
      >
        <CalendarGridHead>
          <CalendarGridRow class="mb-1 grid w-full grid-cols-7">
            <CalendarHeadCell
              v-for="day in weekDays"
              :key="day"
              class="rounded-md text-xs text-primary"
            >
              {{ day }}
            </CalendarHeadCell>
          </CalendarGridRow>
        </CalendarGridHead>
        <CalendarGridBody class="grid">
          <CalendarGridRow
            v-for="(weekDates, index) in month.rows"
            :key="`weekDate-${index}`"
            class="grid grid-cols-7"
          >
            <CalendarCell
              v-for="weekDate in weekDates"
              :key="weekDate.toString()"
              :date="weekDate"
              class="relative text-center text-sm"
            >
              <CalendarCellTrigger
                :day="weekDate"
                :month="month.value"
                class="relative flex size-8 items-center justify-center whitespace-nowrap rounded-full text-sm font-normal text-black outline-none before:absolute before:top-[5px] before:hidden before:size-1 before:rounded-full before:bg-white hover:bg-primary/20 focus:shadow-[0_0_0_2px] focus:shadow-primary data-[unavailable]:pointer-events-none data-[highlighted]:bg-primary/5 data-[selected]:!bg-primary data-[disabled]:text-black/30 data-[selected]:text-white data-[unavailable]:text-black/30 data-[unavailable]:line-through data-[today]:before:block data-[today]:before:bg-primary/60 "
              />
            </CalendarCell>
          </CalendarGridRow>
        </CalendarGridBody>
      </CalendarGrid>
    </div>
  </CalendarRoot>
</template>
