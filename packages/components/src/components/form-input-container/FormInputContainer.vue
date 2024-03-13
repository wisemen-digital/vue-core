<script setup lang="ts">
import { computed } from 'vue'

import type { FormFieldErrors } from '@/types/formFieldErrors.type'
import { generateUuid } from '@/utils/uuid.util'

import FormError from '../form-error/FormError.vue'
import FormGroup from '../form-group/FormGroup.vue'
import FormLabel from '../form-label/FormLabel.vue'

const props = defineProps<{
  /**
   * The errors associated with the input.
   */
  errors: FormFieldErrors
  /**
   * Whether the input is disabled.
   */
  isDisabled: boolean
  /**
   *  Whether the input is required.
   */
  isRequired: boolean
  /**
   * Whether the input is touched. This is used to determine if the input should be marked as invalid.
   */
  isTouched: boolean
  /**
   * The label of the input.
   */
  label: string
}>()

const inputId = `form-input-${generateUuid()}`

const isInvalid = computed<boolean>(() => {
  return props.isTouched && props.errors !== undefined
})
</script>

<template>
  <FormGroup>
    <FormLabel
      :for="inputId"
      :label="props.label"
      :is-required="props.isRequired"
      :is-invalid="isInvalid"
      :is-disabled="props.isDisabled"
    />

    <slot
      :id="inputId"
      :is-invalid="isInvalid"
    />

    <FormError
      :is-visible="isInvalid"
      :errors="props.errors"
    />
  </FormGroup>
</template>
