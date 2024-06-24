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
import { useI18n } from 'vue-i18n'

import AppDatePickerContent from '@/components/date/AppDatePickerContent.vue'
import AppDatePickerHeader from '@/components/date/AppDatePickerHeader.vue'

const props = defineProps<{
  hideHeader?: boolean
}>()

const emit = defineEmits<{
  monthClick: [number, number]
  yearClick: []
}>()

interface Month {
  label: string
  value: DateValue
}

const { locale } = useI18n()

function getMonths(currentDate: DateValue): Month[] {
  const months = []

  for (let i = 0; i < 12; i++) {
    months.push({
      label: new Date(0, i).toLocaleString(locale.value, { month: 'long' }),
      value: new CalendarDate(currentDate.year, i + 1, currentDate.day),
    })
  }

  return months
}

function onYearClick(): void {
  emit('yearClick')
}

function onMonthClick(number: number, year: number): void {
  emit('monthClick', number, year)
}
</script>

<template>
  <AppDatePickerContent>
    <DatePickerCalendar
      v-slot="{ grid }"
      class="p-4"
    >
      <AppDatePickerHeader
        v-if="!Boolean(props.hideHeader)"
        step="month"
        @year-click="onYearClick"
      />

      <DatePickerGrid>
        <DatePickerGridBody class="grid grid-cols-2">
          <DatePickerGridRow
            v-for="month in getMonths(grid[0].value)"
            :key="month.value.toString()"
            as-child
          >
            <DatePickerCell
              :date="month.value"
              as-child
            >
              <DatePickerCellTrigger
                :day="month.value"
                :month="month.value"
                class="relative flex h-8 w-full items-center justify-center whitespace-nowrap rounded-button border border-transparent bg-transparent px-4 text-center text-sm font-normal text-foreground outline-none before:absolute before:top-[5px] before:hidden before:size-1 before:rounded-full before:bg-background hover:border-primary focus:shadow-[0_0_0_2px] focus:shadow-primary/50 data-[unavailable]:pointer-events-none data-[selected]:bg-primary data-[selected]:font-medium data-[disabled]:text-foreground/30 data-[selected]:text-white data-[unavailable]:text-foreground/30 data-[unavailable]:line-through data-[today]:before:block data-[selected]:before:bg-background data-[today]:before:bg-primary"
                @click="onMonthClick(month.value.month, grid[0].value.year)"
              >
                {{ month.label }}
              </DatePickerCellTrigger>
            </DatePickerCell>
          </DatePickerGridRow>
        </DatePickerGridBody>
      </DatePickerGrid>
    </DatePickerCalendar>
  </AppDatePickerContent>
</template>
