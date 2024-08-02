<script setup lang="ts">
import {
  RangeCalendarHeader,
  RangeCalendarHeading,
  RangeCalendarNext,
  RangeCalendarPrev,
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
  <RangeCalendarHeader :class="headerClasses">
    <RangeCalendarPrev
      :class="headerPrevNextClasses"
    >
      <AppIcon icon="chevronLeft" />
    </RangeCalendarPrev>

    <RangeCalendarHeading :class="headerHeadingClasses" />

    <RangeCalendarNext
      :class="headerPrevNextClasses"
    >
      <AppIcon icon="chevronRight" />
    </RangeCalendarNext>
  </RangeCalendarHeader>
</template>
