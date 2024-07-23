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
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import AppDatePickerContent from '@/components/date/AppDatePickerContent.vue'
import AppDatePickerHeader from '@/components/date/AppDatePickerHeader.vue'
import { useDatePickerStyle } from '@/components/date/datePicker.style'

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

const datePickerStyle = useDatePickerStyle()

const monthPickerContentGridBodyClasses = computed<string>(() => datePickerStyle.monthPickerContentGridBody())
const monthPickerContentCellTriggerClasses = computed<string>(() => datePickerStyle.monthPickerContentCellTrigger())

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
    >
      <AppDatePickerHeader
        v-if="!Boolean(props.hideHeader)"
        step="month"
        @year-click="onYearClick"
      />

      <DatePickerGrid>
        <DatePickerGridBody
          :class="monthPickerContentGridBodyClasses"
        >
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
                :class="monthPickerContentCellTriggerClasses"
                :month="month.value"
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
