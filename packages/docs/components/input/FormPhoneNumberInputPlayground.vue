<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import { ref } from 'vue'

import FormPhoneNumberInput from '@/components/input/phone-number/FormPhoneNumberInput.vue'
import AppText from '@/components/text/AppText.vue'
import type { FormFieldErrors } from '@/index'

const controls = createControls({
  label: {
    default: 'Phone number',
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
  iconRight: {
    default: null,
    cols: 2,
    label: 'Right icon',
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
})

const model = ref<null | string>('+32412345678')

const exampleError: FormFieldErrors = {
  _errors: [
    'The value has an error',
  ],
}
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <template #default="{ values }">
      <div>
        <FormPhoneNumberInput
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
