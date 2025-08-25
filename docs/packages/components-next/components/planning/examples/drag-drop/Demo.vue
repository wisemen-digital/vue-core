<script setup lang="ts">
import { ref } from 'vue'

import type { PlanningItem } from '@/components/planning'
import { VcPlanning } from '@/components/planning'

const today = new Date()
const tomorrow = new Date(today)

tomorrow.setDate(today.getDate() + 1)

const moveCount = ref(0)
const createCount = ref(0)

const items = ref<PlanningItem[]>([
  {
    id: '1',
    title: 'Team Meeting',
    startsAt: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9, 0),
    endsAt: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 10, 0),
    backgroundColor: '#3b82f6',
    color: '#1d4ed8',
    description: 'Weekly team sync',
    metadata: {
      type: 'Meeting',
      draggable: true,
    },
  },
  {
    id: '2',
    title: 'Code Review',
    startsAt: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 14, 0),
    endsAt: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 15, 0),
    backgroundColor: '#10b981',
    color: '#059669',
    description: 'Review pull requests',
    metadata: {
      type: 'Development',
      draggable: true,
    },
  },
  {
    id: '3',
    title: 'Client Call',
    startsAt: new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), 11, 0),
    endsAt: new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), 12, 0),
    backgroundColor: '#f59e0b',
    color: '#d97706',
    description: 'Weekly check-in',
    metadata: {
      type: 'Client',
      draggable: true,
    },
  },
])

function handleItemMove(payload: { item: PlanningItem
  updatedDay: string
  updatedEnd: Date
  updatedStart: Date }) {
  const {
    item,
    updatedStart,
    updatedEnd,
  } = payload

  // Find and update the item
  const itemIndex = items.value.findIndex((i) => i.id === item.id)

  if (itemIndex !== -1) {
    items.value[itemIndex] = {
      ...items.value[itemIndex],
      startsAt: updatedStart,
      endsAt: updatedEnd,
    }
    moveCount.value++
  }
}

function handleDragEnd(payload: { day: string
  end: Date
  start: Date }) {
  const {
    start, end,
  } = payload

  const newItem: PlanningItem = {
    id: `item-${Date.now()}`,
    title: `New Event ${createCount.value + 1}`,
    startsAt: start,
    endsAt: end,
    backgroundColor: getRandomColor(),
    description: 'Created by drag & drop',
  }

  items.value.push(newItem)
  createCount.value++
}

function handleItemClick(item: PlanningItem) {
  // Example: Toggle item color on click
  const colors = [
    '#3b82f6',
    '#10b981',
    '#f59e0b',
    '#ef4444',
    '#8b5cf6',
  ]
  const currentIndex = colors.indexOf(item.backgroundColor || '#3b82f6')
  const nextIndex = (currentIndex + 1) % colors.length

  const itemIndex = items.value.findIndex((i) => i.id === item.id)

  if (itemIndex !== -1) {
    items.value[itemIndex] = {
      ...items.value[itemIndex],
      backgroundColor: colors[nextIndex],
    }
  }
}

function getRandomColor(): string {
  const colors = [
    '#3b82f6',
    '#10b981',
    '#f59e0b',
    '#ef4444',
    '#8b5cf6',
    '#06b6d4',
  ]

  return colors[Math.floor(Math.random() * colors.length)]
}

function addRandomItem() {
  const startHour = Math.floor(Math.random() * 8) + 8 // 8-15
  const duration = Math.floor(Math.random() * 3) + 1 // 1-3 hours
  const dayOffset = Math.floor(Math.random() * 5) // 0-4 days from today

  const startDate = new Date(today)

  startDate.setDate(today.getDate() + dayOffset)
  startDate.setHours(startHour, 0, 0, 0)

  const endDate = new Date(startDate)

  endDate.setHours(startHour + duration)

  const newItem: PlanningItem = {
    id: `random-${Date.now()}`,
    title: `Random Event ${items.value.length + 1}`,
    startsAt: startDate,
    endsAt: endDate,
    backgroundColor: getRandomColor(),
    description: 'Randomly generated event',
  }

  items.value.push(newItem)
}

function clearAllItems() {
  items.value = []
  moveCount.value = 0
  createCount.value = 0
}

function resetDemo() {
  items.value = [
    {
      id: '1',
      title: 'Team Meeting',
      startsAt: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9, 0),
      endsAt: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 10, 0),
      backgroundColor: '#3b82f6',
      color: '#1d4ed8',
      description: 'Weekly team sync',
    },
    {
      id: '2',
      title: 'Code Review',
      startsAt: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 14, 0),
      endsAt: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 15, 0),
      backgroundColor: '#10b981',
      color: '#059669',
      description: 'Review pull requests',
    },
  ]
  moveCount.value = 0
  createCount.value = 0
}
</script>

