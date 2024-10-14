<script setup lang="ts">
import type { SelectItem } from '@wisemen/vue-core'
import { AppSelect, AppTag } from '@wisemen/vue-core'
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
  <div class="vp-raw py-6">
    <AppSelect
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
  </div>
</template>
