<script setup lang="ts">
import {
  VcSelect,
  VcSelectBase,
  VcSelectBaseMultiple,
  VcSelectBaseSingle,
  VcSelectItem,
} from '@wisemen/vue-core-components'
import { ref } from 'vue'

const value = ref<string | null>(null)
const value2 = ref<string[]>([])

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
      placeholder="Select a name"
      label="Using VcSelectBaseSingle"
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
                class="size-6 rounded-full"
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

    <VcSelect
      v-model="value2"
      :display-fn="(name) => name"
      placeholder="Select names"
      label="Using VcSelectBaseMultiple"
      class="w-72"
    >
      <template #base>
        <VcSelectBase>
          <VcSelectBaseMultiple>
            <p class="p-2 text-sm">
              You selected {{ value2.length }} name(s)
            </p>
          </VcSelectBaseMultiple>
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
  </div>
</template>
