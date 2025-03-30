<script setup lang="ts">
import {
  AnimatePresence,
  Motion,
} from 'motion-v'
import {
  CalendarCellTrigger as RekaCalendarCellTrigger,
} from 'reka-ui'

import { useInjectDatePickerDateContext } from '@/components/date-picker/shared/datePickerDate.context'
import { useInjectDatePickerContext } from '@/components/date-picker/single/datePicker.context'
import { mergeClasses } from '@/customClassVariants'

const {
  classConfig,
  customClassConfig,
  style,
} = useInjectDatePickerContext()

const { date, month } = useInjectDatePickerDateContext()
</script>

<template>
  <RekaCalendarCellTrigger
    v-slot="{ today, selected }"
    :day="date"
    :month="month"
    :class="style.date({
      class: mergeClasses(classConfig?.date, customClassConfig.date),
    })"
  >
    <slot :day="date.day">
      <span class="z-10">
        {{ date.day }}
      </span>
    </slot>

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
</template>
