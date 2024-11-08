<script setup lang="ts">
import { useId } from 'radix-vue'
import { computed } from 'vue'

import FormError from '@/components/form-error/FormError.vue'
import FormGroup from '@/components/form-group/FormGroup.vue'
import FormLabel from '@/components/form-label/FormLabel.vue'
import type { FormFieldErrors } from '@/types/formFieldErrors.type'

const props = defineProps<{
  /**
   * The testId label.
   */
  testId?: string
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
   * The errors associated with the input.
   */
  errors: FormFieldErrors
  /**
   * The label of the input.
   */
  label: string | null
  /**
   * The tooltip of the input.
   */
  tooltip?: string
}>()

defineSlots<{
  /** Content of the element */
  default: (props: {
    id: string
    isInvalid: boolean
  }) => any
}>()

const inputId = useId(null, 'input')

const isInvalid = computed<boolean>(() => {
  return props.isTouched && props.errors !== undefined
})
</script>

<template>
  <FormGroup>
    <FormLabel
      v-if="props.label !== null"
      :for="inputId"
      :label="props.label"
      :data-test-id="props.testId"
      :is-required="props.isRequired"
      :is-invalid="isInvalid"
      :is-disabled="props.isDisabled"
      :tooltip="props.tooltip"
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
