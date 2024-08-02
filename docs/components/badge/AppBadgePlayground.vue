<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import { AppBadge } from '@wisemen/vue-core'

const controls = createControls({
  slot: {
    default: 'Test Badge',
    cols: 2,
    label: 'Slot',
    type: 'text',
  },
  variant: {
    default: 'default',
    cols: 2,
    label: 'Variant',
    items: [
      'default',
      'destructive',
      'primary',
      'secondary',
      'success',
      'warning',
    ],
    type: 'select',
  },
  isFullyRounded: {
    default: false,
    label: 'Is fully rounded?',
    type: 'switch',
  },
  isUnstyled: {
    default: false,
    label: 'Is unstyled?',
    type: 'switch',
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
