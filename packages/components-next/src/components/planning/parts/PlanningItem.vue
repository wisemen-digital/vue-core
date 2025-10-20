<script setup lang="ts" generic="T extends PlanningItem">
import type { CSSProperties } from 'vue'
import {
  computed,
  toRef,
} from 'vue'

import { usePlanningItemPosition } from '@/components/planning/composables/usePlanningItemPosition.composable'
import { createPlanningItemStyle } from '@/components/planning/planning.style'
import type { PlanningItem } from '@/components/planning/planning.types'
import { getContrastColor } from '@/utils/color.util'

interface Props {
  dragging?: boolean
  endHour: number
  hourHeight: number
  item: T
  laneLeftPercent?: number
  laneWidthPercent?: number
  selected?: boolean
  startHour: number
  onClick?: (item: T) => void
  onMouseDown?: (item: T, event: MouseEvent) => void
  onResizeStart?: (item: T, edge: 'end' | 'start', event: MouseEvent) => void
}

const props = withDefaults(defineProps<Props>(), {
  dragging: false,
  laneLeftPercent: 0,
  laneWidthPercent: 100,
  selected: false,
})

const startHourRef = toRef(props, 'startHour')
const endHourRef = toRef(props, 'endHour')
const hourHeightRef = toRef(props, 'hourHeight')

const position = usePlanningItemPosition<T>(props.item, {
  endHour: endHourRef,
  hourHeight: hourHeightRef,
  startHour: startHourRef,
})

const isClickable = computed<boolean>(() => Boolean(props.onClick))
const isDraggable = computed<boolean>(() => Boolean(props.onMouseDown))
const isResizable = computed<boolean>(() => Boolean(props.onResizeStart))
const isInteractive = computed<boolean>(() => isClickable.value || isDraggable.value || isResizable.value)

const itemStyle = computed<CSSProperties>(() => {
  const baseColor = props.item.backgroundColor || '#3b82f6'
  const borderColor = props.item.color || '#1d4ed8'

  let cursor = 'default'

  if (isInteractive.value) {
    cursor = isDraggable.value ? 'grab' : 'pointer'
  }

  const laneGutterPx = 4

  return {
    backgroundColor: baseColor,
    borderColor,
    color: getContrastColor(baseColor),
    cursor,
    height: `${position.height.value}px`,
    left: `${props.laneLeftPercent}%`,
    opacity: props.dragging ? 0 : 1,
    pointerEvents: props.dragging ? 'none' : 'auto',
    right: 'auto',
    top: `${position.top.value}px`,
    transform: props.dragging ? 'scale(0.98)' : 'scale(1)',
    width: `calc(${props.laneWidthPercent}% - ${laneGutterPx}px)`,
  }
})

const itemClasses = computed<string>(() =>
  createPlanningItemStyle({
    clickable: isClickable.value,
    draggable: isDraggable.value,
    dragging: props.dragging,
    selected: props.selected,
  }))

function handleClick(event: MouseEvent): void {
  if (isClickable.value) {
    event.stopPropagation()
    props.onClick?.(props.item)
  }
}

function handleMouseDown(event: MouseEvent): void {
  if (isResizable.value) {
    const target = event.target as HTMLElement | null
    const edge = target?.dataset?.edge as 'end' | 'start' | undefined

    if (edge === 'start' || edge === 'end') {
      event.stopPropagation()
      props.onResizeStart?.(props.item, edge, event)

      return
    }
  }

  if (isDraggable.value) {
    event.stopPropagation()
    props.onMouseDown?.(props.item, event)
  }
}
</script>

<template>
  <button
    v-if="position.isVisible.value"
    :class="itemClasses"
    :style="itemStyle"
    type="button"
    @click="handleClick"
    @mousedown="handleMouseDown"
  >
    <span
      v-if="isResizable"
      data-edge="start"
      class="
        pointer-events-auto absolute inset-x-0 top-0 h-2 -translate-y-1/2
        cursor-ns-resize
      "
      aria-hidden="true"
    />
    <span
      v-if="isResizable"
      data-edge="end"
      class="
        pointer-events-auto absolute inset-x-0 bottom-0 h-2 translate-y-1/2
        cursor-ns-resize
      "
      aria-hidden="true"
    />

    <slot
      :item="item"
      :position="position"
      :time-label="position.timeLabel.value"
      :duration-label="position.durationLabel.value"
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
          v-if="position.height.value > 40"
          class="mt-auto text-xs opacity-60"
        >
          {{ position.timeLabel.value }}
        </div>
      </div>
    </slot>
  </button>
</template>
