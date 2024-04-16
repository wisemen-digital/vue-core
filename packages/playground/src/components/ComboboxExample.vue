<script setup lang="ts">
import { ref } from 'vue'

import AppCombobox from '../../../components/src/components/combobox/AppCombobox.vue'
import type { ComboboxItem } from '../../../components/src/types/comboboxItem.type'

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
</script>

<template>
  <div>
    <AppCombobox
      v-model="value"
      :items="items"
      :display-fn="(value) => `${value.firstName} ${value.lastName}`"
      search=""
    />
  </div>
</template>
