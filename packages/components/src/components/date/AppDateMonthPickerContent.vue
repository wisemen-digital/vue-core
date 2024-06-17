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
import { useI18n } from 'vue-i18n'

import AppButton from '@/components/button/AppButton.vue'
import AppIconButton from '@/components/button/AppIconButton.vue'

const emit = defineEmits<{
  monthClick: [number]
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

function onMonthClick(number: number): void {
  emit('monthClick', number)
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
          step="year"
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

        <DatePickerHeading class="font-medium text-foreground">
          <template #default="{ headingValue }">
            <div class="flex items-center">
              <AppButton
                size="sm"
                variant="ghost"
                @click="onYearClick"
              >
                {{ headingValue.split(' ')[1] }}
              </AppButton>
            </div>
          </template>
        </DatePickerHeading>
        <DatePickerNext
          as="div"
          step="year"
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
      <div>
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
                  @click="onMonthClick(month.value.month)"
                >
                  {{ month.label }}
                </DatePickerCellTrigger>
              </DatePickerCell>
            </DatePickerGridRow>
          </DatePickerGridBody>
        </DatePickerGrid>
      </div>
    </DatePickerCalendar>
  </DatePickerContent>
</template>
