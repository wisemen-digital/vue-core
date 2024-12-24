<script setup lang="ts">
import { VcRadioGroup, VcRadioGroupItem } from '@wisemen/vue-core'
import { ref } from 'vue'

const selectedItem = ref<string>('Apple')

const items = [
  {
    label: 'Apple',
    value: 'Apple',
  },
  {
    label: 'Banana',
    hint: 'This option is disabled.',
    value: 'Banana',
    isDisabled: true,
  },
  {
    label: 'Blueberry',
    value: 'Blueberry',
  },
]
</script>

<template>
  <VcRadioGroup
    v-model="selectedItem"
    :errors="{
      _errors: ['This is an error message.'],
    }"
    :items="items"
    label="Radio Group"
    hint="This is a radio group."
  >
    <VcRadioGroupItem 
      v-for="item of items" 
      :key="item.label"
      :value="item.value" 
      :label="item.label" 
      :hint="item.hint"
      :is-disabled="item.isDisabled"
    />
  </VcRadioGroup>
</template>
