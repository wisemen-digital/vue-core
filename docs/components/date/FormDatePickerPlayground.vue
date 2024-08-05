<!-- eslint-disable no-alert -->
<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import type { FormFieldErrors } from '@wisemen/vue-core'
import { AppText, FormDatePicker } from '@wisemen/vue-core'
import { ref } from 'vue'

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
  // minDate: {
  //   default: null,
  //   label: 'Min date',
  //   type: 'date',
  // },
  // maxDate: {
  //   default: null,
  //   label: 'Max date',
  //   type: 'date',
  // },
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

const model = ref<Date | null>(null)

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
        <FormDatePicker
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
