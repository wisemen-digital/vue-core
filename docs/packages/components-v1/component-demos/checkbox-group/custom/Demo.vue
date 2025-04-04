<script setup lang="ts">
import {
  VcCheckbox,
  VcCheckboxGroup,
  VcCheckboxIndicator,
} from '@wisemen/vue-core'
import { ref } from 'vue'

const selectedItem = ref<string[]>([
  'Apple',
])

const items = [
  {
    label: 'Apple',
    value: 'Apple',
    description: 'Mmm, delicious apples.',
  },
  {
    label: 'Banana',
    value: 'Banana',
    description: 'A banana a day keeps the doctor away.',
  },
  {
    label: 'Blueberry',
    value: 'Blueberry',
    isDisabled: true,
    description: 'Blueberries are a good source of antioxidants.',
  },
]
</script>

<template>
  <VcCheckboxGroup
    v-model="selectedItem"
    :items="items"
    label="Select a fruit"
  >
    <div class="grid grid-cols-3 gap-4">
      <VcCheckbox
        v-for="item of items"
        :key="item.label"
        :value="item.value"
        :is-disabled="item.isDisabled"
        class="
          disabled:bg-disabled-subtle disabled:border-disabled
          disabled:cursor-not-allowed
          data-[state=checked]:border-brand-primary-500
          border-secondary relative flex cursor-pointer flex-col rounded-lg
          border border-solid p-4 text-left duration-200
        "
      >
        <VcCheckboxIndicator class="absolute top-1 right-1 scale-75" />

        <span
          class="
            text-primary text-sm font-medium
            group-disabled:text-disabled
          "
        >
          {{ item.label }}
        </span>

        <p
          class="
            text-tertiary text-xs leading-5
            group-disabled:text-disabled
          "
        >
          {{ item.description }}
        </p>
      </VcCheckbox>
    </div>
  </VcCheckboxGroup>
</template>
