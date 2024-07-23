<script setup lang="ts">
import { CalendarDate, type DateValue } from '@internationalized/date'
import {
  DatePickerCalendar,
  DatePickerCell,
  DatePickerCellTrigger,
  DatePickerGrid,
  DatePickerGridBody,
  DatePickerGridRow,
} from 'radix-vue'
import { computed, ref } from 'vue'

import AppDatePickerContent from '@/components/date/AppDatePickerContent.vue'
import AppDatePickerHeader from '@/components/date/AppDatePickerHeader.vue'
import { useDatePickerStyle } from '@/components/date/datePicker.style'

const emit = defineEmits<{
  yearClick: [number]
}>()

const datePickerStyle = useDatePickerStyle()

const localYear = ref<number>(0)

const yearPickerContentGridClasses = computed<string>(() => datePickerStyle.yearPickerContentGrid())
const yearPickerContentCellTriggerClasses = computed<string>(() => datePickerStyle.yearPickerContentCellTrigger())

function onYearClick(year: number): void {
  emit('yearClick', year)
}

function getYears(currentDate: DateValue): number[] {
  const years = []
  const currentYear = currentDate.year + localYear.value

  const startOfDecade = currentYear - (currentYear % 10)
  const endOfDecade = startOfDecade + 9

  for (let i = startOfDecade; i <= endOfDecade; i++) {
    years.push(i)
  }

  return years
}

function onPreviousYearsButtonClick(): void {
  localYear.value = localYear.value - 10
}

function onNextYearsButtonClick(): void {
  localYear.value = localYear.value + 10
}

function getYear(date: DateValue, year: number): CalendarDate {
  return new CalendarDate(year, date.month, date.day)
}
</script>

<template>
  <AppDatePickerContent>
    <DatePickerCalendar
      v-slot="{ grid }"
    >
      <AppDatePickerHeader
        step="year"
        @previous="onPreviousYearsButtonClick"
        @next="onNextYearsButtonClick"
      />

      <div
        :class="yearPickerContentGridClasses"
      >
        <DatePickerGrid
          v-for="year in getYears(grid[0].value)"
          :key="year.toString()"
        >
          <DatePickerGridBody as-child>
            <DatePickerGridRow as-child>
              <DatePickerCell
                :date="getYear(grid[0].value, year)"
                as-child
              >
                <DatePickerCellTrigger
                  :day="getYear(grid[0].value, year)"
                  :class="yearPickerContentCellTriggerClasses"
                  :month="getYear(grid[0].value, year)"
                  @click="onYearClick(year)"
                >
                  {{ year }}
                </DatePickerCellTrigger>
              </DatePickerCell>
            </DatePickerGridRow>
          </DatePickerGridBody>
        </DatePickerGrid>
      </div>
    </DatePickerCalendar>
  </AppDatePickerContent>
</template>
