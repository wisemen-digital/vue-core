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
    label="Select a fruit"
    placeholder="Select a fruit"
    class="w-72"
  >
    <template #option-content="{ item }">
      <div class="flex items-center justify-between pr-2">
        {{ item.label }}

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
          icon="translate"
        />
      </div>
    </template>
  </VcSelect>
</template>
