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

import { DateUtil } from '../../../packages/components/src/utils/date.util'

const controls = createControls({
  placeholder: {
    default: 'Choose a date',
    label: 'Placeholder',
    cols: 2,
    type: 'text',
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

const model = ref<Date | null>(new Date())

const highlighted: Partial<DatePickerHighlightConfig> = {
  dates: [
    DateUtil.getTomorrow(),
  ],
}

const markers: DatePickerMarker[] = [
  {
    date: DateUtil.getDaysFromToday(3),
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
  DateUtil.getDaysFromToday(5),
]
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <template #default="{ values }">
      <div class="max-w-64">
        <AppDatePicker
          id="date-picker-1"
          v-model="model"
          :highlight-config="highlighted"
          :markers="markers"
          :disabled-dates="disabled"
          test-id="date-picker-1"
          v-bind="values"
        />

        <AppText variant="caption">
          {{ `Model value: ${model ? model?.toString() : "null"}` }}
        </AppText>
      </div>
    </template>
  </ComponentPlayground>
</template>
