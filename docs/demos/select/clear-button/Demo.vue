<script setup lang="ts">
import {
  type SelectItem,
  VcButton,
  VcSelect,
} from '@wisemen/vue-core'
import { ref } from 'vue'

const value = ref<string[]>([])

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

function onClearAll(): void {
  value.value = []
}
</script>

<template>
  <VcSelect
    v-model="value"
    :items="items"
    label="Select a fruit"
    placeholder="Select a fruit"
    hint="Tip: You can select multiple fruits."
    class="w-72"
  >
    <template #content-top>
      <div class="mb-1 flex items-center justify-between">
        <span class="pl-select-dropdown-padding-x-default text-sm font-medium">
          Fruits
        </span>

        <VcButton
          size="sm"
          variant="tertiary"
          @click="onClearAll"
        >
          Clear all
        </VcButton>
      </div>
    </template>
  </VcSelect>
</template>
