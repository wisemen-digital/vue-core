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
    label: 'Banana',
    value: 'Banana',
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
    value: 'Pear',
    label: 'Pear',
    isDisabled: true,
  },
  {
    type: 'option',
    value: 'Raspberry',
    label: 'Raspberry',
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
    label="Select a fruit"
    placeholder="Select a fruit"
    class="w-72"
  />
</template>
