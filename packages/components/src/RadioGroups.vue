<script setup lang="ts">
import { ref } from 'vue'

import AppRadioGroup from './components/radio-group/AppRadioGroup.vue'
import AppRadioGroupIndicator from './components/radio-group/AppRadioGroupIndicator.vue'
import AppRadioGroupItem from './components/radio-group/AppRadioGroupItem.vue'
import type { RadioGroupItem } from './types/radioGroup.type'

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
    value: 'Banana',
  },
  {
    hint: 'This is a hint.',
    label: 'Blueberry',
    type: 'option',
    value: 'Blueberry',
  },
  {
    label: 'Grapes',
    type: 'option',
    value: 'Grapes',
  },
  {
    label: 'Leek',
    type: 'option',
    value: 'Leek',
  },
]

const selected = ref<null | string>('Apple')
</script>

<template>
  <div class="grid grid-cols-3 gap-12">
    <div>
      <AppRadioGroup
        v-model="selected"
        :errors="{
          _errors: ['This is an error message.'],
        }"
        :is-disabled="false"
        :is-required="true"
        :items="items"
        label="Radio Group"
        hint="This is a radio group."
      />
    </div>
    <div>
      <AppRadioGroup
        v-model="selected"
        :errors="{
          _errors: ['This is an error message.'],
        }"
        :is-disabled="false"
        :is-required="true"
        :items="items"
        :is-touched="true"
        label="Radio Group"
        hint="This is has errors."
      />
    </div>
    <div>
      <AppRadioGroup
        v-model="selected"
        :errors="{
          _errors: ['This is an error message.'],
        }"
        :is-disabled="true"
        :is-required="true"
        :items="items"
        label="Radio Group"
        hint="This is disabled."
      />
    </div>
  </div>
  <div>
    <div>
      <AppRadioGroup
        v-model="selected"
        :errors="{
          _errors: ['This is an error message.'],
        }"
        :is-disabled="false"
        :is-required="true"
        :items="items"
        :is-touched="true"
        label="Radio Group"
        hint="This is a checkbox."
      >
        <template #items="{ items: radioItems }">
          <div class="grid grid-cols-3 gap-2">
            <AppRadioGroupItem
              v-for="item of radioItems"
              :key="item.label"
              v-slot="{ isChecked, isDisabled, isHovered, hasError, isFocused }"
              :item="item"
              class="relative w-full rounded border border-brand-primary-500 p-12"
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
              </div>
            </AppRadioGroupItem>
          </div>
        </template>
      </AppRadioGroup>
    </div>
  </div>
</template>

<style>
body {
  font-family: 'Inter Variable', sans-serif;
}
</style>