<template>
  <div class="space-y-6">
    <div class="rounded-lg border border-gray-200 bg-white p-6">
      <h2 class="mb-4 text-xl font-semibold">
        Drag & Drop Implementation
      </h2>
      <p class="mb-4 text-gray-600">
        Complete drag and drop implementation showing how to handle item movement and creation.
        The component provides visual feedback during drag operations.
      </p>

      <!-- Stats Display -->
      <div class="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div class="rounded-lg bg-blue-50 p-4">
          <div class="text-2xl font-bold text-blue-900">
            {{ items.length }}
          </div>
          <div class="text-sm text-blue-700">
            Total Items
          </div>
        </div>
        <div class="rounded-lg bg-green-50 p-4">
          <div class="text-2xl font-bold text-green-900">
            {{ moveCount }}
          </div>
          <div class="text-sm text-green-700">
            Items Moved
          </div>
        </div>
        <div class="rounded-lg bg-purple-50 p-4">
          <div class="text-2xl font-bold text-purple-900">
            {{ createCount }}
          </div>
          <div class="text-sm text-purple-700">
            Items Created
          </div>
        </div>
      </div>

      <!-- Instructions -->
      <div class="mb-4 rounded-lg bg-yellow-50 p-4">
        <h3 class="mb-2 font-medium text-yellow-900">
          How to use:
        </h3>
        <ul class="space-y-1 text-sm text-yellow-800">
          <li>• <strong>Drag existing items</strong> to move them to different times/days</li>
          <li>• <strong>Click empty space</strong> to create new items at that time</li>
          <li>• <strong>Notice the visual feedback</strong> - grab cursor, hover effects, drag opacity</li>
        </ul>
      </div>

      <!-- Planning Component -->
      <div class="h-96 rounded-lg border">
        <VcPlanning
          :items="items"
          :start-hour="8"
          :end-hour="18"
          :hour-height="50"
          :on-item-move="handleItemMove"
          :on-drag-end="handleDragEnd"
          :on-item-click="handleItemClick"
        >
          <template #item-content="{ item, position }">
            <div class="flex h-full flex-col">
              <div class="font-medium truncate">
                {{ item.title }}
              </div>
              <div
                v-if="item.metadata?.type"
                class="text-xs opacity-75"
              >
                {{ item.metadata.type }}
              </div>
              <div
                v-if="position.height.value > 40"
                class="mt-auto text-xs opacity-60"
              >
                {{ position.timeLabel.value }}
              </div>
            </div>
          </template>
        </VcPlanning>
      </div>

      <!-- Actions -->
      <div class="mt-4 flex gap-2">
        <button
          class="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          @click="addRandomItem"
        >
          Add Random Item
        </button>
        <button
          class="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
          @click="clearAllItems"
        >
          Clear All
        </button>
        <button
          class="rounded bg-gray-600 px-4 py-2 text-white hover:bg-gray-700"
          @click="resetDemo"
        >
          Reset Demo
        </button>
      </div>
    </div>

    <div class="rounded-lg border border-gray-200 bg-gray-50 p-6">
      <h3 class="mb-2 text-lg font-medium">
        Implementation Example
      </h3>
      <pre class="overflow-x-auto rounded bg-gray-800 p-4 text-sm text-white"><code>&lt;VcPlanning
  :items="items"
  :on-item-move="handleItemMove"
  :on-drag-end="handleDragEnd"
  :on-item-click="handleItemClick"
&gt;
  &lt;template #item-content="{ item, position }"&gt;
    &lt;!-- Custom item content --&gt;
  &lt;/template&gt;
&lt;/VcPlanning&gt;

&lt;script setup&gt;
function handleItemMove(payload) {
  // Update item position in your data store
  const { item, updatedDay, updatedStart, updatedEnd } = payload

  // Find and update the item
  const itemIndex = items.value.findIndex(i => i.id === item.id)
  if (itemIndex >= 0) {
    items.value[itemIndex] = {
      ...items.value[itemIndex],
      startsAt: updatedStart,
      endsAt: updatedEnd
    }
  }
}

function handleDragEnd(payload) {
  // Create new item at the specified location
  const { day, start, end } = payload

  const newItem = {
    id: generateId(),
    title: 'New Event',
    startsAt: start,
    endsAt: end,
    backgroundColor: '#3b82f6'
  }

  items.value.push(newItem)
}
&lt;/script&gt;</code></pre>
    </div>
  </div>
</template>
