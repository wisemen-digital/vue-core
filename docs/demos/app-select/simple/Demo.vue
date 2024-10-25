<script setup lang="ts">
import type { SelectItem } from '@wisemen/vue-core'
import { AppSelect } from '@wisemen/vue-core'
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
    isDisabled: true,
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
</script>

<template>
  <AppSelect
    v-model="value"
    :items="items"
    :display-fn="(value) => value"
    :style-config="{
      '--select-label-font-size-default': '20px',
    }"
    label="Select a fruit"
    placeholder="Select a fruit"
    class="w-72"
  />
</template>
