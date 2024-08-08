<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import type {
  DatePickerHighlightConfig,
  MonthPickerValue,
} from '@wisemen/vue-core'
import {
  AppMonthPicker,
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
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <template #default="{ values }">
      <div class="max-w-64">
        <AppMonthPicker
          v-model="model"
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
