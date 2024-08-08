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

import { DateUtil } from '../../../packages/components/src/utils/date.util'

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
  enableAutoApply: {
    default: false,
    label: 'Enable auto apply',
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

const model = ref<[Date, Date] | [string, string] | null>(null)

const highlighted: Partial<DatePickerHighlightConfig> = {
  dates: [
    DateUtil.getTomorrow(),
  ],
}

const markers: DatePickerMarker[] = [
  {
    date: DateUtil.getDaysFromToday(2),
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
  DateUtil.getDaysFromToday(4),
]
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <template #default="{ values }">
      <div class="flex max-w-64 flex-col gap-2">
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
    </template>
  </ComponentPlayground>
</template>
