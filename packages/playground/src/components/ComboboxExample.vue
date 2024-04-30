<script setup lang="ts">
import AppCombobox from '@components/components/combobox/AppCombobox.vue'
import type { ComboboxItem } from '@components/types/comboboxItem.type'
import { ref } from 'vue'

interface Item {
  firstName: string
  lastName: string
}

const value = ref<Item | null>(null)
const items: ComboboxItem<Item>[] = [
  {
    type: 'option',
    value: {
      firstName: 'John',
      lastName: 'Doe',
    },
  },
  {
    type: 'option',
    value: {
      firstName: 'Jane',
      lastName: 'Doe',
    },
  },
  {
    type: 'option',
    value: {
      firstName: 'John',
      lastName: 'Smith',
    },
  },
]

function filterFn(values: Item[], search: string): Item[] {
  return values.filter((value) => {
    return value.firstName.toLowerCase().includes(search.toLowerCase())
  })
}
</script>

<template>
  <div>
    <AppCombobox
      v-model="value"
      :filter-fn="filterFn"
      :items="items"
      :display-fn="(value) => `${value.firstName} ${value.lastName}`"
      search=""
    />
  </div>
</template>
