<script setup lang="ts">
import {
  computed,
  ref,
} from 'vue'

import type { PlanningItem } from '@/components/planning'
import { VcPlanning } from '@/components/planning'

const today = new Date()
const tomorrow = new Date(today)

tomorrow.setDate(today.getDate() + 1)

const items = ref<PlanningItem[]>([
  {
    id: '1',
    title: 'Team Standup',
    startsAt: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9, 0),
    endsAt: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9, 30),
    backgroundColor: '#3b82f6',
    color: '#1d4ed8',
    description: 'Daily sync meeting',
  },
  {
    id: '2',
    title: 'Project Work',
    startsAt: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 10, 0),
    endsAt: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12, 0),
    backgroundColor: '#10b981',
    color: '#059669',
    description: 'Development time',
  },
  {
    id: '3',
    title: 'Client Meeting',
    startsAt: new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), 14, 0),
    endsAt: new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), 15, 0),
    backgroundColor: '#f59e0b',
    color: '#d97706',
    description: 'Weekly check-in',
  },
])

const eventLog = ref<Array<{ message: string
  timestamp: string }>>([])

function logEvent(message: string) {
  eventLog.value.unshift({
    timestamp: new Date().toLocaleTimeString(),
    message,
  })

  if (eventLog.value.length > 20) {
    eventLog.value = eventLog.value.slice(0, 20)
  }
}

// Event handlers
function handleItemClick(item: PlanningItem) {
  logEvent(`Item clicked: "${item.title}"`)
}

function handleItemMove(payload: { item: PlanningItem
  updatedDay: string
  updatedEnd: Date
  updatedStart: Date }) {
  logEvent(`Item moved: "${payload.item.title}" to ${payload.updatedDay} at ${payload.updatedStart.toLocaleTimeString()}`)
}

function handleDragEnd(payload: { day: string
  end: Date
  start: Date }) {
  logEvent(`Create new item: ${payload.day} from ${payload.start.toLocaleTimeString()} to ${payload.end.toLocaleTimeString()}`)
}

function handleWeekChange(weekStart: Date) {
  logEvent(`Week changed: ${weekStart.toLocaleDateString()}`)
}

// Interaction modes
const interactionModes = [
  {
    key: 'readOnly',
    label: 'Read-Only',
    description: 'No handlers provided - items show default cursor and no interaction',
    handlers: {},
    code: `<VcPlanning :items="items" />`,
  },
  {
    key: 'clickOnly',
    label: 'Click-Only',
    description: 'Only click handler - items show pointer cursor and click effects',
    handlers: {
      onItemClick: handleItemClick,
    },
    code: `<VcPlanning
  :items="items"
  :on-item-click="handleItemClick"
/>`,
  },
  {
    key: 'dragOnly',
    label: 'Drag-Only',
    description: 'Only drag handlers - items show grab cursor, can move and create',
    handlers: {
      onItemMove: handleItemMove,
      onDragEnd: handleDragEnd,
    },
    code: `<VcPlanning
  :items="items"
  :on-item-move="handleItemMove"
  :on-drag-end="handleDragEnd"
/>`,
  },
  {
    key: 'fullInteractive',
    label: 'Fully Interactive',
    description: 'All handlers provided - complete interaction capabilities',
    handlers: {
      onItemClick: handleItemClick,
      onItemMove: handleItemMove,
      onDragEnd: handleDragEnd,
      onWeekChange: handleWeekChange,
    },
    code: `<VcPlanning
  :items="items"
  :on-item-click="handleItemClick"
  :on-item-move="handleItemMove"
  :on-drag-end="handleDragEnd"
  :on-week-change="handleWeekChange"
/>`,
  },
]

const currentMode = ref('fullInteractive')

const currentHandlers = computed(() => {
  return interactionModes.find((mode) => mode.key === currentMode.value)?.handlers || {}
})

const currentModeCode = computed(() => {
  return interactionModes.find((mode) => mode.key === currentMode.value)?.code || ''
})
</script>

<template>
  <div class="space-y-6">
    <div class="rounded-lg border border-gray-200 bg-white p-6">
      <h2 class="mb-4 text-xl font-semibold">
        Event Handling Examples
      </h2>
      <p class="mb-4 text-gray-600">
        Demonstrates the new props-based event handling system. The component automatically
        adapts its behavior based on which event handlers you provide.
      </p>

      <!-- Interaction Mode Selector -->
      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-700 mb-2">Interaction Mode:</label>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="mode in interactionModes"
            :key="mode.key"
            :class="[
              currentMode === mode.key
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
            ]"
            class="px-4 py-2 rounded-md text-sm font-medium transition-colors"
            @click="currentMode = mode.key"
          >
            {{ mode.label }}
          </button>
        </div>
        <p class="mt-2 text-sm text-gray-600">
          {{ interactionModes.find(m => m.key === currentMode)?.description }}
        </p>
      </div>

      <!-- Event Log -->
      <div class="mb-4">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-medium">
            Event Log
          </h3>
          <button
            class="text-sm text-gray-500 hover:text-gray-700"
            @click="eventLog = []"
          >
            Clear Log
          </button>
        </div>
        <div class="mt-2 h-32 overflow-y-auto rounded border bg-gray-50 p-3">
          <div
            v-for="(event, index) in eventLog"
            :key="index"
            class="text-sm"
          >
            <span class="font-mono text-blue-600">{{ event.timestamp }}</span>
            <span class="ml-2">{{ event.message }}</span>
          </div>
          <div
            v-if="eventLog.length === 0"
            class="text-sm text-gray-500"
          >
            No events yet. Interact with the planning component below.
          </div>
        </div>
      </div>

      <!-- Planning Component -->
      <div class="h-96 rounded-lg border">
        <VcPlanning
          :items="items"
          :start-hour="8"
          :end-hour="18"
          v-bind="currentHandlers"
        />
      </div>
    </div>

    <div class="rounded-lg border border-gray-200 bg-gray-50 p-6">
      <h3 class="mb-2 text-lg font-medium">
        Current Configuration
      </h3>
      <pre class="overflow-x-auto rounded bg-gray-800 p-4 text-sm text-white"><code>{{ currentModeCode }}</code></pre>
    </div>
  </div>
</template>
