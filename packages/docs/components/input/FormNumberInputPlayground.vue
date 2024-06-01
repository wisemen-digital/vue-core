<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import { ref } from 'vue'

import FormNumberInput from '@/components/input/number/FormNumberInput.vue'
import type { FormFieldErrors } from '@/index'

const controls = createControls({
  label: {
    default: 'Label',
    cols: 2,
    label: 'Label',
    type: 'text',
  },
  placeholder: {
    default: 'Placeholder',
    cols: 2,
    label: 'Placeholder',
    type: 'text',
  },
  iconLeft: {
    default: null,
    cols: 2,
    label: 'Left icon',
    type: 'icon',
  },
  min: {
    default: '0',
    label: 'Minimum',
    type: 'text',
  },
  max: {
    default: '100',
    label: 'Maximum',
    type: 'text',
  },
  isDisabled: {
    default: false,
    label: 'Is disabled',
    type: 'switch',
  },
  isLoading: {
    default: false,
    label: 'Is loading',
    type: 'switch',
  },
  isRequired: {
    default: false,
    label: 'Is required',
    type: 'switch',
  },
  isTouched: {
    default: false,
    label: 'Is touched',
    type: 'switch',
  },
  hideControls: {
    default: false,
    label: 'Hide controls',
    type: 'switch',
  },
})

const model = ref<null | number>(50)

const exampleError: FormFieldErrors = {
  _errors: [
    'The value has an error',
  ],
}
</script>

<template>
  <ComponentPlayground :controls="controls">
    <template #default="{ values }">
      <FormNumberInput
        v-bind="values"
        v-model="model"
        :errors="exampleError"
        :min="+values.min"
        :max="+values.max"
        class="w-64"
      />
    </template>
  </ComponentPlayground>
</template>
