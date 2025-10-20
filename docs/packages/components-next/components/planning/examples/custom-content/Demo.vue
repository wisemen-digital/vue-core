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

const showFilters = ref(false)
const currentStyle = ref('default')

const filters = ref([
  {
    type: 'meeting',
    label: 'Meetings',
    active: true,
  },
  {
    type: 'development',
    label: 'Development',
    active: true,
  },
  {
    type: 'client',
    label: 'Client Work',
    active: true,
  },
  {
    type: 'personal',
    label: 'Personal',
    active: false,
  },
])

const allItems: PlanningItem[] = [
  {
    id: '1',
    title: 'Team Standup',
    startsAt: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9, 0),
    endsAt: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9, 30),
    backgroundColor: '#3b82f6',
    color: '#1d4ed8',
    description: 'Daily sync meeting',
    metadata: {
      type: 'meeting',
      priority: 'high',
      attendees: 5,
    },
  },
  {
    id: '2',
    title: 'Code Review Session',
    startsAt: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 10, 30),
    endsAt: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12, 0),
    backgroundColor: '#10b981',
    color: '#059669',
    description: 'Review pull requests',
    metadata: {
      type: 'development',
      priority: 'medium',
      complexity: 'high',
    },
  },
  {
    id: '3',
    title: 'Client Presentation',
    startsAt: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 14, 0),
    endsAt: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 15, 30),
    backgroundColor: '#f59e0b',
    color: '#d97706',
    description: 'Q4 roadmap presentation',
    metadata: {
      type: 'client',
      priority: 'high',
      attendees: 8,
    },
  },
  {
    id: '4',
    title: 'Lunch Break',
    startsAt: new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), 12, 0),
    endsAt: new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), 13, 0),
    backgroundColor: '#8b5cf6',
    color: '#7c3aed',
    description: 'Personal time',
    metadata: {
      type: 'personal',
      priority: 'low',
    },
  },
]

const items = computed(() => {
  const activeTypes = new Set(filters.value.filter((f) => f.active).map((f) => f.type))

  return allItems.filter((item) => activeTypes.has(item.metadata?.type || ''))
})

const contentStyles = [
  {
    key: 'default',
    label: 'Default',
  },
  {
    key: 'detailed',
    label: 'Detailed',
  },
  {
    key: 'minimal',
    label: 'Minimal',
  },
  {
    key: 'priority',
    label: 'Priority Badges',
  },
]

const currentContentComponent = computed(() => {
  switch (currentStyle.value) {
    case 'detailed': return DetailedItemContent
    case 'minimal': return MinimalItemContent
    case 'priority': return PriorityItemContent
    default: return DefaultItemContent
  }
})

function toggleFilter(type: string) {
  const filter = filters.value.find((f) => f.type === type)

  if (filter) {
    filter.active = !filter.active
  }
}

function getEventCount(day: string): number {
  return items.value.filter((item) => {
    const itemDate = new Date(item.startsAt)
    const itemDay = itemDate.toISOString().split('T')[0]

    return itemDay === day
  }).length
}

function handleItemClick(item: PlanningItem) {
  console.log('Item clicked:', item)
}

function refreshData() {
  console.log('Data refreshed')
}

// Content Components
const DefaultItemContent = {
  props: [
    'item',
    'position',
  ],
  template: `
    <div class="flex h-full flex-col">
      <div class="font-medium truncate">{{ item.title }}</div>
      <div v-if="item.description" class="text-xs opacity-75 truncate">
        {{ item.description }}
      </div>
      <div v-if="position.height.value > 40" class="mt-auto text-xs opacity-60">
        {{ position.timeLabel.value }}
      </div>
    </div>
  `,
}

const DetailedItemContent = {
  props: [
    'item',
    'position',
  ],
  template: `
    <div class="flex h-full flex-col p-1">
      <div class="font-medium truncate">{{ item.title }}</div>
      <div v-if="item.description" class="text-xs opacity-75 truncate mb-1">
        {{ item.description }}
      </div>
      <div class="flex items-center gap-1 text-xs">
        <span v-if="item.metadata?.attendees" class="bg-white bg-opacity-20 rounded px-1">
          👥 {{ item.metadata.attendees }}
        </span>
        <span v-if="item.metadata?.priority" :class="getPriorityClass(item.metadata.priority)">
          {{ item.metadata.priority.toUpperCase() }}
        </span>
      </div>
      <div v-if="position.height.value > 60" class="mt-auto text-xs opacity-60">
        {{ position.timeLabel.value }}
      </div>
    </div>
  `,
  methods: {
    getPriorityClass(priority: string) {
      const classes = {
        high: 'bg-red-200 text-red-800',
        medium: 'bg-yellow-200 text-yellow-800',
        low: 'bg-green-200 text-green-800',
      }

      return `rounded px-1 text-xs ${classes[priority] || ''}`
    },
  },
}

const MinimalItemContent = {
  props: [
    'item',
    'position',
  ],
  template: `
    <div class="flex h-full items-center justify-center">
      <div class="font-medium text-center truncate">{{ item.title }}</div>
    </div>
  `,
}

