<script setup lang="ts">
import { useComponentAttrs } from '../../composables/componentAttrs.composable'
import type { FormFieldErrors } from '../../types/formFieldErrors.type'
import FormElement from '../form-element/FormElement.vue'
import AppTextarea from './AppTextarea.vue'

const props = withDefaults(
  defineProps<{
    /**
     * The errors associated with the input.
     */
    errors: FormFieldErrors
    /**
     * The height class of the textarea.
     * @default null
     */
    heightClass?: null | string
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
     * The label of the input.
     */
    label: string
    /**
     * The placeholder of the input.
     * @default null
     */
    placeholder?: null | string
    /**
     * The resize property of the textarea.
     * @default 'none'
     */
    resize?: 'both' | 'horizontal' | 'none' | 'vertical'
  }>(),
  {
    heightClass: null,
    isDisabled: false,
    isRequired: false,
    isTouched: false,
    placeholder: null,
    resize: 'none',
  },
)

const emit = defineEmits<{
  blur: []
  focus: []
}>()

const model = defineModel<null | string>({
  required: true,
})

const { classAttr, otherAttrs } = useComponentAttrs()

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
    :class="classAttr"
    :errors="props.errors"
    :is-required="props.isRequired"
    :is-touched="props.isTouched"
    :is-disabled="props.isDisabled"
    :label="props.label"
  >
    <AppTextarea
      :id="id"
      v-model="model"
      v-bind="otherAttrs"
      :is-invalid="isInvalid"
      :placeholder="props.placeholder"
      :is-disabled="props.isDisabled"
      :height-class="props.heightClass"
      :resize="props.resize"
      @focus="onFocus"
      @blur="onBlur"
    />
  </FormElement>
</template>
