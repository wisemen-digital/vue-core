<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import {
  AppTimeInput,
  type FormFieldErrors,
} from '@wisemen/vue-core'
import { ref } from 'vue'

const controls = createControls({
  label: {
    default: 'Time',
    label: 'Label',
    type: 'text',
  },
  placeholder: {
    default: 'Choose a time',
    label: 'Placeholder',
    cols: 2,
    type: 'text',
  },
  iconLeft: {
    default: 'clock',
    label: 'Left icon',
    type: 'icon',
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
  tooltip: {
    default: 'This is a tooltip',
    label: 'Tooltip',
    type: 'text',
    cols: 2,
  },
})

const model = ref<null | string>(null)

const exampleError: FormFieldErrors = {
  _errors: [
    'The time has an error',
  ],
}
</script>

<template>
  <ComponentPlayground :controls="controls">
    <template #default="{ values }">
      <div>
        <AppTimeInput
          v-bind="values"
          v-model="model"
          :errors="exampleError"
          class="mb-3"
        />
      </div>
    </template>
  </ComponentPlayground>
</template>
