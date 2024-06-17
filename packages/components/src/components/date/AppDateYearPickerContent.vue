<script setup lang="ts">
import { CalendarDate, type DateValue } from '@internationalized/date'
import {
  DatePickerArrow,
  DatePickerCalendar,
  DatePickerCell,
  DatePickerCellTrigger,
  DatePickerContent,
  DatePickerGrid,
  DatePickerGridBody,
  DatePickerGridRow,
  DatePickerHeader,
  DatePickerHeading,
  DatePickerNext,
  DatePickerPrev,
} from 'radix-vue'
import { ref } from 'vue'

import AppButton from '@/components/button/AppButton.vue'
import AppIconButton from '@/components/button/AppIconButton.vue'

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

function getRangeLabel(currentDate: string): string {
  const year = Number(currentDate.split(' ')[1])

  const currentYear = year + localYear.value
  const startOfDecade = currentYear - (currentYear % 10)
  const endOfDecade = startOfDecade + 9

  return `${startOfDecade} - ${endOfDecade}`
}

function onNextYearsButtonClick(): void {
  localYear.value = localYear.value + 10
}
</script>

<template>
  <DatePickerContent
    :side-offset="4"
    class="rounded-popover bg-popover shadow-popover-shadow will-change-[transform,opacity]"
  >
    <DatePickerArrow class="fill-white" />
    <DatePickerCalendar
      v-slot="{ grid }"
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
            @click.stop="onPreviousYearsButtonClick"
          />
        </DatePickerPrev>

        <DatePickerHeading class="font-medium text-foreground">
          <template #default="{ headingValue }">
            <div class="flex items-center">
              <AppButton
                size="sm"
                variant="ghost"
              >
                {{ getRangeLabel(headingValue) }}
              </AppButton>
            </div>
          </template>
        </DatePickerHeading>
        <DatePickerNext
          as="div"
          as-child
        >
          <AppIconButton
            label="chevronRight"
            variant="ghost"
            size="sm"
            icon="chevronRight"
            @click.stop="onNextYearsButtonClick"
          />
        </DatePickerNext>
      </DatePickerHeader>
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
                :date="new CalendarDate(year, grid[0].value.month, grid[0].value.day)"
                as-child
              >
                <DatePickerCellTrigger
                  :day="new CalendarDate(year, grid[0].value.month, grid[0].value.day)"
                  :month="new CalendarDate(year, grid[0].value.month, grid[0].value.day)"
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
  </DatePickerContent>
</template>
