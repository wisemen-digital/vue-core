<script setup lang="ts">
import { type RadioGroupItem, VcRadioGroup } from '@wisemen/vue-core'
import { ref } from 'vue'

const selectedItem = ref<null | string>('Apple')

const items: RadioGroupItem<string>[] = [
  {
    label: 'Apple',
    value: 'Apple',
  },
  {
    isDisabled: true,
    label: 'Banana',
    hint: 'This is a disabled.',
    value: 'Banana',
  },
  {
    hint: 'This is a hint.',
    label: 'Blueberry',
    value: 'Blueberry',
  },
]
</script>

<template>
  <VcRadioGroup
    v-model="selectedItem"
    :errors="{
      _errors: ['This is an error message.'],
    }"
    :is-touched="true"
    :is-disabled="false"
    :items="items"
    label="Radio Group"
    hint="This is a radio group."
  />
</template>
