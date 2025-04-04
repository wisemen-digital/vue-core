<script setup lang="ts">
import {
  VcSelect,
  VcSelectBase,
  VcSelectBaseSingle,
  VcSelectItem,
} from '@wisemen/vue-core-components'
import { ref } from 'vue'

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
          <div class="flex w-full items-center justify-between">
            <span class="text-secondary text-sm font-semibold">
              {{ value }}
            </span>

            <img
              :alt="value!"
              src="https://xsgames.co/randomusers/avatar.php?g=male"
              class="size-5 rounded-full"
            >
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
