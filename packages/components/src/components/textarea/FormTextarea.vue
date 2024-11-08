<script setup lang="ts">
import FormElement from '@/components/form-element/FormElement.vue'
import AppTextarea from '@/components/textarea/AppTextarea.vue'
import type { TextareaStyleProps } from '@/components/textarea/textarea.style'
import { useComponentAttrs } from '@/composables/component-attrs/componentAttrs.composable'
import type { FormFieldErrors } from '@/types/formFieldErrors.type'

const props = withDefaults(
  defineProps<{
    /**
     * The testId label.
     */
    testId?: string
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
     * The height class of the textarea.
     * @default null
     */
    heightClass?: string | null
    /**
     * The label of the input.
     */
    label: string
    /**
     * The placeholder of the input.
     * @default null
     */
    placeholder?: string | null
    /**
     * The resize property of the textarea.
     * @default 'none'
     */
    resize?: TextareaStyleProps['resize']
    /**
     * The tooltip of the input.
     */
    tooltip?: string
  }>(),
  {
    isDisabled: false,
    isRequired: false,
    isTouched: false,
    heightClass: null,
    placeholder: null,
    resize: 'none',
  },
)

const emit = defineEmits<{
  blur: []
  focus: []
}>()

const model = defineModel<string | null>({
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
    :tooltip="props.tooltip"
    :is-required="props.isRequired"
    :is-touched="props.isTouched"
    :is-disabled="props.isDisabled"
    :label="props.label"
  >
    <AppTextarea
      :id="id"
      v-model="model"
      v-bind="otherAttrs"
      :test-id="props.testId"
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
