<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'

import AppCommand from '@/components/command/AppCommand.vue'
import type { CommandItem } from '@/index'

const items: CommandItem[] = [
  {
    icon: 'alertCircle',
    label: 'Command with icon',
    type: 'page',
  },
  {
    label: 'Command with select function',
    type: 'page',
    onSelect,
  },
]

function onSelect() {
  alert('Command selected')
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
