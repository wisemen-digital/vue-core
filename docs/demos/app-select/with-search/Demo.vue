<script setup lang="ts">
import type { SelectItem } from '@wisemen/vue-core'
import { AppSelect } from '@wisemen/vue-core'
import { ref } from 'vue'

const value = ref<null | string>(null)

const items: SelectItem<string>[] = [
  {
    type: 'option',
    value: 'Apple',
    label: 'Apple',
  },
  {
    type: 'option',
    value: 'Banana',
    label: 'Banana',
  },
  {
    type: 'option',
    value: 'Blueberry',
    label: 'Blueberry',
  },
  {
    type: 'option',
    value: 'Grapes',
    label: 'Grapes',
  },
  {
    type: 'option',
    value: 'Leek',
    label: 'Leek',
  },
  {
    type: 'option',
    label: 'Pear',
    value: 'Pear',
  },
  {
    type: 'option',
    label: 'Raspberry',
    value: 'Raspberry',
  },
  {
    type: 'option',
    label: 'Strawberry',
    value: 'Strawberry',
  },
  {
    type: 'option',
    label: 'Cherry',
    value: 'Cherry',
  },
]

function filterFn(option: string, searchTerm: string): boolean {
  return option.toLowerCase().includes(searchTerm.toLowerCase())
}
</script>

<template>
  <AppSelect
    v-model="value"
    :items="items"
    :filter-fn="filterFn"
    label="Select a fruit"
    placeholder="Select a fruit"
    search-placeholder="Search a fruit"
    class="w-72"
  />
</template>
