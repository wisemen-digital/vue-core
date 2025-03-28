<script setup lang="ts">
import {
  VcSelect,
  VcSelectItem,
} from '@wisemen/vue-core-components'
import { ref } from 'vue';

const value = ref<string | null>(null)

const names = [
  'Adam Otto',
]
</script>

<template>
  <VcSelect 
    v-model="value"
    :display-fn="(name) => name"
    :is-disabled="true"
    placeholder="Select a name"
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