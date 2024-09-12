<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import { AppProgressBar } from '@wisemen/vue-core'

const controls = createControls({
  // Switches and booleans
  isPercentageVisible: {
    type: 'switch',
    label: 'Show Percentage',
    default: true,
  },
  rounded: {
    type: 'switch',
    label: 'Rounded',
    default: true,
  },
  autoColor: {
    type: 'switch',
    label: 'Use Auto Color',
    default: false,
  },
  hasTooltip: {
    type: 'switch',
    label: 'Has Tooltip',
    default: false,
  },
  dynamic: {
    type: 'switch',
    label: 'Dynamic',
    default: false,
  },

  // Text inputs and other settings
  value: {
    type: 'text',
    label: 'Value',
    default: '0',
    cols: 2,
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
  slot: {
    type: 'text',
    label: 'Slot (tooltip content)',
    default: 'show percentage here',
  },
  transitionDuration: {
    type: 'text',
    label: 'Transition Duration',
    default: '300',
  },
  numbersAfterComma: {
    type: 'text',
    label: 'Numbers After Comma',
    default: '0',
  },

  // Select inputs
  percentagePosition: {
    type: 'select',
    label: 'Percentage Position',
    items: [
      'inside',
      'outside',
    ],
    default: 'inside',
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
  textColor: {
    type: 'select',
    label: 'Text Color (dynamic only, or outside component)',
    items: [
      'black',
      'white',
    ],
    default: 'white',
  },
})
</script>

<template>
  <ComponentPlayground :controls="controls">
    <template #default="{ values }">
      <AppProgressBar
        v-bind="values"
      >
        <template #tooltip>
          <div class="p-4 text-center">
            {{ values.slot }}
          </div>
        </template>
      </AppProgressBar>
    </template>
  </ComponentPlayground>
</template>
