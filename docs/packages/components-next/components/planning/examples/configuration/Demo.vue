<script setup lang="ts">
import {
  computed,
  reactive,
} from 'vue'

import type { PlanningItem } from '@/components/planning'
import { VcPlanning } from '@/components/planning'

const today = new Date()
const tomorrow = new Date(today)

tomorrow.setDate(today.getDate() + 1)

const dayNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const config = reactive({
  startHour: 8,
  endHour: 18,
  hourHeight: 48,
  hiddenDays: [] as number[],
  showLiveIndicator: true,
  allowDragAndDrop: true,
  scrollToHour: undefined as number | undefined,
  enableItemClick: true,
  enableItemMove: true,
  enableDragEnd: true,
  enableWeekChange: false,
})

const items: PlanningItem[] = [
  {
    id: '1',
    title: 'Morning Meeting',
    startsAt: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9, 0),
    endsAt: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 10, 0),
    backgroundColor: '#3b82f6',
    color: '#1d4ed8',
    description: 'Team standup',
  },
  {
    id: '2',
    title: 'Lunch Break',
    startsAt: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12, 0),
    endsAt: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 13, 0),
    backgroundColor: '#10b981',
    color: '#059669',
    description: 'Personal time',
  },
  {
    id: '3',
    title: 'Project Work',
    startsAt: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 14, 0),
    endsAt: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 16, 30),
    backgroundColor: '#f59e0b',
    color: '#d97706',
    description: 'Development time',
  },
  {
    id: '4',
    title: 'Client Call',
    startsAt: new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), 10, 0),
    endsAt: new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), 11, 0),
    backgroundColor: '#ef4444',
    color: '#dc2626',
    description: 'Weekly check-in',
  },
]

const totalHours = computed(() => config.endHour - config.startHour)
const totalHeight = computed(() => totalHours.value * config.hourHeight)

const hiddenDaysText = computed(() => {
  if (config.hiddenDays.length === 0) { return 'None' }

  return config.hiddenDays.map((day) => dayNames[day]).join(', ')
})

const activeHandlers = computed(() => {
  const handlers = []

  if (config.enableItemClick) { handlers.push('onItemClick') }
  if (config.enableItemMove) { handlers.push('onItemMove') }
  if (config.enableDragEnd) { handlers.push('onDragEnd') }
  if (config.enableWeekChange) { handlers.push('onWeekChange') }

  return handlers
})

const currentHandlers = computed(() => {
  const handlers: Record<string, Function> = {}

  if (config.enableItemClick) { handlers.onItemClick = handleItemClick }
  if (config.enableItemMove) { handlers.onItemMove = handleItemMove }
  if (config.enableDragEnd) { handlers.onDragEnd = handleDragEnd }
  if (config.enableWeekChange) { handlers.onWeekChange = handleWeekChange }

  return handlers
})

const generatedCode = computed(() => {
  const props = []

  props.push(`:items="items"`)

  if (config.startHour !== 0) { props.push(`:start-hour="${config.startHour}"`) }
  if (config.endHour !== 24) { props.push(`:end-hour="${config.endHour}"`) }
  if (config.hourHeight !== 48) { props.push(`:hour-height="${config.hourHeight}"`) }
  if (config.hiddenDays.length > 0) { props.push(`:hidden-days="[${config.hiddenDays.join(', ')}]"`) }
  if (!config.showLiveIndicator) { props.push(`:show-live-indicator="false"`) }
  if (!config.allowDragAndDrop) { props.push(`:allow-drag-and-drop="false"`) }
  if (config.scrollToHour !== undefined) { props.push(`:scroll-to-hour="${config.scrollToHour}"`) }

  if (config.enableItemClick) { props.push(`:on-item-click="handleItemClick"`) }
  if (config.enableItemMove) { props.push(`:on-item-move="handleItemMove"`) }
  if (config.enableDragEnd) { props.push(`:on-drag-end="handleDragEnd"`) }
  if (config.enableWeekChange) { props.push(`:on-week-change="handleWeekChange"`) }

  return `<VcPlanning\n  ${props.join('\n  ')}\n/>`
})

function toggleHiddenDay(dayIndex: number) {
  const index = config.hiddenDays.indexOf(dayIndex)

  if (index !== -1) {
    config.hiddenDays.splice(index, 1)
  }
  else {
    config.hiddenDays.push(dayIndex)
  }
}

function resetConfig() {
  Object.assign(config, {
    startHour: 8,
    endHour: 18,
    hourHeight: 48,
    hiddenDays: [],
    showLiveIndicator: true,
    allowDragAndDrop: true,
    scrollToHour: undefined,
    enableItemClick: true,
    enableItemMove: true,
    enableDragEnd: true,
    enableWeekChange: false,
  })
}

// Event handlers
function handleItemClick(item: PlanningItem) {
  console.log('Item clicked:', item.title)
}

function handleItemMove(payload: any) {
  console.log('Item moved:', payload.item.title)
}

function handleDragEnd(payload: any) {
  console.log('Create new item at:', payload.day, payload.start.toLocaleTimeString())
}

function handleWeekChange(weekStart: Date) {
  console.log('Week changed:', weekStart.toLocaleDateString())
}
</script>

