<!-- eslint-disable no-alert -->
<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import type { CalendarDate } from '@internationalized/date'
import type { FormFieldErrors } from '@wisemen/vue-core'
import { AppText, FormDatePicker } from '@wisemen/vue-core'
import { useForm } from 'formango'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { z } from 'zod'

const controls = createControls({
  id: {
    default: 'input-id',
    cols: 2,
    label: 'Id',
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
  tooltip: {
    default: 'This is a tooltip',
    label: 'Tooltip',
    type: 'text',
    cols: 2,
  },
})

const model = ref<CalendarDate | null>(null)

const formSchema = z.object({
  date: z.date(),
})

const { form, onSubmitForm } = useForm({
  initialState() {
    return {
      date: null,
    }
  },
  schema: formSchema,
})

const { locale } = useI18n()

locale.value = 'nl'

const exampleError: FormFieldErrors = {
  _errors: [
    'The name has an error',
  ],
}

const dateField = form.register('date')

onSubmitForm((value) => {
  console.log({ value })
})
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <template #default>
      <div>
        <FormDatePicker
          v-bind="dateField"
          :is-required="true"
          :min-date="new Date(2024, 0, 1)"
          :max-date="new Date(2030, 0, 1)"
          label="Date"
        />

        <button @click="form.submit()">
          submit
        </button>

        <br>
        {{ form.errors }}
        <br>
        {{ form.state.date }}
        <br>
        {{ form.isValid }}

        <AppText variant="caption">
          {{ `Model value: ${model ? model.toString() : 'null'}` }}
        </AppText>
      </div>
    </template>
  </ComponentPlayground>
</template>
