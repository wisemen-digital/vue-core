<script setup lang="ts">
import AppText from '@components/components/text/AppText.vue';
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'

const controls = createControls({
  align: {
    default: 'center',
    cols: 2,
    items: [
      'center',
      'end',
      'start',
    ],
    label: 'Align',
    type: 'select',
  },
  content: {
    default: 'Tooltip content',
    cols: 2,
    label: 'Content',
    type: 'text',
  },
  delayDuration: {
    default: '0',
    label: 'Delay duration',
    type: 'text',
  },
  disableCloseOnTriggerClick: {
    default: false,
    label: 'Disable close on trigger click',
    type: 'switch',
  },
  disableHoverableContent: {
    default: false,
    label: 'Disable hoverable content',
    type: 'switch',
  },
  hideArrow: {
    default: false,
    label: 'Hide arrow',
    type: 'switch',
  },
  isHidden: {
    default: false,
    label: 'Is hidden',
    type: 'switch',
  },
  offset: {
    default: '10',
    label: 'Offset',
    type: 'text',
  },
  side: {
    default: 'top',
    cols: 2,
    items: [
      'bottom',
      'left',
      'right',
      'top',
    ],
    label: 'Side',
    type: 'select',
  },
})
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <template #default="{ values }">
      <AppTooltip  v-bind="values" :content="values.content">
        <AppText variant="body">
          Trigger element     
        </AppText>
      </AppTooltip>
    </template>
  </ComponentPlayground>
</template>
