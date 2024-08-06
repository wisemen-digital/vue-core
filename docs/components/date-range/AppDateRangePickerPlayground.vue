<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import type {
  DatePickerHighlightConfig,
  DatePickerMarker,
} from '@wisemen/vue-core'
import {
  AppDateRangePicker,
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
  autoRange: {
    default: '',
    cols: 2,
    label: 'Automatic range',
    type: 'text',
  },
  maxRange: {
    default: '',
    label: 'Max range',
    type: 'text',
  },
  minRange: {
    default: '',
    label: 'Min range',
    type: 'text',
  },
  noDisabledRange: {
    default: false,
    cols: 2,
    label: 'No disabled range',
    type: 'switch',
  },
  minDate: {
    default: null,
    label: 'Min date',
    type: 'date',
  },
  maxDate: {
    default: null,
    label: 'Max date',
    type: 'date',
  },
  enableTimePicker: {
    default: false,
    label: 'Enable time picker',
    type: 'switch',
  },
  disableMonthYearPickers: {
    default: false,
    label: 'Disable month and year pickers',
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
const date = new Date()

const model = ref<[Date, Date] | [string, string] | null>(null)
const fixedStartModel = ref<[Date, Date] | [string, string] | null>([
  new Date(),
  new Date(new Date().setDate(date.getDate() + 7)),
])

const highlighted: Partial<DatePickerHighlightConfig> = {
  dates: [
    new Date(date.setDate(date.getDate() + 1)),
  ],
}

const markers: DatePickerMarker[] = [
  {
    date: new Date(date.setDate(date.getDate() + 2)),
    type: 'dot',
    color: 'lightblue',
    tooltip: [
      {
        text: 'This is a tooltip',
      },
    ],
  },
]

const disabled: Date[] = [
  new Date(date.setDate(date.getDate() + 2)),
]
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <template #default="{ values }">
      <div class="flex gap-4">
        <div class="flex max-w-64 flex-col gap-2">
          <AppText variant="subtext">
            Classic range picker
          </AppText>
          <AppDateRangePicker
            v-model="model"
            :highlight-config="highlighted"
            :markers="markers"
            :disabled-dates="disabled"
            :range-config="{
              autoRange: values.autoRange,
              maxRange: values.maxRange,
              minRange: values.minRange,
              noDisabledRange: values.noDisabledRange,
            }"
            v-bind="values"
          />

          <AppText variant="caption">
            {{ `Model value: ${model ?? "null"}` }}
          </AppText>
        </div>
        <div class="flex max-w-64 flex-col gap-2">
          <AppText variant="subtext">
            With fixed start
          </AppText>
          <AppDateRangePicker
            v-model="fixedStartModel"
            :highlight-config="highlighted"
            :markers="markers"
            :disabled-dates="disabled"
            :range-config="{
              maxRange: values.maxRange,
              minRange: values.minRange,
              noDisabledRange: values.noDisabledRange,
              fixedStart: true,
            }"
            v-bind="values"
          />

          <AppText variant="caption">
            {{ `Model value: ${fixedStartModel ?? "null"}` }}
          </AppText>
        </div>
      </div>
    </template>
  </ComponentPlayground>
</template>
