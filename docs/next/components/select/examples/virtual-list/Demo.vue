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
];

const extendedNames = ref<string[]>([]);

while (extendedNames.value.length < 1000) {
  extendedNames.value.push(...names);
}
</script>

<template>
  <VcSelect 
    v-model="value"
    :display-fn="(name) => name"
    :virtual-list="{
      isEnabled: true,
      items: extendedNames,
    }"
    placeholder="Select a name"
    label="Name"
    class="w-72"
  />
</template>