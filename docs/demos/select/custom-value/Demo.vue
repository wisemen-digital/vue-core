<script setup lang="ts">
import {
  type SelectItem,
  VcSelect,
  VcTag,
} from '@wisemen/vue-core'
import { ref } from 'vue'

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

const value = ref<null | string>('Apple')
</script>

<template>
  <VcSelect
    v-model="value"
    :items="items"
    label="Select a fruit"
    placeholder="Select a fruit"
    class="w-72"
  >
    <template #value="{ value }">
      <div class="flex w-full items-center justify-between">
        <span>
          {{ value }}
        </span>

        <VcTag
          :style-config="{
            '--tag-font-size-default': '12px',
          }"
        >
          Fruit
        </VcTag>
      </div>
    </template>
  </VcSelect>
</template>
