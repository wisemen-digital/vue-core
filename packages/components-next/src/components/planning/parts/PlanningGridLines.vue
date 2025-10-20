<script setup lang="ts">
import { computed } from 'vue'

import type { PlanningTimeSlot } from '@/components/planning/planning.types'

interface Props {
  hourHeight: number
  hours: PlanningTimeSlot[]
  visibleDays: string[]
}

const props = defineProps<Props>()

const showHalfHourLines = computed<boolean>(() => props.hourHeight >= 48)

const allGridLines = computed<Array<{ isFullHour: boolean
  isHalfHour: boolean
  position: number }>>(() => {
  const lines: Array<{ isFullHour: boolean
    isHalfHour: boolean
    position: number }> = []

  for (const [
    index,
  ] of props.hours.entries()) {
    const basePosition = index * props.hourHeight

    lines.push({
      isFullHour: true,
      isHalfHour: false,
      position: basePosition,
    })

    if (showHalfHourLines.value) {
      lines.push({
        isFullHour: false,
        isHalfHour: true,
        position: basePosition + (props.hourHeight / 2),
      })
    }
  }

  return lines
})
</script>

<template>
  <div class="pointer-events-none absolute inset-0">
    <div
      v-for="(line, index) in allGridLines"
      :key="`line-${index}`"
      :style="{ top: `${line.position}px` }"
      :class="{
        'border-gray-200': line.isFullHour,
        'border-gray-100 opacity-60': line.isHalfHour,
      }"
      class="absolute right-0 left-0 border-b"
    />

    <div
      v-for="(day, index) in visibleDays"
      :key="day"
      :style="{ left: `${(index + 1) * (100 / visibleDays.length)}%` }"
      class="absolute top-0 bottom-0 border-r border-gray-100"
    />
  </div>
</template>
