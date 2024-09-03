<!-- eslint-disable no-alert -->
<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import type {
  FormFieldErrors,
  WeekPickerValue,
} from '@wisemen/vue-core'
import { AppText, FormWeekPicker } from '@wisemen/vue-core'
import { ref } from 'vue'

const controls = createControls({
  label: {
    default: 'Week',
    label: 'Label',
    cols: 2,
    type: 'text',
  },
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
  isInline: {
    default: false,
    label: 'Is inline',
    type: 'switch',
  },
  tooltip: {
    default: 'This is a tooltip',
    label: 'Tooltip',
    type: 'text',
    cols: 2,
  },
})

const model = ref<WeekPickerValue | null>(null)
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
        <FormWeekPicker
          v-if="values.isInline"
          v-model="model"
          :errors="exampleError"
          v-bind="values"
        />

        <FormWeekPicker
          v-if="!values.isInline"
          v-model="model"
          :errors="exampleError"
          v-bind="values"
        />

        <AppText variant="caption">
          {{ `Model value: ${model ? model.toString() : 'null'}` }}
        </AppText>
      </div>
    </template>
  </ComponentPlayground>
</template>
