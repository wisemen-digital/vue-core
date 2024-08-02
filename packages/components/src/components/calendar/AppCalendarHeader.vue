<script setup lang="ts">
import {
  CalendarHeader,
  CalendarHeading,
  CalendarNext,
  CalendarPrev,
} from 'radix-vue'
import { computed } from 'vue'

import AppIcon from '@/components/icon/AppIcon.vue'

import { useCalendarStyle } from './calendar.style'

const calendarStyle = useCalendarStyle()

const headerClasses = computed<string>(() => calendarStyle.header())
const headerPrevNextClasses = computed<string>(() => calendarStyle.headerPrevNext())
const headerHeadingClasses = computed<string>(() => calendarStyle.headerHeading())
</script>

<template>
  <CalendarHeader :class="headerClasses">
    <CalendarPrev
      :class="headerPrevNextClasses"
    >
      <AppIcon icon="chevronLeft" />
    </CalendarPrev>

    <CalendarHeading :class="headerHeadingClasses" />

    <CalendarNext
      :class="headerPrevNextClasses"
    >
      <AppIcon icon="chevronRight" />
    </CalendarNext>
  </CalendarHeader>
</template>
