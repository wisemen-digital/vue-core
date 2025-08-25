<script setup lang="ts" generic="T extends PlanningItem">
import { computed } from 'vue'

import { usePlanningItemLayout } from '@/components/planning/composables/usePlanningItemLayout.composable'
import type { PlanningItem } from '@/components/planning/planning.types'

import PlanningItemComponent from './PlanningItem.vue'

interface Props {
  draggedItemId?: string | null
  allowDragAndDrop?: boolean
  day: string
  endHour: number
  hourHeight: number
  items: T[]
  startHour: number
  onDragCreate?: (day: string, event: MouseEvent) => void
  onItemClick?: (item: T) => void
  onItemMove?: (item: T, event: MouseEvent) => void
  onItemResizeStart?: (item: T, edge: 'end' | 'start', event: MouseEvent) => void
}

const props = withDefaults(defineProps<Props>(), {
  draggedItemId: null,
  allowDragAndDrop: true,
})

type ItemT = typeof props.items[number]

const columnHeight = computed<number>(() => {
  const totalHours = props.endHour - props.startHour

  return totalHours * props.hourHeight
})

const dragDropEnabled = computed<boolean>(() =>
  props.allowDragAndDrop && Boolean(props.onItemMove || props.onDragCreate || props.onItemResizeStart))

function handleItemClick(item: ItemT): void {
  if (props.onItemClick) {
    props.onItemClick(item)
  }
}

function handleItemMouseDown(item: ItemT, event: MouseEvent): void {
  if (dragDropEnabled.value && props.onItemMove) {
    event.stopPropagation()
    props.onItemMove(item, event)
  }
}

function handleItemResizeStart(item: ItemT, edge: 'end' | 'start', event: MouseEvent): void {
  if (dragDropEnabled.value && props.onItemResizeStart) {
    event.stopPropagation()
    props.onItemResizeStart(item, edge, event)
  }
}

function handleColumnMouseDown(event: MouseEvent): void {
  if (!dragDropEnabled.value || !props.onDragCreate) {
    return
  }

  if (event.button !== 0) {
    return
  }

  if (event.target === event.currentTarget) {
    props.onDragCreate(props.day, event)
  }
}

const itemsComputed = computed<ItemT[]>(() => props.items)

const {
  laneLayout,
} = usePlanningItemLayout<ItemT>(itemsComputed)
</script>

<template>
  <div
    :data-planning-day="day"
    :style="{ minHeight: `${columnHeight}px` }"
    class="
      relative flex-1 border-r border-gray-200
      last:border-r-0
    "
    role="button"
    tabindex="0"
    @mousedown="handleColumnMouseDown"
  >
    <PlanningItemComponent
      v-for="item in items"
      :key="`${item.id}-${String(item.startsAt)}-${String(item.endsAt)}`"
      :item="item"
      :start-hour="startHour"
      :end-hour="endHour"
      :hour-height="hourHeight"
      :dragging="draggedItemId === item.id"
      :lane-left-percent="laneLayout[item.id]?.left ?? 0"
      :lane-width-percent="laneLayout[item.id]?.width ?? 100"
      :on-click="handleItemClick"
      :on-mouse-down="handleItemMouseDown"
      :on-resize-start="handleItemResizeStart"
    >
      <template #default="slotProps">
        <slot
          name="item-content"
          v-bind="slotProps"
        />
      </template>
    </PlanningItemComponent>

    <slot />
  </div>
</template>
