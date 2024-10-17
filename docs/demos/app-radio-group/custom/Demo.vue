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
      :errors="{
        _errors: ['This is an error message.'],
      }"
      :is-disabled="false"
      :is-required="true"
      :items="items"
      label="Radio Group"
      hint="This is a checkbox."
    >
      <template #items="{ items: radioItems }">
        <div class="grid grid-cols-1 gap-2 lg:grid-cols-3">
          <AppRadioGroupItem
            v-for="item of radioItems"
            :key="item.label"
            v-slot="{ isChecked, isDisabled, isHovered, hasError, isFocused }"
            :item="item"
            class="relative w-full rounded border border-brand-primary-500 p-8 py-12"
          >
            <div>
              <AppRadioGroupIndicator
                :is-checked="isChecked"
                :is-disabled="isDisabled"
                :is-focused="isFocused"
                :is-hovered="isHovered"
                :has-error="hasError"
                class="absolute right-4 top-4"
              />
              <div>
                {{ item.label }}
              </div>
              <div class="text-xs text-gray-500">
                {{ item.hint }}
              </div>
            </div>
          </AppRadioGroupItem>
        </div>
      </template>
    </AppRadioGroup>
  </div>
</template>
