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
   * The maximum amount of tags allowed.
   * @default null
   */
  max?: null | number
  /**
   * The placeholder of the input.
   * @default null
   */
  placeholder?: null | string
  /**
   * The tooltip of the input.
   */
  tooltip?: string
}>(), {
  isDisabled: false,
  isRequired: false,
  max: null,
  placeholder: null,
})

const emit = defineEmits<{
  blur: []
  focus: []
}>()

defineSlots<{
  /** Override the tag rendering */
  tag: (props: {
    value: string
  }) => any
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
    :tooltip="props.tooltip"
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
      :max="props.max"
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
