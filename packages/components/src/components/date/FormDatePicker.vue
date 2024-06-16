<script setup lang="ts">
import type { CalendarDate } from '@internationalized/date'

import AppDatePicker from '@/components/date/AppDatePicker.vue'
import FormElement from '@/components/form-element/FormElement.vue'
import { useComponentAttrs } from '@/composables/componentAttrs.composable'
import type { FormFieldErrors } from '@/types/formFieldErrors.type'

const props = withDefaults(
  defineProps<{
    /**
     * The max date.
     * @default null
     */
    maxDate?: CalendarDate | null
    /**
     * The min date.
     * @default null
     */
    minDate?: CalendarDate | null
    /**
     * Whether the input is disabled.
     */
    isDisabled?: boolean
    /**
     *  Whether the input is required.
     */
    isRequired?: boolean
    /**
     * Whether the input is touched.
     */
    isTouched: boolean
    /**
     * The errors associated with the input.
     */
    errors: FormFieldErrors
    /**
     * The label of the input.
     */
    label: string
  }>(),
  {
    isDisabled: false,
    isRequired: false,
    isTouched: false,
  },
)

const model = defineModel<CalendarDate | null>({
  required: true,
})

const { classAttr, otherAttrs } = useComponentAttrs()
</script>

<template>
  <FormElement
    v-slot="{ isInvalid, id }"
    :class="classAttr"
    :errors="props.errors"
    :is-required="props.isRequired"
    :is-touched="props.isTouched"
    :is-disabled="props.isDisabled"
    :label="props.label"
  >
    <AppDatePicker
      :id="id"
      v-model="model"
      v-bind="otherAttrs"
      :min-date="props.minDate"
      :max-date="props.maxDate"
      :is-invalid="isInvalid"
      :is-disabled="props.isDisabled"
    />
  </FormElement>
</template>
