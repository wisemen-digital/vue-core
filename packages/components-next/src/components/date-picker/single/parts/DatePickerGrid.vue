<script setup lang="ts">
import {
  AnimatePresence,
  Motion,
} from 'motion-v'
import type { DateValue } from 'reka-ui'
import {
  CalendarCell as RekaCalendarCell,
  CalendarCellTrigger as RekaCalendarCellTrigger,
  CalendarGrid as RekaCalendarGrid,
  CalendarGridBody as RekaCalendarGridBody,
  CalendarGridHead as RekaCalendarGridHead,
  CalendarGridRow as RekaCalendarGridRow,
  CalendarHeadCell as RekaCalendarHeadCell,
} from 'reka-ui'

import type { Grid } from '@/components/date-picker/shared/datePicker.type'
import { useInjectDatePickerContext } from '@/components/date-picker/single/datePicker.context'
import { mergeClasses } from '@/customClassVariants'

const props = defineProps<{
  grid: Grid<DateValue>[]
  weekDays: string[]
}>()

const {
  classConfig,
  customClassConfig,
  placeholderValue,
  style,
} = useInjectDatePickerContext()
</script>

<template>
  <div class="relative overflow-hidden">
    <AnimatePresence mode="popLayout">
      <Motion
        :key="`${placeholderValue.getMonth()}${placeholderValue.getFullYear()}`"
        :initial="{
          opacity: 0,
        }"
        :animate="{
          opacity: 1,
        }"
        :exit="{
          opacity: 0,
        }"
        :transition="{
          duration: 0.2,
        }"
      >
        <div class="flex gap-xl">
          <RekaCalendarGrid
            v-for="month in props.grid"
            :key="month.value.toString()"
            class="w-full"
          >
            <RekaCalendarGridHead>
              <RekaCalendarGridRow class="grid grid-cols-7">
                <RekaCalendarHeadCell
                  v-for="day in props.weekDays"
                  :key="day"
                  :class="style.weekDayLabel({
                    class: mergeClasses(classConfig?.weekDayLabel, customClassConfig.weekDayLabel),
                  })"
                >
                  {{ day }}
                </RekaCalendarHeadCell>
              </RekaCalendarGridRow>
            </RekaCalendarGridHead>

            <RekaCalendarGridBody class="flex flex-col gap-y-xs">
              <RekaCalendarGridRow
                v-for="weekDates in month.rows"
                :key="weekDates.toString()"
                class="grid grid-cols-7 items-center"
              >
                <RekaCalendarCell
                  v-for="weekDate in weekDates"
                  :key="weekDate.toString()"
                  :date="weekDate"
                >
                  <RekaCalendarCellTrigger
                    v-slot="{ today, selected }"
                    :day="weekDate"
                    :month="month.value"
                    :class="style.date({
                      class: mergeClasses(classConfig?.date, customClassConfig.date),
                    })"
                  >
                    <span class="z-10">
                      {{ weekDate.day }}
                    </span>

                    <AnimatePresence>
                      <Motion
                        v-if="selected"
                        :transition="{
                          duration: 0.3,
                          type: 'spring',
                          bounce: 0.1,
                        }"
                        :initial="{
                          opacity: 0,
                        }"
                        :animate="{
                          opacity: 1,
                        }"
                        :exit="{
                          opacity: 0,
                        }"
                        layout-id="selected"
                        class="absolute size-full rounded-full bg-brand-solid"
                      />
                    </AnimatePresence>

                    <div
                      v-if="today"
                      :class="style.todayIndicator({
                        class: mergeClasses(customClassConfig.todayIndicator, classConfig?.todayIndicator),
                      })"
                    />
                  </RekaCalendarCellTrigger>
                </RekaCalendarCell>
              </RekaCalendarGridRow>
            </RekaCalendarGridBody>
          </RekaCalendarGrid>
        </div>
      </Motion>
    </AnimatePresence>
  </div>
</template>
