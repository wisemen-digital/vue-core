<!-- eslint-disable no-alert -->
<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import {
  AppButton,
  AppDropdownMenu,
  AppText,
  type DropdownMenuItem,
} from '@wisemen/vue-core'

const controls = createControls({
  offset: {
    default: '4',
    cols: 2,
    label: 'Offset',
    type: 'text',
  },
  align: {
    default: 'center',
    items: [
      'center',
      'end',
      'start',
    ],
    label: 'Align',
    type: 'select',
  },
  side: {
    default: 'bottom',
    items: [
      'bottom',
      'left',
      'right',
      'top',
    ],
    label: 'Side',
    type: 'select',
  },
  hasArrow: {
    default: false,
    label: 'Has arrow',
    type: 'switch',
  },
  enableGlobalKeyboardShortcuts: {
    default: false,
    label: 'Enable global keyboard shortcuts',
    type: 'switch',
  },
  inheritTriggerWidth: {
    default: false,
    label: 'Inherit trigger width',
    type: 'switch',
  },
})

const exampleItems: DropdownMenuItem[] = [
  {
    type: 'option',
    label: 'Option 1',
    onSelect: (): void => {
      alert('Option 1 selected')
    },
    keyboardShortcutKeys: [
      'e',
    ],
  },
  {
    type: 'divider',
  },
  {
    type: 'label',
    label: 'Label 1',
  },
  {
    type: 'group',
    items: [
      {
        type: 'option',
        label: 'Option 2',
        onSelect: (): void => {
          alert('Option 2 selected')
        },
      },
      {
        type: 'option',
        label: 'Option 3',
        onSelect: (): void => {
          alert('Option 3 selected')
        },
      },
    ],
  },
]
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <template #default="{ values }">
      <AppDropdownMenu
        v-bind="values"
        :offset="+values.offset"
        :items="exampleItems"
      >
        <template #header>
          <AppText
            variant="body"
            class="p-2"
          >
            This is a header slot
          </AppText>
        </template>
        <template #default>
          <AppButton>
            Trigger element
          </AppButton>
        </template>
      </AppDropdownMenu>
    </template>
  </ComponentPlayground>
</template>
