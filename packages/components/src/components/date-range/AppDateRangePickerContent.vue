<script setup lang="ts">
import {
  DateRangePickerArrow,
  DateRangePickerCalendar,
  DateRangePickerCell,
  DateRangePickerCellTrigger,
  DateRangePickerContent,
  DateRangePickerGrid,
  DateRangePickerGridBody,
  DateRangePickerGridHead,
  DateRangePickerGridRow,
  DateRangePickerHeadCell,
} from 'radix-vue'

import AppDateRangePickerHeader from '@/components/date-range/AppDateRangePickerHeader.vue'
</script>

<template>
  <DateRangePickerContent
    :side-offset="4"
    class="data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade rounded-xl bg-white shadow-popover-shadow will-change-[transform,opacity] focus:shadow-popover-shadow"
  >
    <DateRangePickerArrow class="fill-white" />
    <DateRangePickerCalendar
      v-slot="{ weekDays, grid }"
      class="p-4"
    >
      <AppDateRangePickerHeader />

      <div
        class="flex flex-col space-y-4 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0"
      >
        <DateRangePickerGrid
          v-for="month in grid"
          :key="month.value.toString()"
          class="w-full border-collapse select-none space-y-1"
        >
          <DateRangePickerGridHead>
            <DateRangePickerGridRow class="mb-1 flex w-full justify-between">
              <DateRangePickerHeadCell
                v-for="day in weekDays"
                :key="day"
                class="w-8 rounded-md text-xs !font-normal text-black"
              >
                {{ day }}
              </DateRangePickerHeadCell>
            </DateRangePickerGridRow>
          </DateRangePickerGridHead>
          <DateRangePickerGridBody>
            <DateRangePickerGridRow
              v-for="(weekDates, index) in month.rows"
              :key="`weekDate-${index}`"
              class="flex w-full"
            >
              <DateRangePickerCell
                v-for="weekDate in weekDates"
                :key="weekDate.toString()"
                :date="weekDate"
              >
                <DateRangePickerCellTrigger
                  :day="weekDate"
                  :month="month.value"
                  class="data-[selected]:!bg-green10 hover:bg-green5 data-[highlighted]:bg-green5 data-[today]:before:bg-green9 relative flex size-8 items-center justify-center whitespace-nowrap rounded-full text-sm font-normal text-black outline-none before:absolute before:top-[5px] before:hidden before:size-1 before:rounded-full before:bg-white focus:shadow-[0_0_0_2px] focus:shadow-black data-[unavailable]:pointer-events-none data-[disabled]:text-black/30 data-[selected]:text-white data-[unavailable]:text-black/30 data-[unavailable]:line-through data-[today]:before:block "
                />
              </DateRangePickerCell>
            </DateRangePickerGridRow>
          </DateRangePickerGridBody>
        </DateRangePickerGrid>
      </div>
    </DateRangePickerCalendar>
  </DateRangePickerContent>
</template>
