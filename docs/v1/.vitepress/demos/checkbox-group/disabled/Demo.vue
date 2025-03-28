<script setup lang="ts">
import { VcCheckboxGroup, VcCheckbox } from '@wisemen/vue-core'
import { ref } from 'vue'

const selectedItems = ref<string[]>(['Apple'])

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
  <VcCheckboxGroup
    v-model="selectedItems"
    :errors="['This is an error message.']"
    :items="items"
    label="Checkbox Group"
    hint="This is a checkbox group."
  >
    <div class="flex flex-col gap-y-2">
      <VcCheckbox 
        v-for="item of items" 
        :key="item.label"
        :value="item.value" 
        :label="item.label" 
        :hint="item.hint"
        :is-disabled="item.isDisabled"
      />
    </div>
  </VcCheckboxGroup>
</template>
