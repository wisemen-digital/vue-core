<script setup lang="ts">
import { ref } from 'vue'

import AppRadioGroup from './components/radio-group/AppRadioGroup.vue'
import type { RadioGroupItem } from './types/radioGroup.type'

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
  {
    label: 'Grapes',
    type: 'option',
    value: 'Grapes',
  },
  {
    label: 'Leek',
    type: 'option',
    value: 'Leek',
  },
]

const selected = ref<null | string>('Apple')
</script>

<template>
  <div class="grid grid-cols-3 gap-12">
    <div>
      <AppRadioGroup
        v-model="selected"
        :errors="{
          _errors: ['This is an error message.'],
        }"
        :is-disabled="false"
        :is-required="true"
        :items="items"
        label="Checkbox"
        hint="This is a checkbox."
      />
    </div>
  </div>
</template>

<style>
body {
  font-family: 'Inter Variable', sans-serif;
}
</style>
