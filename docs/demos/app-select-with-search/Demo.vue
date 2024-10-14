<script setup lang="ts">
import type { SelectItem } from '@wisemen/vue-core'
import { AppSelect } from '@wisemen/vue-core'
import { ref } from 'vue'

const value = ref<null | string>(null)

const items: SelectItem<string>[] = [
  {
    type: 'option',
    value: 'Apple',
  },
  {
    type: 'option',
    value: 'Banana',
  },
  {
    type: 'option',
    value: 'Blueberry',
  },
  {
    type: 'option',
    value: 'Grapes',
  },
  {
    type: 'option',
    value: 'Leek',
  },
  {
    type: 'option',
    value: 'Pear',
  },
  {
    type: 'option',
    value: 'Raspberry',
  },
  {
    type: 'option',
    value: 'Strawberry',
  },
  {
    type: 'option',
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
    :display-fn="(value) => value"
    :filter-fn="filterFn"
    label="Select a fruit"
    placeholder="Select a fruit"
    search-placeholder="Search a fruit"
    class="w-72"
  />
</template>
