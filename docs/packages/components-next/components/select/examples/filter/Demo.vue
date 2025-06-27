<script setup lang="ts">
import {
  VcSelect,
  VcSelectItem,
} from '@wisemen/vue-core-components'
import { ref } from 'vue'

const value = ref<string | null>(null)
const value2 = ref<string | null>(null)

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
  <div class="flex flex-col gap-10">
    <VcSelect
      v-model="value"
      :display-fn="(name) => name"
      :filter="{
        isEnabled: true,
      }"
      placeholder="Select a name"
      label="Filter in dropdown"
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
    <VcSelect
      v-model="value2"
      :display-fn="(name) => name"
      :filter="{
        isEnabled: true,
        isInline: true,
      }"
      placeholder="Select a name"
      label="Inline filter"
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
  </div>
</template>
