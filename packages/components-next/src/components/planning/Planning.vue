<script setup lang="ts" generic="T extends PlanningItem">
import {
  computed,
  onMounted,
  ref,
} from 'vue'

import { usePlanningDragDrop } from '@/components/planning/composables/usePlanningDragDrop.composable'
import { usePlanningGrid } from '@/components/planning/composables/usePlanningGrid.composable'
import { usePlanningLiveTimeIndicator } from '@/components/planning/composables/usePlanningLiveTimeIndicator.composable'
import { usePlanningWeek } from '@/components/planning/composables/usePlanningWeek.composable'
import { useResponsiveHourHeight } from '@/components/planning/composables/useResponsiveHourHeight.composable'
import PlanningCreateGhost from '@/components/planning/parts/PlanningCreateGhost.vue'
import PlanningDayColumn from '@/components/planning/parts/PlanningDayColumn.vue'
import PlanningDayHeaderRow from '@/components/planning/parts/PlanningDayHeaderRow.vue'
import PlanningDragGhost from '@/components/planning/parts/PlanningDragGhost.vue'
import PlanningGridLines from '@/components/planning/parts/PlanningGridLines.vue'
import PlanningHourLabels from '@/components/planning/parts/PlanningHourLabels.vue'
import PlanningLiveIndicator from '@/components/planning/parts/PlanningLiveIndicator.vue'
import PlanningLiveTimeLabel from '@/components/planning/parts/PlanningLiveTimeLabel.vue'
import PlanningWeekHeader from '@/components/planning/parts/PlanningWeekHeader.vue'
import type { PlanningProps } from '@/components/planning/planning.props'
import {
  createPlanningContainerStyle,
  createPlanningContentStyle,
  createPlanningGridStyle,
  createPlanningHourLabelsStyle,
  createPlanningScrollableBodyStyle,
  createPlanningStyle,
} from '@/components/planning/planning.style'
import type { PlanningItem } from '@/components/planning/planning.types'

const props = withDefaults(defineProps<PlanningProps<T>>(), {
  allowDragAndDrop: true,
  endHour: 24,
  hiddenDays: () => [],
  hourHeight: 48,
  showLiveIndicator: true,
  startHour: 0,
})

type ItemT = (typeof props.items)[number]

const scrollableBodyRef = ref<HTMLElement | null>(null)
const planningContainerRef = ref<HTMLElement | null>(null)

const items = computed<ItemT[]>(() => props.items)
const startHour = computed<number>(() => props.startHour)
const endHour = computed<number>(() => props.endHour)
const minimumHourHeight = computed<number>(() => props.hourHeight)
const hiddenDays = computed<number[]>(() => props.hiddenDays)

const {
  calculatedHourHeight,
} = useResponsiveHourHeight({
  containerRef: planningContainerRef,
  endHour,
  minimumHourHeight,
  startHour,
})

const planningWeek = usePlanningWeek({
  hiddenDays: hiddenDays.value,
})

const planningGrid = usePlanningGrid<ItemT>(
  items,
  startHour,
  endHour,
)

const liveIndicator = usePlanningLiveTimeIndicator({
  endHour,
  hourHeight: calculatedHourHeight,
  selectedWeekStart: planningWeek.selectedWeekStart,
  startHour,
})

const dragDrop = usePlanningDragDrop<ItemT>({
  endHour,
  hourHeight: calculatedHourHeight,
  startHour,
  onDragEnd: props.onDragEnd as any,
  onItemMove: props.onItemMove as any,
  onItemResize: props.onItemResize as any,
})

function handleItemClick(item: ItemT): void {
  props.onItemClick?.(item)
}

function handleItemMouseDown(item: ItemT, event: MouseEvent): void {
  if (props.allowDragAndDrop && props.onItemMove) {
    dragDrop.startDrag(item, event)
  }
}

function handleItemResizeStart(item: ItemT, edge: 'end' | 'start', event: MouseEvent): void {
  if (props.allowDragAndDrop && props.onItemResize) {
    dragDrop.startResize(item, edge, event)
  }
}

function handleDragCreate(day: string, event: MouseEvent): void {
  if (props.allowDragAndDrop && props.onDragEnd) {
    dragDrop.handleDragCreate(day, event)
  }
}

function scrollToDefaultHour(): void {
  if (scrollableBodyRef.value === null || props.scrollToHour === undefined) {
    return
  }

  scrollableBodyRef.value.scrollTop = (props.scrollToHour - props.startHour) * props.hourHeight
}

function handleWeekChange(weekStart: Date): void {
  props.onWeekChange?.(weekStart)
}

