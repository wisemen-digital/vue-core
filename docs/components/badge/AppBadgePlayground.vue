<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import type { CalendarDate } from '@internationalized/date'
import { AppBadge, AppCalendar } from '@wisemen/vue-core'
import { ref } from 'vue'

const controls = createControls({
  slot: {
    default: 'Test Badge',
    cols: 2,
    label: 'Slot',
    type: 'text',
  },
})

const date = ref<CalendarDate | null>(null)
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <template #default="{ values }">
      <AppBadge v-bind="values">
        {{ values.slot }}
      </AppBadge>

      <AppCalendar v-model="date" />
      {{ date }}
    </template>
  </ComponentPlayground>
</template>
