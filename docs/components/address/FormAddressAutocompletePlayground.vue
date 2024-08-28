<script lang="ts" setup>
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import type {
  AddressForm,
  FormFieldErrors,
} from '@wisemen/vue-core'
import {
  AppText,
  FormAddressAutocomplete,
} from '@wisemen/vue-core'
import { ref } from 'vue'

const controls = createControls({
  label: {
    default: 'Address',
    label: 'Label',
    type: 'text',
  },
  placeholder: {
    default: 'Address',
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
})

const model = ref<AddressForm | null>(null)

const exampleError: FormFieldErrors = {
  _errors: [
    'The address has an error',
  ],
}
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <template #default="{ values }">
      <div class="flex max-w-64 flex-col gap-4">
        <FormAddressAutocomplete
          v-model="model"
          :errors="exampleError"
          v-bind="values"
        />
        <AppText variant="subtext">
          {{ model }}
        </AppText>
      </div>
    </template>
  </ComponentPlayground>
</template>
