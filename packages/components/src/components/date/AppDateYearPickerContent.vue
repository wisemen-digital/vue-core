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
import { ref } from 'vue'

import AppDatePickerContent from '@/components/date/AppDatePickerContent.vue'
import AppDatePickerHeader from '@/components/date/AppDatePickerHeader.vue'

const emit = defineEmits<{
  yearClick: [number]
}>()

function onYearClick(year: number): void {
  emit('yearClick', year)
}

const localYear = ref<number>(0)

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
      class="p-4"
    >
      <AppDatePickerHeader
        step="year"
        @previous="onPreviousYearsButtonClick"
        @next="onNextYearsButtonClick"
      />

      <div
        class="grid grid-cols-2 gap-4"
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
                  :month="getYear(grid[0].value, year)"
                  class="relative flex h-8 items-center justify-center whitespace-nowrap rounded-button border border-transparent bg-transparent px-4 text-sm font-normal text-foreground outline-none before:absolute before:top-[5px] before:hidden before:size-1 before:rounded-full before:bg-background hover:border-primary focus:shadow-[0_0_0_2px] focus:shadow-primary/50 data-[unavailable]:pointer-events-none data-[selected]:bg-primary data-[selected]:font-medium data-[disabled]:text-foreground/30 data-[selected]:text-white data-[unavailable]:text-foreground/30 data-[unavailable]:line-through data-[today]:before:block data-[selected]:before:bg-background data-[today]:before:bg-primary"
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
