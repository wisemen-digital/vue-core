<script setup lang="ts">
import type { DropdownMenuItem } from '@wisemen/vue-core'
import {
  AppButton,
  AppDropdownMenu,
} from '@wisemen/vue-core'

const items: DropdownMenuItem[] = [
  {
    icon: 'sun',
    label: 'Light mode',
    type: 'option',
    onSelect: (): void => {},
  },
  {
    icon: 'moonStar',
    label: 'Dark mode',
    type: 'option',
    onSelect: (): void => {},
  },
  {
    type: 'separator',
  },
  {
    icon: 'settings01',
    items: [
      {
        items: [
          {
            icon: 'searchLg',
            label: 'Search',
            type: 'option',
            onSelect: (): void => {},
          },
          {
            icon: 'stars02',
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
            icon: 'linkExternal01',
            isDisabled: true,
            label: 'External',
            onSelect: (): void => {},
          },
          {
            type: 'option',
            icon: 'trash01',
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
  <AppDropdownMenu
    :items="items"
    :is-arrow-hidden="true"
  >
    <template #trigger>
      <AppButton>
        Show menu
      </AppButton>
    </template>
  </AppDropdownMenu>
</template>
