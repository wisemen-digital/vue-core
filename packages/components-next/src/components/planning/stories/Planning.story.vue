<script setup lang="ts">
import { ref } from 'vue'

import type {
  PlanningDragPayload,
  PlanningItem,
  PlanningMovePayload,
  PlanningResizePayload,
} from '@/components/planning'
import { VcPlanning } from '@/components/planning'

// Define a custom item type that extends PlanningItem
interface CustomPlanningItem extends PlanningItem {
  category?: string
  priority?: 'high' | 'low' | 'medium'
}

const today = new Date()
const tomorrow = new Date(today)

tomorrow.setDate(today.getDate() + 1)

const basicItems = ref<CustomPlanningItem[]>([
  {
    id: '1',
    title: 'Team Standup',
    endsAt: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 10, 0).toISOString(),
    startsAt: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9, 0).toISOString(),
    backgroundColor: '#3b82f6',
    category: 'meeting',
    color: '#1d4ed8',
    description: 'Daily sync meeting',
    priority: 'high',
  },
  {
    id: '2',
    title: 'Client Call',
    endsAt: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 15, 30).toISOString(),
    startsAt: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 14, 0).toISOString(),
    backgroundColor: '#10b981',
    category: 'client',
    color: '#059669',
    description: 'Project review',
    priority: 'medium',
  },
  {
    id: '3',
    title: 'Development',
    endsAt: new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), 12, 0).toISOString(),
    startsAt: new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), 10, 0).toISOString(),
    backgroundColor: '#f59e0b',
    category: 'development',
    color: '#d97706',
    description: 'Feature implementation',
    priority: 'low',
  },
])

function handleItemClick(item: CustomPlanningItem): void {
  basicItems.value = basicItems.value.filter((i) => i.id !== item.id)
}

function handleItemMove(payload: PlanningMovePayload<CustomPlanningItem>): void {
  basicItems.value = basicItems.value.map((item) => {
    if (item.id === payload.item.id) {
      return {
        ...item,
        endsAt: payload.updatedEnd.toISOString(),
        startsAt: payload.updatedStart.toISOString(),
      }
    }

    return item
  })
}

function handleDragEnd(payload: PlanningDragPayload): void {
  const newItem: CustomPlanningItem = {
    id: Date.now().toString(),
    title: 'New Event',
    endsAt: payload.end.toISOString(),
    startsAt: payload.start.toISOString(),
    backgroundColor: '#6366f1',
    category: 'other',
    color: '#4338ca',
    description: 'Click to delete this event',
    priority: 'medium',
  }

  basicItems.value = [
    ...basicItems.value,
    newItem,
  ]
}

function handleItemResize(payload: PlanningResizePayload<CustomPlanningItem>): void {
  basicItems.value = basicItems.value.map((item) => {
    if (item.id !== payload.item.id) {
      return item
    }

    return {
      ...item,
      endsAt: payload.updatedEnd.toISOString(),
      startsAt: payload.updatedStart.toISOString(),
    }
  })
}
</script>

<template>
  <Story title="Planning">
    <div class="size-full pt-16">
      <VcPlanning
        :items="basicItems"
        :start-hour="8"
        :end-hour="18"
        :on-item-click="handleItemClick"
        :on-item-move="handleItemMove"
        :on-item-resize="handleItemResize"
        :on-drag-end="handleDragEnd"
      >
        <template #item-content="{ item }">
          <div class="flex h-full flex-col">
            <div class="truncate font-medium">
              {{ item.title }}
            </div>
            <div class="truncate text-xs opacity-75">
              {{ item.description }}
            </div>
            <div class="mt-auto flex justify-between text-xs opacity-60">
              <span>{{ item.category }}</span>
              <span class="capitalize">{{ item.priority }}</span>
            </div>
          </div>
        </template>
      </VcPlanning>
    </div>
  </Story>
</template>
