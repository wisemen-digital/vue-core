<script setup lang="ts">
import type { SelectItem } from '@wisemen/vue-core'
import {
  VcSelect,
  VcTag,
} from '@wisemen/vue-core'
import { ref } from 'vue'

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

const value = ref<string | null>('Apple')

function displayFn(value: string): string {
  return value
}
</script>

<template>
  <VcSelect
    v-model="value"
    :items="items"
    :display-fn="displayFn"
    label="Select a fruit"
    placeholder="Select a fruit"
    class="w-72"
  >
    <template #value="{ value: selectedValue }">
      <div class="flex w-full items-center justify-between">
        <span>
          {{ displayFn(selectedValue) }}
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