onMounted(() => {
  scrollToDefaultHour()
})

const planningClasses = computed<string>(() => createPlanningStyle())
const containerClasses = computed<string>(() => createPlanningContainerStyle())
const scrollableBodyClasses = computed<string>(() => createPlanningScrollableBodyStyle())
const gridClasses = computed<string>(() => createPlanningGridStyle())
const hourLabelsClasses = computed<string>(() => createPlanningHourLabelsStyle())
const contentClasses = computed<string>(() => createPlanningContentStyle())

function shouldShowDragGhost(day: string): boolean {
  return (
    (dragDrop.isDragging.value || dragDrop.isResizing.value)
    && dragDrop.draggedItem.value !== null
    && dragDrop.dragGhostPosition.value.day === day
  )
}
</script>

<template>
  <div
    ref="planningContainerRef"
    :class="planningClasses"
  >
    <div :class="containerClasses">
      <PlanningWeekHeader
        :week-range-label="planningWeek.weekInfo.value.label"
        :week-number-label="`Week ${planningWeek.weekInfo.value.weekNumber}`"
        today-label="Today"
        @go-to-today="planningWeek.goToToday"
        @prev-week="planningWeek.prevWeek"
        @next-week="planningWeek.nextWeek"
        @week-change="handleWeekChange"
      >
        <template #actions>
          <slot name="header-actions" />
        </template>
      </PlanningWeekHeader>

      <slot name="subheader" />

      <PlanningDayHeaderRow :days="planningWeek.weekInfo.value.days">
        <template #day-header="dayProps">
          <slot
            name="day-header"
            v-bind="dayProps"
          >
            <div class="text-sm">
              {{ dayProps.label }}
            </div>
          </slot>
        </template>
      </PlanningDayHeaderRow>

      <div
        ref="scrollableBodyRef"
        :class="scrollableBodyClasses"
      >
        <div :class="gridClasses">
          <div :class="hourLabelsClasses">
            <PlanningHourLabels
              :hours="planningGrid.hours.value"
              :hour-height="calculatedHourHeight"
            >
              <template #hour-label="hourProps">
                <slot
                  name="hour-label"
                  v-bind="hourProps"
                >
                  {{ hourProps.label }}
                </slot>
              </template>
            </PlanningHourLabels>

            <PlanningLiveTimeLabel
              v-if="showLiveIndicator && liveIndicator.indicatorVisible.value"
              :indicator-top="liveIndicator.indicatorTop.value"
              :time-label="liveIndicator.indicatorTimeLabel.value"
              class="absolute right-0 z-10"
            />
          </div>

          <div :class="contentClasses">
            <PlanningGridLines
              :hours="planningGrid.hours.value"
              :hour-height="calculatedHourHeight"
              :visible-days="planningWeek.visibleDays.value"
            />

            <PlanningLiveIndicator
              v-if="showLiveIndicator && liveIndicator.indicatorVisible.value"
              :indicator-top="liveIndicator.indicatorTop.value"
              :current-day-index="liveIndicator.currentDayIndex.value"
              :visible-days="planningWeek.visibleDays.value"
            />

            <PlanningDayColumn
              v-for="day in planningWeek.visibleDays.value"
              :key="day"
              :day="day"
              :items="planningGrid.getItemsForDay(day)"
              :start-hour="startHour"
              :end-hour="endHour"
              :hour-height="calculatedHourHeight"
              :allow-drag-and-drop="allowDragAndDrop"
              :dragged-item-id="dragDrop.draggedItem.value?.id || null"
              :on-item-click="handleItemClick"
              :on-item-move="handleItemMouseDown"
              :on-item-resize-start="handleItemResizeStart"
              :on-drag-create="handleDragCreate"
            >
              <template #item-content="itemProps">
                <slot
                  name="item-content"
                  v-bind="itemProps"
                />
              </template>

              <PlanningDragGhost
                v-if="shouldShowDragGhost(day)"
                :day="day"
                :height="dragDrop.dragGhostPosition.value.height"
                :item="dragDrop.draggedItem.value!"
                :top="dragDrop.dragGhostPosition.value.top"
                :start-hour="startHour"
                :hour-height="calculatedHourHeight"
              />

              <PlanningCreateGhost
                v-if="dragDrop.isDragCreate.value && dragDrop.createGhostPosition.value.day === day"
                :day="day"
                :height="dragDrop.createGhostPosition.value.height"
                :top="dragDrop.createGhostPosition.value.top"
              />
            </PlanningDayColumn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
