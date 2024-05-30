<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'

import AppButton from '@/components/button/AppButton.vue'
import AppPopover from '@/components/popover/AppPopover.vue'
import AppText from '@/components/text/AppText.vue'

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
  hideArrow: {
    default: false,
    label: 'Hide arrow',
    type: 'switch',
  },
  offset: {
    default: '3',
    cols: 2,
    label: 'Offset',
    type: 'text',
  },
  side: {
    default: 'bottom',
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
      <AppPopover
        v-bind="values"
        :offset="+values.offset"
      >
        <template #default>
          <AppButton>
            Trigger element
          </AppButton>
        </template>
        <template #content>
          <div class="w-56 p-2">
            <AppText
              variant="subtitle"
              class="pr-8 font-bold text-black"
            >
              A title
            </AppText>
            <AppText
              variant="body"
              class="text-black"
            >
              And some content
            </AppText>
          </div>
        </template>
      </AppPopover>
    </template>
  </ComponentPlayground>
</template>
