<script setup lang="ts">
import { computed } from 'vue'

import type { PlanningTimeSlot } from '@/components/planning/planning.types'

interface Props {
  hourHeight: number
  hours: PlanningTimeSlot[]
}

const props = defineProps<Props>()

const allHourLabels = computed<Array<{
  isVisible: boolean
  hour: number
  label: string
  position: number
}>>(() => {
  const labels: Array<{
    isVisible: boolean
    hour: number
    label: string
    position: number
  }> = []

  for (const [
    index,
    hour,
  ] of props.hours.entries()) {
    const basePosition = index * props.hourHeight

    const isVisible = index > 0

    labels.push({
      isVisible,
      hour: hour.hour,
      label: hour.label,
      position: basePosition,
    })
  }

  return labels
})
</script>

<template>
  <div class="relative border-r border-gray-200">
    <div
      v-for="hourLabel in allHourLabels"
      v-show="hourLabel.isVisible"
      :key="`hour-${hourLabel.hour}`"
      :style="{
        top: `${hourLabel.position - hourHeight / 2 + 12}px`,
        height: `${hourHeight}px`,
      }"
      class="
        absolute flex w-full items-start justify-center pt-1 text-xs
        text-gray-600
      "
    >
      <slot
        :hour="hourLabel.hour"
        :label="hourLabel.label"
        name="hour-label"
      >
        {{ hourLabel.label }}
      </slot>
    </div>

    <div :style="{ height: `${hours.length * hourHeight}px` }" />
  </div>
</template>
