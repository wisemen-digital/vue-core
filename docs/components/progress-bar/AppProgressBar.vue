<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import { AppProgressBar } from '@wisemen/vue-core'

const controls = createControls({
  progress: {
    type: 'number',
    label: 'Progress',
    default: 50,
    min: 0,
    max: 100,
    step: 1,
  },
  showPercentage: {
    type: 'boolean',
    label: 'Show Percentage',
    default: true,
  },
  percentagePosition: {
    type: 'select',
    label: 'Percentage Position',
    options: [
      'inside',
      'outside',
    ],
    default: 'inside',
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
      />
    </template>
  </ComponentPlayground>
</template>
