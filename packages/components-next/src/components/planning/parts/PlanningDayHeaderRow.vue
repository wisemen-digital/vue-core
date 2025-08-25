<script setup lang="ts">
import type { PlanningDay } from '@/components/planning/planning.types'

interface Props {
  days: PlanningDay[]
}

defineProps<Props>()
</script>

<template>
  <div class="flex border-b border-gray-200">
    <div class="w-16 border-r border-gray-200" />

    <div
      v-for="day in days"
      :key="day.date"
      :class="{
        'bg-blue-50 font-medium': day.isToday,
        'text-gray-500': day.isWeekend && !day.isToday,
      }"
      class="
        flex-1 border-r border-gray-200 p-2 text-center
        last:border-r-0
      "
    >
      <slot
        :day="day.date"
        :label="day.label"
        :is-today="day.isToday"
        :is-weekend="day.isWeekend"
        name="day-header"
      >
        <div class="text-sm">
          {{ day.label }}
        </div>
      </slot>
    </div>
  </div>
</template>
