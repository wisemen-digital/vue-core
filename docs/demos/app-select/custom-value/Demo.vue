<script setup lang="ts">
import type { SelectItem } from '@wisemen/vue-core'
import { AppSelect, AppTag } from '@wisemen/vue-core'
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
  <AppSelect
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

        <AppTag
          :style-config="{
            '--tag-font-size-default': '12px',
          }"
        >
          Fruit
        </AppTag>
      </div>
    </template>
  </AppSelect>
</template>
