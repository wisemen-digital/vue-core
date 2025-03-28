<script setup lang="ts">
import {
  VcSelect,
  VcSelectItem,
} from '@wisemen/vue-core-components'
import { ref } from 'vue';

const value = ref<string | null>(null)

const names = [
  'Adam Otto',
  'Alexander Smith',
  'Peter Johnson',
  'Thomas Williams',
  'Michael Brown',
  'Sarah Jones',
  'Lisa Lee',
  'Emily Brown',
  'David Johnson',
  'Anna Smith',
  'Mark Williams',
]
</script>

<template>
  <VcSelect 
    v-model="value"
    :display-fn="(name) => name"
    placeholder="Select a name"
    icon-left="plus"
    label="Name"
    class="w-72"
  >
    <VcSelectItem 
      v-for="name of names" 
      :key="name" 
      :value="name"
    >
      {{ name }}
    </VcSelectItem>
  </VcSelect>
</template>