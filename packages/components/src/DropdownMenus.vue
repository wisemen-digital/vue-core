<script setup lang="ts">
import AppButton from '@/components/button/button/AppButton.vue'
import AppDropdownMenu from '@/components/dropdown-menu/AppDropdownMenu.vue'
import type { DropdownMenuItem } from '@/types/dropdownMenu.type'

const items: DropdownMenuItem[] = [
  {
    icon: 'sun',
    label: 'Language',
    type: 'option',
    onSelect: (): void => {
      //
    },
  },
  {
    icon: 'moonStar',
    label: 'Unit system',
    type: 'option',
    onSelect: (): void => {
      //
    },
  },
  {
    icon: 'searchLg',
    items: [
      {
        items: [
          {
            icon: 'eye',
            label: 'Component inspector',
            type: 'option',
            onSelect: (): void => {
              //
            },
          },
          {
            icon: 'eyeOff',
            label: 'Color picker',
            type: 'option',
            onSelect: (): void => {
              //
            },
          },
        ],
        label: 'Tools',
        type: 'group',
      },
      {
        items: [
          {
            icon: 'tool02',
            label: 'Windows',
            type: 'option',
            onSelect: (): void => {
              //
            },
          },
          {
            icon: 'translate01',
            label: 'MacOS',
            type: 'option',
            onSelect: (): void => {
              //
            },
          },
        ],
        label: 'Software',
        type: 'group',
      },
    ],
    label: 'Tools',
    type: 'subMenu',
  },
]
</script>

<template>
  <div class="grid grid-cols-3 gap-12">
    <div>
      <AppDropdownMenu
        :items="items"
        :is-arrow-hidden="false"
        align="start"
        side="right"
      >
        <template #trigger>
          <AppButton>
            Trigger dropdown
          </AppButton>
        </template>
      </AppDropdownMenu>
    </div>
  </div>
</template>
