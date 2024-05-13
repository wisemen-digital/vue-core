<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import { ref } from 'vue'

import FormCheckboxGroup from '@/components/checkbox/FormCheckboxGroup.vue'
import type { DataItem } from '@/types/dataItem.type'

const controls = createControls({
  label: {
    default: 'Label',
    cols: 2,
    label: 'Label',
    type: 'text',
  },
  isTouched: {
    default: false,
    label: 'Is touched',
    type: 'switch',
  },
  isDisabled: {
    default: false,
    label: 'Is disabled',
    type: 'switch',
  },
  isRequired: {
    default: false,
    label: 'Is required',
    type: 'switch',
  },
})

const value = ref<string[]>([])

const options = ref<DataItem<string>[]>([
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
])
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <template #default="{ values }">
      <FormCheckboxGroup
        v-model="value"
        :options="options"
        :errors="{ _errors: ['This is an error'] }"
        v-bind="values"
      />
    </template>
  </ComponentPlayground>
</template>
