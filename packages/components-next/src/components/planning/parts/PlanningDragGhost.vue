<script setup lang="ts" generic="T extends PlanningItem">
import { computed } from 'vue'

import type { PlanningItem } from '@/components/planning/planning.types'

interface Props {
  day: string
  height: number
  hourHeight: number
  item: T
  startHour: number
  top: number
}

const props = defineProps<Props>()

function getContrastColor(backgroundColor: string): string {
  const hex = backgroundColor.replace('#', '')
  const r = Number.parseInt(hex.substring(0, 2), 16)
  const g = Number.parseInt(hex.substring(2, 4), 16)
  const b = Number.parseInt(hex.substring(4, 6), 16)
  const brightness = (r * 299 + g * 587 + b * 114) / 1000

  return brightness > 128 ? '#000000' : '#ffffff'
}

const ghostStyle = computed<Record<string, string>>(() => {
  const baseColor = props.item.backgroundColor || '#3b82f6'

  return {
    backgroundColor: baseColor,
    borderColor: props.item.color || '#1d4ed8',
    color: getContrastColor(baseColor),
    height: `${props.height}px`,
    top: `${props.top}px`,
  }
})

const timeLabel = computed<string>(() => {
  const startHourWithMinutes = props.startHour + props.top / props.hourHeight
  const endHourWithMinutes = startHourWithMinutes + props.height / props.hourHeight

  const startDate = new Date(`${props.day}T00:00:00`)
  const endDate = new Date(`${props.day}T00:00:00`)

  const startHours = Math.floor(startHourWithMinutes)
  const startMinutes = Math.round((startHourWithMinutes % 1) * 60)

  startDate.setHours(startHours, startMinutes, 0, 0)

  const endHours = Math.floor(endHourWithMinutes)
  const endMinutes = Math.round((endHourWithMinutes % 1) * 60)

  endDate.setHours(endHours, endMinutes, 0, 0)

  const startStr = startDate.toLocaleTimeString([], {
    hour: '2-digit',
    hour12: false,
    minute: '2-digit',
  })
  const endStr = endDate.toLocaleTimeString([], {
    hour: '2-digit',
    hour12: false,
    minute: '2-digit',
  })

  return `${startStr} - ${endStr}`
})
</script>

<template>
  <div
    :style="ghostStyle"
    class="
      pointer-events-none absolute right-0 left-0 z-50 rounded border-2
      border-dashed p-1 text-xs font-medium opacity-50
    "
  >
    <div class="flex h-full flex-col">
      <div
        v-if="item.title"
        class="truncate font-medium"
      >
        {{ item.title }}
      </div>
      <div
        v-if="item.description"
        class="truncate text-xs opacity-75"
      >
        {{ item.description }}
      </div>
      <div
        v-if="height > 40"
        class="mt-auto text-xs opacity-60"
      >
        {{ timeLabel }}
      </div>
    </div>
  </div>
</template>
