<!-- eslint-disable no-alert -->
<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import FormDatePicker from '@/components/date/FormDatePicker.vue'
import AppText from '@/components/text/AppText.vue'
import type { FormFieldErrors } from '@/types/formFieldErrors.type'

const controls = createControls({
  id: {
    default: 'input-id',
    cols: 2,
    label: 'Id',
    type: 'text',
  },
  placeholder: {
    default: 'Placeholder...',
    cols: 2,
    label: 'Placeholder',
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
})

const model = ref<Date | null>(null)

const { locale } = useI18n()

locale.value = 'nl'

const exampleError: FormFieldErrors = {
  _errors: [
    'The name has an error',
  ],
}
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <template #default="{ values }">
      <div>
        <FormDatePicker
          v-model="model"
          :errors="exampleError"
          label="Date"

          v-bind="values"
        />

        <AppText variant="caption">
          {{ `Model value: ${model ? new Date(model).toDateString() : 'null'}` }}
        </AppText>
      </div>
    </template>
  </ComponentPlayground>
</template>
