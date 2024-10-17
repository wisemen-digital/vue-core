<script setup lang="ts">
import type { RadioGroupItem } from '@wisemen/vue-core'
import { AppRadioGroup } from '@wisemen/vue-core'
import { ref } from 'vue'

const selectedItem = ref<null | string>('Apple')

const items: RadioGroupItem<string>[] = [
  {
    label: 'Apple',
    type: 'option',
    value: 'Apple',
  },
  {
    label: 'Banana',
    type: 'option',
    value: 'Banana',
  },
  {
    hint: 'This is a hint.',
    label: 'Blueberry',
    type: 'option',
    value: 'Blueberry',
  },
]
</script>

<template>
  <AppRadioGroup
    v-model="selectedItem"
    :is-disabled="true"
    :items="items"
    label="Radio Group"
    hint="This is a radio group."
  />
</template>
