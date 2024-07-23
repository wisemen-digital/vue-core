<script setup lang="ts">
import {
  DatePickerCalendar,
  DatePickerCell,
  DatePickerCellTrigger,
  DatePickerGrid,
  DatePickerGridBody,
  DatePickerGridHead,
  DatePickerGridRow,
  DatePickerHeadCell,
} from 'radix-vue'
import { computed } from 'vue'

import AppDatePickerContent from '@/components/date/AppDatePickerContent.vue'
import AppDatePickerHeader from '@/components/date/AppDatePickerHeader.vue'
import { useDatePickerStyle } from '@/components/date/datePicker.style'

const emit = defineEmits<{
  blur: []
  monthClick: []
  yearClick: []
}>()

const datePickerStyle = useDatePickerStyle()

const calendarPickerGridContainerClasses = computed<string>(() => datePickerStyle.calendarPickerGridContainer())
const calendarPickerGridClasses = computed<string>(() => datePickerStyle.calendarPickerGrid())
const calendarPickerGridHeadRowClasses = computed<string>(() => datePickerStyle.calendarPickerGridHeadRow())
const calendarPickerGridBodyRowClasses = computed<string>(() => datePickerStyle.calendarPickerGridBodyRow())
const calendarPickerGridHeadCellClasses = computed<string>(() => datePickerStyle.calendarPickerGridHeadCell())
const calendarPickerGridCellTriggerClasses = computed<string>(() => datePickerStyle.calendarPickerGridCellTrigger())

function onMonthButtonClick(): void {
  emit('monthClick')
}

function onYearButtonClick(): void {
  emit('yearClick')
}

function onBlur(): void {
  emit('blur')
}
</script>

<template>
  <AppDatePickerContent
    @blur="onBlur"
  >
    <DatePickerCalendar
      v-slot="{ weekDays, grid }"
    >
      <AppDatePickerHeader
        step="calendar"
        @month-click="onMonthButtonClick"
        @year-click="onYearButtonClick"
      />

      <div
        :class="calendarPickerGridContainerClasses"
      >
        <DatePickerGrid
          v-for="month in grid"
          :key="month.value.toString()"
          :class="calendarPickerGridClasses"
        >
          <DatePickerGridHead>
            <DatePickerGridRow :class="calendarPickerGridHeadRowClasses">
              <DatePickerHeadCell
                v-for="day in weekDays"
                :key="day"
                :class="calendarPickerGridHeadCellClasses"
              >
                {{ day }}
              </DatePickerHeadCell>
            </DatePickerGridRow>
          </DatePickerGridHead>
          <DatePickerGridBody>
            <DatePickerGridRow
              v-for="(weekDates, index) in month.rows"
              :key="`weekDate-${index}`"
              :class="calendarPickerGridBodyRowClasses"
            >
              <DatePickerCell
                v-for="weekDate in weekDates"
                :key="weekDate.toString()"
                :date="weekDate"
              >
                <DatePickerCellTrigger
                  :day="weekDate"
                  :class="calendarPickerGridCellTriggerClasses"
                  :month="month.value"
                />
              </DatePickerCell>
            </DatePickerGridRow>
          </DatePickerGridBody>
        </DatePickerGrid>
      </div>
    </DatePickerCalendar>
  </AppDatePickerContent>
</template>
