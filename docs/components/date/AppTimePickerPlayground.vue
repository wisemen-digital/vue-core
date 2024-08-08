<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import type {
  TimePickerValue,
} from '@wisemen/vue-core'
import {
  AppText,
  AppTimePicker,
} from '@wisemen/vue-core'
import { ref } from 'vue'

const controls = createControls({
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
  enableAutoApply: {
    default: false,
    label: 'Enable auto apply',
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
  is12: {
    default: false,
    label: 'Is 12h format',
    type: 'switch',
  },
  isInvalid: {
    default: false,
    label: 'Is invalid',
    type: 'switch',
  },
  isReadonly: {
    default: false,
    label: 'Is readonly',
    type: 'switch',
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
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <template #default="{ values }">
      <div class="max-w-64">
        <AppTimePicker
          v-model="model"
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
