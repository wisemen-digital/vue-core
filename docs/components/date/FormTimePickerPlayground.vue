<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import type {
  FormFieldErrors,
  TimePickerValue,
} from '@wisemen/vue-core'
import {
  AppText,
  FormTimePicker,
} from '@wisemen/vue-core'
import { ref } from 'vue'

const controls = createControls({
  label: {
    default: 'Time',
    label: 'Label',
    cols: 2,
    type: 'text',
  },
  placeholder: {
    default: 'Choose a time',
    label: 'Placeholder',
    cols: 2,
    type: 'text',
  },
  minutesIncrement: {
    default: '5',
    label: 'Minutes increment',
    cols: 2,
    type: 'text',
  },
  hasClearButton: {
    default: false,
    label: 'Has clear button',
    type: 'switch',
  },
  isTextInputAllowed: {
    default: false,
    label: 'Is text input allowed',
    type: 'switch',
  },
  enableSeconds: {
    default: false,
    label: 'Enable seconds',
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

const model = ref<TimePickerValue | null>({
  hours: 12,
  minutes: 30,
})

const disabled: TimePickerValue[] = [
  {
    hours: 14,
    minutes: 30,
  },
]

const exampleError: FormFieldErrors = {
  _errors: [
    'The time has an error',
  ],
}
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <template #default="{ values }">
      <div class="max-w-64">
        <FormTimePicker
          v-model="model"
          :errors="exampleError"
          :disabled-times="disabled"
          v-bind="values"
        />

        <AppText variant="caption">
          {{ `Model value:` }}{{ model }}
        </AppText>
      </div>
    </template>
  </ComponentPlayground>
</template>
