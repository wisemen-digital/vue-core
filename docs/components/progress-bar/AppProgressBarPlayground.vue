<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'

import { AppProgressBar } from '@/wisemen/vue-core'

const controls = createControls({
  progress: {
    type: 'text',
    label: 'Progress',
    default: '50',
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
})
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <template #default="{ values }">
      <AppProgressBar
        :progress="values.progress"
        :show-percentage="values.showPercentage"
        :percentage-position="values.percentagePosition"
        :min-value="values.minValue"
        :max-value="values.maxValue"
      />
    </template>
  </ComponentPlayground>
</template>
