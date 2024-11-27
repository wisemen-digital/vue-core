<script setup lang="ts">
import type { DropdownMenuItem } from '@wisemen/vue-core'
import {
  VcButton,
  VcDropdownMenu,
} from '@wisemen/vue-core'

const items: DropdownMenuItem[] = [
  {
    icon: 'alertCircle',
    label: 'Light mode',
    type: 'option',
    onSelect: (): void => {},
  },
  {
    icon: 'alertCircle',
    label: 'Dark mode',
    type: 'option',
    onSelect: (): void => {},
  },
  {
    type: 'separator',
  },
  {
    icon: 'alertCircle',
    items: [
      {
        items: [
          {
            icon: 'alertCircle',
            label: 'Search',
            type: 'option',
            onSelect: (): void => {},
          },
          {
            icon: 'alertCircle',
            label: 'Optimize',
            type: 'option',
            onSelect: (): void => {},
          },
        ],
        label: 'General',
        type: 'group',
      },
      {
        items: [
          {
            type: 'option',
            icon: 'alertCircle',
            isDisabled: true,
            label: 'External',
            onSelect: (): void => {},
          },
          {
            type: 'option',
            icon: 'alertCircle',
            label: 'Delete account',
            isDestructive: true,
            onSelect: (): void => {},
          },
        ],
        label: 'Other',
        type: 'group',
      },
    ],
    label: 'Settings',
    type: 'subMenu',
  },
]
</script>

<template>
  <VcDropdownMenu
    :items="items"
    :is-arrow-hidden="true"
  >
    <template #trigger>
      <VcButton>
        Show menu
      </VcButton>
    </template>
  </VcDropdownMenu>
</template>
