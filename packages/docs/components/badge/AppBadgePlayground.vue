<script setup lang="ts">
import AppBadge from '@components/components/badge/AppBadge.vue'
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'

const controls = createControls({
  slot: {
    default: 'Test Badge',
    cols: 2,
    label: 'Slot',
    type: 'text',
  },
})
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <template #default="{ values }">
      <AppBadge v-bind="values">
        {{ values.slot }}
      </AppBadge>
    </template>
  </ComponentPlayground>
</template>