const PriorityItemContent = {
  props: [
    'item',
    'position',
  ],
  template: `
    <div class="flex h-full flex-col">
      <div class="flex items-center gap-2">
        <div :class="getPriorityDot(item.metadata?.priority)" class="w-2 h-2 rounded-full"></div>
        <div class="font-medium truncate flex-1">{{ item.title }}</div>
      </div>
      <div v-if="item.description && position.height.value > 30" class="text-xs opacity-75 truncate">
        {{ item.description }}
      </div>
      <div v-if="position.height.value > 50" class="mt-auto text-xs opacity-60">
        {{ position.timeLabel.value }}
      </div>
    </div>
  `,
  methods: {
    getPriorityDot(priority: string) {
      const classes = {
        high: 'bg-red-500',
        medium: 'bg-yellow-500',
        low: 'bg-green-500',
      }

      return classes[priority] || 'bg-gray-500'
    },
  },
}
</script>

<template>
  <div class="space-y-6">
    <div class="rounded-lg border border-gray-200 bg-white p-6">
      <h2 class="mb-4 text-xl font-semibold">
        Custom Content & Slots
      </h2>
      <p class="mb-4 text-gray-600">
        Demonstrates how to customize the appearance and content of the planning component
        using slots for headers, items, and other elements.
      </p>

      <!-- Content Type Selector -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 mb-2">Content Style:</label>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="style in contentStyles"
            :key="style.key"
            :class="[
              currentStyle === style.key
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
            ]"
            class="px-3 py-1 rounded-md text-sm font-medium transition-colors"
            @click="currentStyle = style.key"
          >
            {{ style.label }}
          </button>
        </div>
      </div>

      <!-- Planning Component with Custom Slots -->
      <div class="h-96 rounded-lg border">
        <VcPlanning
          :items="items"
          :start-hour="8"
          :end-hour="18"
          :on-item-click="handleItemClick"
        >
          <!-- Custom Header Actions -->
          <template #header-actions>
            <div class="flex gap-2">
              <button
                class="rounded bg-gray-600 px-3 py-1 text-sm text-white hover:bg-gray-700"
                @click="showFilters = !showFilters"
              >
                {{ showFilters ? 'Hide' : 'Show' }} Filters
              </button>
              <button
                class="rounded bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700"
                @click="refreshData"
              >
                Refresh
              </button>
            </div>
          </template>

          <!-- Custom Subheader -->
          <template #subheader>
            <div
              v-if="showFilters"
              class="bg-gray-50 p-3 border-b"
            >
              <div class="flex flex-wrap gap-2">
                <button
                  v-for="filter in filters"
                  :key="filter.type"
                  :class="[
                    filter.active
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
                  ]"
                  class="px-2 py-1 rounded text-xs font-medium transition-colors"
                  @click="toggleFilter(filter.type)"
                >
                  {{ filter.label }}
                </button>
              </div>
            </div>
          </template>

          <!-- Custom Day Headers -->
          <template #day-header="{ day, label, isToday }">
            <div class="text-center">
              <div
                :class="[isToday ? 'text-blue-600' : 'text-gray-900']"
                class="font-medium"
              >
                {{ label }}
              </div>
              <div class="text-xs text-gray-500">
                {{ getEventCount(day) }} events
              </div>
            </div>
          </template>

          <!-- Custom Hour Labels -->
          <template #hour-label="{ hour, label }">
            <div class="text-center">
              <div class="text-xs font-medium">
                {{ label }}
              </div>
              <div
                v-if="hour === 12"
                class="text-xs text-gray-500"
              >
                Lunch
              </div>
            </div>
          </template>

          <!-- Custom Item Content -->
          <template #item-content="{ item, position }">
            <component
              :is="currentContentComponent"
              :item="item"
              :position="position"
            />
          </template>
        </VcPlanning>
      </div>
    </div>

    <div class="rounded-lg border border-gray-200 bg-gray-50 p-6">
      <h3 class="mb-2 text-lg font-medium">
        Slot Implementation
      </h3>
      <pre class="overflow-x-auto rounded bg-gray-800 p-4 text-sm text-white"><code>&lt;VcPlanning :items="items"&gt;
  &lt;!-- Custom header actions --&gt;
  &lt;template #header-actions&gt;
    &lt;button @click="refresh"&gt;Refresh&lt;/button&gt;
  &lt;/template&gt;

  &lt;!-- Custom subheader --&gt;
  &lt;template #subheader&gt;
    &lt;div class="filters"&gt;...&lt;/div&gt;
  &lt;/template&gt;

  &lt;!-- Custom day headers --&gt;
  &lt;template #day-header="{ day, label, isToday }"&gt;
    &lt;div :class="{ 'text-blue-600': isToday }"&gt;
      {{ label }}
    &lt;/div&gt;
  &lt;/template&gt;

  &lt;!-- Custom item content --&gt;
  &lt;template #item-content="{ item, position }"&gt;
    &lt;CustomItemComponent
      :item="item"
      :position="position"
    /&gt;
  &lt;/template&gt;
&lt;/VcPlanning&gt;</code></pre>
    </div>
  </div>
</template>
