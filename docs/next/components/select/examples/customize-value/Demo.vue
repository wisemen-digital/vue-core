<script setup lang="ts">
import {
  VcSelect,
  VcSelectItem,
  VcSelectBase,
  VcSelectBaseSingle,
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
    label="Name"
    class="w-72"
  >
    <template #base>
      <VcSelectBase>
        <VcSelectBaseSingle>
          <div class="flex justify-between items-center w-full">
            <span class="font-semibold text-sm text-secondary">
              {{ value }}
            </span>

            <img 
              src="https://xsgames.co/randomusers/avatar.php?g=male" 
              class="size-5 rounded-full"
            />
          </div>
        </VcSelectBaseSingle>
      </VcSelectBase>
    </template>

    <VcSelectItem 
      v-for="name of names" 
      :key="name" 
      :value="name"
    >
      {{ name }}
    </VcSelectItem>
  </VcSelect>
</template>