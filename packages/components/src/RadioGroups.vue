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
        label="RadioGroup"
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
        label="Checkbox"
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
        label="Checkbox"
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
        label="Checkbox"
        hint="This is a checkbox."
      >
        <template #items="{ items: radioItems }">
          <div class="flex w-full flex-row gap-4">
            <AppRadioGroupItem
              v-for="item of radioItems"
              :key="item.label"
              v-slot="{ isChecked, isDisabled, isHovered, hasError, isFocused }"
              :item="item"
              class="relative w-full basis-1/3 rounded border border-brand-primary-500 p-12"
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
