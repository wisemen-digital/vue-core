<script setup lang="ts">
import { type SelectItem, VcSelect } from '@wisemen/vue-core'
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
</script>

<template>
  <VcSelect
    v-model="value"
    :items="items"
    :is-loading="true"
    label="Select a fruit"
    placeholder="Select a fruit"
    class="w-72"
  />
</template>
