<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import type { FormFieldErrors } from '@wisemen/vue-core'
import { AppInput, FormElement } from '@wisemen/vue-core'
import { ref } from 'vue'

const controls = createControls({
  label: {
    default: 'Label',
    cols: 2,
    label: 'Label',
    type: 'text',
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
  isTouched: {
    default: false,
    label: 'Is touched',
    type: 'switch',
  },
})

const model = ref<null | string>(null)

const exampleError: FormFieldErrors = {
  _errors: [
    'The name has an error',
  ],
}
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <template #default="{ values }">
      <div>
        <FormElement
          v-bind="values"
          :errors="exampleError"
        >
          <AppInput
            v-model="model"
          />
        </FormElement>
      </div>
    </template>
  </ComponentPlayground>
</template>
