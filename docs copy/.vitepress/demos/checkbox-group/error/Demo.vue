<script setup lang="ts">
import { VcCheckboxGroup, VcCheckbox } from '@wisemen/vue-core'
import { ref } from 'vue'

const selectedItems = ref<string[]>(['Blueberry'])

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
  <VcCheckboxGroup
    v-model="selectedItems"
    :items="items"
    :is-touched="true"
    :errors="['This is an error message.']"
    label="Checkbox Group"
    hint="This is a checkbox group."
  >
    <div class="flex flex-col gap-y-2">
      <VcCheckbox 
        v-for="item of items" 
        :key="item.label"
        :value="item.value" 
        :label="item.label" 
        :is-touched="true"
        :errors="item.hasError ? ['This is an error message.'] : []"
      />
    </div>
  </VcCheckboxGroup>
</template>
