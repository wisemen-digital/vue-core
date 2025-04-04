<script setup lang="ts">
import type { DropdownMenuItem } from '@wisemen/vue-core'
import {
  VcButton,
  VcDropdownMenu,
} from '@wisemen/vue-core'

const items: DropdownMenuItem[] = [
  {
    label: 'Item 1',
    type: 'option',
    onSelect: (): void => {
      // eslint-disable-next-line no-alert
      alert('Item 1 selected')
    },
  },
  { type: 'separator' },
  {
    type: 'subMenu',
    label: 'Sub menu',
    items: [
      {
        label: 'Item 2',
        type: 'option',
        onSelect: (): void => {
          // eslint-disable-next-line no-alert
          alert('Item 2 selected')
        },
      },
    ],
  },
  { type: 'separator' },
  {
    type: 'group',
    label: 'Group 1',
    items: [
      {
        label: 'Item 2',
        type: 'option',
        onSelect: (): void => {
          // eslint-disable-next-line no-alert
          alert('Item 2 selected')
        },
      },
    ],
  },
]
</script>

<template>
  <VcDropdownMenu :items="items">
    <template #trigger>
      <VcButton>Trigger</VcButton>
    </template>
    <template #content-top>
      Title here
    </template>
  </VcDropdownMenu>
</template>
