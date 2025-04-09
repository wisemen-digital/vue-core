<script setup lang="ts">
import type { DropdownMenuItem } from '@wisemen/vue-core'
import { VcDropdownMenu } from '@wisemen/vue-core'

const items: DropdownMenuItem[] = [
  {
    type: 'subMenu',
    label: 'Language',
    icon: 'settings',
    items: [
      {
        label: 'Nederlands',
        type: 'option',
        onSelect: (): void => {
          // eslint-disable-next-line no-alert
          alert('Dutch selected')
        },
      },
    ],
  },
  {
    label: 'Uitloggen',
    type: 'option',
    isDestructive: true,
    onSelect: (): void => {
      // eslint-disable-next-line no-alert
      alert('Log out')
    },
  },
]
</script>

<template>
  <VcDropdownMenu
    :items="items"
    :offset-in-px="10"
  >
    <template #trigger>
      <div
        class="
          bg-tertiary flex cursor-pointer items-center justify-center
          rounded-full p-3
        "
      >
        JD
      </div>
    </template>
    <template #content-top>
      <div class="flex flex-col">
        <div class="mb-xs border-primary border-b border-solid">
          <div class="p-sm text-subtext">
            <p class="font-semibold">
              John Doe
            </p>
            <p class="text-secondary-alt truncate">
              john.doe@gmail.com
            </p>
          </div>
        </div>
        <div
          class="
            p-sm text-secondary-alt mb-xs border-primary border-b border-solid
            text-sm
          "
        >
          <p>
            Versie: 01
          </p>
          <p class="mt-1">
            Omgeving: development
          </p>
        </div>
      </div>
    </template>
  </VcDropdownMenu>
</template>