<template>
  <div class="space-y-6">
    <div class="rounded-lg border border-gray-200 bg-white p-6">
      <h2 class="mb-4 text-xl font-semibold">
        Configuration Options
      </h2>
      <p class="mb-6 text-gray-600">
        Explore all the configuration options available for the Planning component.
        Adjust settings to see how they affect the component's behavior and appearance.
      </p>

      <!-- Configuration Controls -->
      <div class="mb-6 space-y-4">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <!-- Time Range -->
          <div class="space-y-2">
            <label class="block text-sm font-medium text-gray-700">Time Range</label>
            <div class="flex gap-2">
              <div>
                <label class="text-xs text-gray-500">Start Hour</label>
                <input
                  v-model.number="config.startHour"
                  type="number"
                  min="0"
                  max="23"
                  class="block w-full rounded border-gray-300 text-sm"
                >
              </div>
              <div>
                <label class="text-xs text-gray-500">End Hour</label>
                <input
                  v-model.number="config.endHour"
                  type="number"
                  min="1"
                  max="24"
                  class="block w-full rounded border-gray-300 text-sm"
                >
              </div>
            </div>
          </div>

          <!-- Hour Height -->
          <div>
            <label class="block text-sm font-medium text-gray-700">Hour Height</label>
            <div class="mt-1">
              <input
                v-model.number="config.hourHeight"
                type="range"
                min="30"
                max="120"
                class="w-full"
              >
              <div class="text-xs text-gray-500">
                {{ config.hourHeight }}px
              </div>
            </div>
          </div>

          <!-- Scroll To Hour -->
          <div>
            <label class="block text-sm font-medium text-gray-700">Scroll to Hour</label>
            <select
              v-model.number="config.scrollToHour"
              class="mt-1 block w-full rounded border-gray-300 text-sm"
            >
              <option :value="undefined">
                No auto-scroll
              </option>
              <option
                v-for="hour in 24"
                :key="hour - 1"
                :value="hour - 1"
              >
                {{ String(hour - 1).padStart(2, '0') }}:00
              </option>
            </select>
          </div>
        </div>

        <!-- Boolean Options -->
        <div class="flex flex-wrap gap-4">
          <label class="flex items-center">
            <input
              v-model="config.showLiveIndicator"
              type="checkbox"
              class="rounded border-gray-300"
            >
            <span class="ml-2 text-sm text-gray-700">Show Live Time Indicator</span>
          </label>
          <label class="flex items-center">
            <input
              v-model="config.allowDragAndDrop"
              type="checkbox"
              class="rounded border-gray-300"
            >
            <span class="ml-2 text-sm text-gray-700">Allow Drag & Drop</span>
          </label>
        </div>

        <!-- Hidden Days -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Hidden Days</label>
          <div class="flex flex-wrap gap-2">
            <label
              v-for="(day, index) in dayNames"
              :key="index"
              class="flex items-center"
            >
              <input
                :checked="config.hiddenDays.includes(index)"
                type="checkbox"
                class="rounded border-gray-300"
                @change="toggleHiddenDay(index)"
              >
              <span class="ml-1 text-sm text-gray-700">{{ day }}</span>
            </label>
          </div>
        </div>

        <!-- Event Handlers Toggle -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Event Handlers</label>
          <div class="flex flex-wrap gap-4">
            <label class="flex items-center">
              <input
                v-model="config.enableItemClick"
                type="checkbox"
                class="rounded border-gray-300"
              >
              <span class="ml-2 text-sm text-gray-700">Enable Item Click</span>
            </label>
            <label class="flex items-center">
              <input
                v-model="config.enableItemMove"
                type="checkbox"
                class="rounded border-gray-300"
              >
              <span class="ml-2 text-sm text-gray-700">Enable Item Move</span>
            </label>
            <label class="flex items-center">
              <input
                v-model="config.enableDragEnd"
                type="checkbox"
                class="rounded border-gray-300"
              >
              <span class="ml-2 text-sm text-gray-700">Enable Drag Create</span>
            </label>
            <label class="flex items-center">
              <input
                v-model="config.enableWeekChange"
                type="checkbox"
                class="rounded border-gray-300"
              >
              <span class="ml-2 text-sm text-gray-700">Enable Week Change</span>
            </label>
          </div>
        </div>
      </div>

      <!-- Current Configuration Display -->
      <div class="mb-4 rounded bg-blue-50 p-3">
        <h3 class="mb-2 text-sm font-medium text-blue-900">
          Current Configuration
        </h3>
        <div class="text-xs text-blue-800">
          <div>Time Range: {{ config.startHour }}:00 - {{ config.endHour }}:00 ({{ totalHours }} hours)</div>
          <div>Hour Height: {{ config.hourHeight }}px (Total Height: ~{{ totalHeight }}px)</div>
          <div>Hidden Days: {{ hiddenDaysText }}</div>
          <div>Active Handlers: {{ activeHandlers.join(', ') || 'None' }}</div>
        </div>
      </div>

      <!-- Planning Component -->
      <div class="h-96 rounded-lg border">
        <VcPlanning
          :items="items"
          :start-hour="config.startHour"
          :end-hour="config.endHour"
          :hour-height="config.hourHeight"
          :hidden-days="config.hiddenDays"
          :show-live-indicator="config.showLiveIndicator"
          :allow-drag-and-drop="config.allowDragAndDrop"
          :scroll-to-hour="config.scrollToHour"
          v-bind="currentHandlers"
        />
      </div>

      <!-- Reset Button -->
      <div class="mt-4">
        <button
          class="rounded bg-gray-600 px-4 py-2 text-white hover:bg-gray-700"
          @click="resetConfig"
        >
          Reset to Defaults
        </button>
      </div>
    </div>

    <!-- Generated Code -->
    <div class="rounded-lg border border-gray-200 bg-gray-50 p-6">
      <h3 class="mb-2 text-lg font-medium">
        Generated Configuration
      </h3>
      <p class="mb-3 text-sm text-gray-600">
        Copy this code to reproduce the current configuration:
      </p>
      <pre class="overflow-x-auto rounded bg-gray-800 p-4 text-sm text-white"><code>{{ generatedCode }}</code></pre>
    </div>
  </div>
</template>
