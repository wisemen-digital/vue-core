<script setup lang="ts">
import {
  DateRangePickerHeader,
  DateRangePickerHeading,
  DateRangePickerNext,
  DateRangePickerPrev,
} from 'radix-vue'

import AppIconButton from '@/components/button/AppIconButton.vue'
</script>

<template>
  <DateRangePickerHeader class="flex items-center justify-between">
    <DateRangePickerPrev
      as="div"
      as-child
    >
      <AppIconButton
        label="chevronLeft"
        variant="ghost"
        size="sm"
        icon="chevronLeft"
      />
    </DateRangePickerPrev>

    <DateRangePickerHeading class="text-[15px] font-medium text-black" />

    <DateRangePickerNext
      as="div"
      as-child
    >
      <AppIconButton
        label="chevronRight"
        variant="ghost"
        size="sm"
        icon="chevronRight"
      />
    </DateRangePickerNext>
  </DateRangePickerHeader>
</template>
