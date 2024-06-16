<script setup lang="ts">
import {
  DatePickerArrow,
  DatePickerCalendar,
  DatePickerCell,
  DatePickerCellTrigger,
  DatePickerContent,
  DatePickerGrid,
  DatePickerGridBody,
  DatePickerGridHead,
  DatePickerGridRow,
  DatePickerHeadCell,
  DatePickerHeader,
  DatePickerHeading,
  DatePickerNext,
  DatePickerPrev,
} from 'radix-vue'

import AppIconButton from '@/components/button/AppIconButton.vue'
</script>

<template>
  <DatePickerContent
    :side-offset="4"
    class="rounded-popover bg-popover shadow-popover-shadow will-change-[transform,opacity]"
  >
    <DatePickerArrow class="fill-white" />
    <DatePickerCalendar
      v-slot="{ weekDays, grid }"
      class="p-4"
    >
      <DatePickerHeader class="flex items-center justify-between">
        <DatePickerPrev
          as="div"
          as-child
        >
          <AppIconButton
            label="chevronLeft"
            variant="ghost"
            size="sm"
            icon="chevronLeft"
          />
        </DatePickerPrev>

        <DatePickerHeading class="font-medium text-foreground" />
        <DatePickerNext
          as="div"
          as-child
        >
          <AppIconButton
            label="chevronRight"
            variant="ghost"
            size="sm"
            icon="chevronRight"
          />
        </DatePickerNext>
      </DatePickerHeader>
      <div
        class="flex flex-col space-y-4 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0"
      >
        <DatePickerGrid
          v-for="month in grid"
          :key="month.value.toString()"
          class="w-full border-collapse select-none space-y-1"
        >
          <DatePickerGridHead>
            <DatePickerGridRow class="mb-1 flex w-full justify-between">
              <DatePickerHeadCell
                v-for="day in weekDays"
                :key="day"
                class="w-8 rounded-md text-xs text-muted-foreground"
              >
                {{ day }}
              </DatePickerHeadCell>
            </DatePickerGridRow>
          </DatePickerGridHead>
          <DatePickerGridBody>
            <DatePickerGridRow
              v-for="(weekDates, index) in month.rows"
              :key="`weekDate-${index}`"
              class="flex w-full"
            >
              <DatePickerCell
                v-for="weekDate in weekDates"
                :key="weekDate.toString()"
                :date="weekDate"
              >
                <DatePickerCellTrigger
                  :day="weekDate"
                  :month="month.value"
                  class="relative flex size-8 items-center justify-center whitespace-nowrap rounded-button border border-transparent bg-transparent text-sm font-normal text-foreground outline-none before:absolute before:top-[5px] before:hidden before:size-1 before:rounded-full before:bg-background hover:border-primary focus:shadow-[0_0_0_2px] focus:shadow-primary/50 data-[unavailable]:pointer-events-none data-[selected]:bg-primary data-[selected]:font-medium data-[disabled]:text-foreground/30 data-[selected]:text-white data-[unavailable]:text-foreground/30 data-[unavailable]:line-through data-[today]:before:block data-[selected]:before:bg-background data-[today]:before:bg-primary"
                />
              </DatePickerCell>
            </DatePickerGridRow>
          </DatePickerGridBody>
        </DatePickerGrid>
      </div>
    </DatePickerCalendar>
  </DatePickerContent>
</template>
