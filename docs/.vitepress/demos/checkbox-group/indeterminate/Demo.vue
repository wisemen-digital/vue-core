<script setup lang="ts">
import { VcCheckboxGroup, VcCheckbox, VcInputField } from '@wisemen/vue-core'
import { computed, ref } from 'vue'

const selectedItems = ref<string[]>(['Apple'])
const areAllSelected = computed<boolean>(() => selectedItems.value.length === items.length)

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
  },
]

function onToggleSelectAll(value: boolean): void {
  if (value) {
    selectedItems.value = items.map(item => item.value)
  }
  else {
    selectedItems.value = []
  }
}
</script>

<template>
  <div>
    <VcCheckbox 
      :is-indeterminate="selectedItems.length > 0 && !areAllSelected" 
      :model-value="areAllSelected"
      @update:model-value="onToggleSelectAll"
      label="Select fruits"
    />

    <VcCheckboxGroup
      v-model="selectedItems"
      :items="items"
      class="mt-2"
    >
      <div class="flex flex-col gap-y-2">
          <VcCheckbox
            v-for="item of items" 
            :key="item.label"
            :value="item.value" 
            :label="item.label" 
          />
      </div>
    </VcCheckboxGroup>
  </div>
</template>
