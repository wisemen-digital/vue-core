<script setup lang="ts">
import type { PlanningItem } from '@/components/planning'
import { VcPlanning } from '@/components/planning'

const today = new Date()

const basicItems: PlanningItem[] = [
  {
    id: '1',
    title: 'Morning Meeting',
    startsAt: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 10, 0),
    endsAt: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 11, 0),
    backgroundColor: '#3b82f6',
    color: '#1d4ed8',
    description: 'Team standup',
  },
  {
    id: '2',
    title: 'Project Review',
    startsAt: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 14, 0),
    endsAt: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 15, 30),
    backgroundColor: '#10b981',
    color: '#059669',
    description: 'Quarterly review',
  },
  {
    id: '3',
    title: 'Client Call',
    startsAt: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, 11, 0),
    endsAt: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, 12, 0),
    backgroundColor: '#f59e0b',
    color: '#d97706',
    description: 'Weekly check-in',
  },
]
</script>

<template>
  <div class="space-y-6">
    <div class="rounded-lg border border-gray-200 bg-white p-6">
      <h2 class="mb-4 text-xl font-semibold">
        Basic Planning Usage
      </h2>
      <p class="mb-4 text-gray-600">
        Simple planning component with minimal configuration. Shows how the component works
        with just items and basic time range settings.
      </p>

      <div class="h-96 rounded-lg border">
        <VcPlanning
          :items="basicItems"
          :start-hour="9"
          :end-hour="17"
          :hour-height="60"
        />
      </div>
    </div>

    <div class="rounded-lg border border-gray-200 bg-gray-50 p-6">
      <h3 class="mb-2 text-lg font-medium">
        Code Example
      </h3>
      <pre class="overflow-x-auto rounded bg-gray-800 p-4 text-sm text-white"><code>&lt;template&gt;
  &lt;VcPlanning
    :items="items"
    :start-hour="9"
    :end-hour="17"
    :hour-height="60"
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
const items = [
  {
    id: '1',
    title: 'Morning Meeting',
    startsAt: new Date(2024, 0, 15, 10, 0),
    endsAt: new Date(2024, 0, 15, 11, 0),
    backgroundColor: '#3b82f6',
    description: 'Team standup'
  },
  {
    id: '2',
    title: 'Project Review',
    startsAt: new Date(2024, 0, 15, 14, 0),
    endsAt: new Date(2024, 0, 15, 15, 30),
    backgroundColor: '#10b981',
    description: 'Quarterly review'
  }
]
&lt;/script&gt;</code></pre>
    </div>
  </div>
</template>
