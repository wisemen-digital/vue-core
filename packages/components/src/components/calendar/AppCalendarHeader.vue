<script setup lang="ts">
import {
  CalendarHeader,
  CalendarHeading,
  CalendarNext,
  CalendarPrev,
} from 'radix-vue'

import AppIcon from '@/components/icon/AppIcon.vue'
</script>

<template>
  <CalendarHeader class="flex items-center justify-between">
    <CalendarPrev
      class="inline-flex size-8 cursor-pointer items-center justify-center rounded-[9px] bg-transparent text-black hover:bg-primary/20 focus:shadow-[0_0_0_2px] focus:shadow-primary/20 active:transition-all"
    >
      <AppIcon icon="chevronLeft" />
    </CalendarPrev>

    <CalendarHeading class="text-body font-medium text-black" />

    <CalendarNext
      class="inline-flex size-8 cursor-pointer items-center justify-center rounded-[9px] bg-transparent text-black hover:bg-primary/20 focus:shadow-[0_0_0_2px] focus:shadow-primary/20 active:transition-all"
    >
      <AppIcon icon="chevronRight" />
    </CalendarNext>
  </CalendarHeader>
</template>
