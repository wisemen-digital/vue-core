<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import {
  AppText,
  AppWeekPicker,
} from '@wisemen/vue-core'
import { ref } from 'vue'

import { DateUtil } from '../../../packages/components/src/utils/date.util'

const controls = createControls({
  placeholder: {
    default: 'Choose a week',
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
  isMonthYearPickersDisabled: {
    default: false,
    label: 'Is month/year pickers disabled',
    type: 'switch',
  },
  isTextInputAllowed: {
    default: false,
    label: 'Is text input allowed',
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
  isInline: {
    default: false,
    label: 'Is inline',
    type: 'switch',
  },
})

const model = ref<Date[] | null>([
  DateUtil.getStartOfWeek(),
  DateUtil.getEndOfWeek(),
])
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <template #default="{ values }">
      <div class="max-w-64">
        <AppWeekPicker
          v-if="values.isInline"
          id="date-picker-1"
          v-model="model"
          test-id="date-picker-1"
          v-bind="values"
        />

        <AppWeekPicker
          v-if="!values.isInline"
          id="date-picker-1"
          v-model="model"
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
