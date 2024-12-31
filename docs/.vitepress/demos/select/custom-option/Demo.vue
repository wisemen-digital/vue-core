<script setup lang="ts">
import {
  type SelectItem,
  VcIcon,
  VcSelect,
  VcTag,
} from '@wisemen/vue-core'
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
    <template #option-content="{ item }">
      <div class="flex items-center justify-between pr-2">
        {{ displayFn(item.value) }}

        <VcTag
          v-if="item.value === 'Apple'"
          :style-config="{
            '--tag-font-size-default': '12px',
          }"
        >
          Good stuff
        </VcTag>

        <span
          v-else-if="item.value === 'Banana'"
          class="text-xs"
        >
          Mmm...
        </span>

        <VcIcon
          v-else-if="item.value === 'Blueberry'"
          icon="translate01"
        />
      </div>
    </template>
  </VcSelect>
</template>
