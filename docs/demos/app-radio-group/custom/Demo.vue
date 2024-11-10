<script setup lang="ts">
import type { RadioGroupItem } from '@wisemen/vue-core'
import {
  AppRadioGroup,
  AppRadioGroupIndicator,
  AppRadioGroupItem,
} from '@wisemen/vue-core'
import { ref } from 'vue'

const selectedItem = ref<null | string>('Apple')

const items: RadioGroupItem<string>[] = [
  {
    label: 'Apple',
    type: 'option',
    value: 'Apple',
  },
  {
    isDisabled: true,
    label: 'Banana',
    type: 'option',
    hint: 'This is a disabled.',
    value: 'Banana',
  },
  {
    hint: 'This is a hint.',
    label: 'Blueberry',
    type: 'option',
    value: 'Blueberry',
  },
]
</script>

<template>
  <div>
    <AppRadioGroup
      v-model="selectedItem"
      :style-config="{
        '--radio-group-item-border-radius-default': 'var(--radius-lg)',
      }"
      :items="items"
      label="Radio Group"
      hint="This is a radio group."
    >
      <template #items="{ items: radioItems }">
        <div class="grid w-96 grid-cols-1 gap-2 lg:grid-cols-3">
          <AppRadioGroupItem
            v-for="item of radioItems"
            :key="item.label"
            :item="item"
            class="group flex items-center justify-between border border-solid border-primary p-2 disabled:cursor-not-allowed disabled:bg-disabled-subtle"
          >
            <p class="text-sm text-primary group-disabled:text-disabled">
              {{ item.label }}
            </p>

            <AppRadioGroupIndicator />
          </AppRadioGroupItem>
        </div>
      </template>
    </AppRadioGroup>
  </div>
</template>
