<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import type {
  DatePickerHighlightConfig,
  DatePickerMarker,
  DatePickerRangeValue,
  FormFieldErrors,
} from '@wisemen/vue-core'
import {
  AppText,
  FormDateRangePicker,
} from '@wisemen/vue-core'
import { ref } from 'vue'

import { DateUtil } from '../../../packages/components/src/utils/date.util'

const controls = createControls({
  label: {
    default: 'Date',
    label: 'Label',
    cols: 2,
    type: 'text',
  },
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
  isMonthYearPickersDisabled: {
    default: false,
    label: 'Is month/year pickers disabled',
    type: 'switch',
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
  isInline: {
    default: false,
    label: 'Is inline',
    type: 'switch',
  },
})

const model = ref<DatePickerRangeValue | null>(null)

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

const exampleError: FormFieldErrors = {
  _errors: [
    'The date has an error',
  ],
}
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <template #default="{ values }">
      <div class="flex max-w-64 flex-col gap-2">
        <FormDateRangePicker
          v-model="model"
          :highlight-config="highlighted"
          :markers="markers"
          :disabled-dates="disabled"
          :errors="exampleError"
          :range-config="{
            autoRange: values.autoRange,
            maxRange: values.maxRange,
            minRange: values.minRange,
            hasNoDisabledRange: values.noDisabledRange,
          }"
          v-bind="values"
        />

        <AppText variant="caption">
          {{ `Model value:` }}{{ model }}
        </AppText>
      </div>
    </template>
  </ComponentPlayground>
</template>
