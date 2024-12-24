<script setup lang="ts">
import { VcRadioGroup, VcRadioGroupItem } from '@wisemen/vue-core'
import { ref } from 'vue'

const selectedItem = ref<string>('Blueberry')

const items = [
  {
    label: 'Apple',
    value: 'Apple',
  },
  {
    label: 'Banana',
    value: 'Banana',
  },
  {
    label: 'Blueberry',
    value: 'Blueberry',
    hasError: true,
  },
]
</script>

<template>
  <VcRadioGroup
    v-model="selectedItem"
    :items="items"
    :is-touched="true"
    :errors="{
      _errors: ['This is an error message.'],
    }"
    label="Radio Group"
    hint="This is a radio group."
  >
    <VcRadioGroupItem 
      v-for="item of items" 
      :key="item.label"
      :value="item.value" 
      :label="item.label" 
      :is-touched="true"
      :errors="item.hasError ? { _errors: ['This is an error message.'] } : null"
    />
  </VcRadioGroup>
</template>
