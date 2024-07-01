<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import type { FormFieldErrors } from '@wisemen/vue-core'
import {
  AppText,
  FormPasswordInput,
} from '@wisemen/vue-core'
import { ref } from 'vue'

const controls = createControls({
  label: {
    default: 'Password',
    cols: 2,
    label: 'Label',
    type: 'text',
  },
  placeholder: {
    default: 'Password',
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
  isLoading: {
    default: false,
    label: 'Is loading',
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
    'The password has an error',
  ],
}
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <template #default="{ values }">
      <div>
        <FormPasswordInput
          v-bind="values"
          v-model="model"
          :errors="exampleError"
          class="mb-3"
        />

        <AppText variant="caption">
          {{ `Model value: ${model}` }}
        </AppText>
      </div>
    </template>
  </ComponentPlayground>
</template>
