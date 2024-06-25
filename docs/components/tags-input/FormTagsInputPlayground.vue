<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import type { FormFieldErrors } from '@wisemen/vue-core'
import { FormTagsInput } from '@wisemen/vue-core'
import { ref } from 'vue'

const controls = createControls({
  label: {
    default: 'Names',
    cols: 2,
    label: 'Label',
    type: 'text',
  },
  max: {
    default: '5',
    cols: 2,
    label: 'Max',
    type: 'text',
  },
  placeholder: {
    default: 'Placeholder...',
    cols: 2,
    label: 'Placeholder',
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
  tooltip: {
    default: 'This is a tooltip',
    label: 'Tooltip',
    type: 'text',
    cols: 2,
  },
})

const model = ref<string[]>([
  'John Doe',
])

const exampleError: FormFieldErrors = {
  _errors: [
    'The name has an error',
  ],
}
</script>

<template>
  <ComponentPlayground :controls="controls">
    <template #default="{ values }">
      <FormTagsInput
        v-bind="values"
        v-model="model"
        :errors="exampleError"
      />
    </template>
  </ComponentPlayground>
</template>
