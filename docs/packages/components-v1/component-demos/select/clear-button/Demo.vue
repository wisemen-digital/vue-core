<script setup lang="ts">
import type { SelectItem } from '@wisemen/vue-core'
import {
  VcButton,
  VcSelect,
} from '@wisemen/vue-core'
import { ref } from 'vue'

const value = ref<string[]>([])

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

function onClearAll(): void {
  value.value = []
}
</script>

<template>
  <VcSelect
    v-model="value"
    :items="items"
    :display-fn="(value) => value"
    label="Select a fruit"
    placeholder="Select a fruit"
    hint="You can select multiple fruits."
    class="w-72"
  >
    <template #content-top>
      <div class="mt-1 flex items-center justify-between pr-1 pl-3">
        <span class="text-sm font-medium">
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
