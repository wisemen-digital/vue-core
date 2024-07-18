<script setup lang="ts">
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
    maxDate?: Date | null
    /**
     * The min date.
     * @default null
     */
    minDate?: Date | null
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
     * The format of the date.
     * @default 'DD/MM/YYYY'
     */
    format?: string
    /**
     * The label of the input.
     */
    label: string
    /**
     * The tooltip of the input.
     */
    tooltip?: string
  }>(),
  {
    isDisabled: false,
    isRequired: false,
    isTouched: false,
  },
)

const model = defineModel<Date | null>({
  required: true,
})

const { classAttr, otherAttrs } = useComponentAttrs()
</script>

<template>
  <FormElement
    v-slot="{ isInvalid, id }"
    :tooltip="props.tooltip"
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
      :format="props.format"
      :is-required="props.isRequired"
      :max-date="props.maxDate"
      :is-invalid="isInvalid"
      :is-disabled="props.isDisabled"
    />
  </FormElement>
</template>
