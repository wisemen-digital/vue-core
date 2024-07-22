<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import { AppProgressBar } from '@wisemen/vue-core'

const controls = createControls({
  value: {
    type: 'text',
    label: 'value',
    default: '0',
  },
  showPercentage: {
    type: 'switch',
    label: 'Show Percentage',
    default: true,
  },
  percentagePosition: {
    type: 'select',
    label: 'Percentage Position',
    items: [
      'inside',
      'outside',
    ],
    default: 'inside',
  },
  minValue: {
    type: 'text',
    label: 'Minimum Value',
    default: '0',
  },
  maxValue: {
    type: 'text',
    label: 'Maximum Value',
    default: '100',
  },
  useAutoColor: {
    type: 'switch',
    label: 'Use Auto Color',
    default: false,
  },
  color: {
    type: 'select',
    label: 'Color',
    items: [
      'destructive',
      'primary',
      'secondary',
      'success',
      'warn',
    ],
    default: 'primary',
  },
  transitionDuration: {
    type: 'text',
    label: 'Transition Duration',
    default: '10',
  },
})
</script>

<template>
  <ComponentPlayground :controls="controls">
    <template #default="{ values }">
      <AppProgressBar
        v-bind="values"
      />
    </template>
  </ComponentPlayground>
</template>
