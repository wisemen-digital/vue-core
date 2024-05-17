<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'

import AppCommand from '@/components/command/AppCommand.vue'
import type { CommandItem } from '@/types/commandItem.type'

const items: CommandItem[] = [
  {
    icon: 'alertCircle',
    label: 'Command with icon',
    onSelect,
  },
  {
    label: 'Command with select function',
    onSelect,
  },
]

function onSelect() {
  // eslint-disable-next-line no-alert
  alert('Selected')
}
</script>

<template>
  <ComponentPlayground :controls="null">
    <template #default="{ values }">
      <AppCommand
        v-bind="values"
        :items="items"
        placeholder="Search for command"
      />
    </template>
  </ComponentPlayground>
</template>
