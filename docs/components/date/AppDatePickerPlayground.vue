<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import type {
  DatePickerHighlightConfig,
  DatePickerMarker,
} from '@wisemen/vue-core'
import {
  AppDatePicker,
  AppText,
} from '@wisemen/vue-core'
import { ref } from 'vue'

const controls = createControls({
  placeholder: {
    default: 'Choose a date',
    label: 'Placeholder',
    cols: 2,
    type: 'text',
  },
  enableTimePicker: {
    default: false,
    label: 'Enable time picker',
    type: 'switch',
  },
  multiple: {
    default: false,
    label: 'Choose multiple dates',
    type: 'switch',
  },
  hasClearButton: {
    default: false,
    label: 'Has clear button',
    type: 'switch',
  },
  allowTextInput: {
    default: false,
    label: 'Allow text input',
    type: 'switch',
  },
  disableAutoApply: {
    default: false,
    label: 'Disable auto apply',
    type: 'switch',
  },
  isDisabled: {
    default: false,
    label: 'Is disabled',
    type: 'switch',
  },
  readonly: {
    default: false,
    label: 'Is readonly',
    type: 'switch',
  },
})
const today = new Date()

const model = ref<Date | null>(new Date())

const highlighted: Partial<DatePickerHighlightConfig> = {
  dates: [
    new Date(today.setDate(today.getDate() + 1)),
  ],
}

const markers: DatePickerMarker[] = [
  {
    date: new Date(today.setDate(today.getDate() + 3)),
    type: 'dot',
    color: 'lightblue',
    tooltip: [
      {
        text: 'This is a tooltip',
      },
    ],
  },
]
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <template #default="{ values }">
      <div class="max-w-64">
        <AppDatePicker
          v-model="model"
          :highlight-config="highlighted"
          :markers="markers"
          v-bind="values"
        />

        <AppText variant="caption">
          {{ `Model value: ${model ? model?.toString() : "null"}` }}
        </AppText>
      </div>
    </template>
  </ComponentPlayground>
</template>
