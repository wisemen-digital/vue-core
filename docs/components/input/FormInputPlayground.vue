<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import type { FormFieldErrors } from '@wisemen/vue-core'
import { AppText, FormInput } from '@wisemen/vue-core'
import { ref } from 'vue'

const controls = createControls({
  label: {
    default: 'Name',
    cols: 2,
    label: 'Label',
    type: 'text',
  },
  iconLeft: {
    default: 'alertCircle',
    label: 'Left icon',
    type: 'icon',
  },
  iconRight: {
    default: 'alertCircle',
    label: 'Right icon',
    type: 'icon',
  },
  placeholder: {
    default: 'Name',
    cols: 2,
    label: 'Placeholder',
    type: 'text',
  },
  type: {
    default: 'text',
    cols: 2,
    items: [
      'date',
      'datetime-local',
      'email',
      'number',
      'password',
      'search',
      'tel',
      'text',
      'time',
      'url',
    ],
    label: 'Type',
    type: 'select',
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
        <FormInput
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
