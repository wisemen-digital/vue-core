<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import type {
  DatePickerHighlightConfig,
  FormFieldErrors,
  MonthPickerValue,
} from '@wisemen/vue-core'
import {
  AppText,
  FormMonthPicker,
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
})

const model = ref<MonthPickerValue | null>({
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
})

const highlighted: Partial<DatePickerHighlightConfig> = {
  months: [
    {
      month: 0,
      year: new Date().getFullYear(),
    },
  ],
}

const disabled: Date[] = [
  DateUtil.getMonthsFromToday(2),
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
      <div class="max-w-64">
        <FormMonthPicker
          v-model="model"
          :errors="exampleError"
          :highlight-config="highlighted"
          :disabled-dates="disabled"
          v-bind="values"
        />

        <AppText variant="caption">
          {{ `Model value:` }}{{ model }}
        </AppText>
      </div>
    </template>
  </ComponentPlayground>
</template>
