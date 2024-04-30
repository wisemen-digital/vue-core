<script setup lang="ts">
import FormElement from '@/components/form-element/FormElement.vue'
import AppTagsInput from '@/components/tags-input/AppTagsInput.vue'
import type { FormFieldErrors } from '@/types/formFieldErrors.type'

const props = withDefaults(defineProps<{
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
  /**
   * The placeholder of the input.
   * @default null
   */
  placeholder?: null | string
}>(), {
  isDisabled: false,
  isRequired: false,
  placeholder: null,
})

const emit = defineEmits<{
  blur: []
  focus: []
}>()

const model = defineModel<string[]>({
  required: true,
})

function onFocus(): void {
  emit('focus')
}

function onBlur(): void {
  emit('blur')
}
</script>

<template>
  <FormElement
    v-slot="{ isInvalid, id }"
    :errors="props.errors"
    :is-required="props.isRequired"
    :is-touched="props.isTouched"
    :is-disabled="props.isDisabled"
    :label="props.label"
  >
    <AppTagsInput
      :id="id"
      v-model="model"
      :is-invalid="isInvalid"
      :placeholder="props.placeholder"
      :is-disabled="props.isDisabled"
      @focus="onFocus"
      @blur="onBlur"
    >
      <template #tag="{ value }">
        <slot
          :value="value"
          name="tag"
        />
      </template>
    </AppTagsInput>
  </FormElement>
</template>
