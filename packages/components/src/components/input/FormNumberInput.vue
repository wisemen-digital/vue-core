<script setup lang="ts">
import FormElement from '@/components/form-element/FormElement.vue'
import AppNumberInput from '@/components/input/AppNumberInput.vue'
import { useComponentAttrs } from '@/composables/componentAttrs.composable'
import type { Icon } from '@/icons/icons'
import type { FormFieldErrors } from '@/types/formFieldErrors.type'

const props = withDefaults(
  defineProps<{
    /**
     * Whether the input is disabled.
     */
    isDisabled?: boolean
    /**
     * Whether the input is loading.
     * @default false
     */
    isLoading?: boolean
    /**
     *  Whether the input is required.
     */
    isRequired?: boolean
    /**
     *
     */
    isTouched: boolean
    /**
     * The errors associated with the input.
     */
    errors: FormFieldErrors
    /**
     * Whether to hide the increment and decrement controls.
     * @default false
     */
    hideControls?: boolean
    /**
     * The left icon of the input.
     * @default null
     */
    iconLeft?: Icon | null
    /**
     * The label of the input.
     */
    label: string
    /**
     * The maximum value of the input.
     * @default null
     */
    max?: null | number
    /**
     * The minimum value of the input.
     * @default 0
     */
    min?: null | number
    /**
     * The placeholder of the input.
     * @default null
     */
    placeholder?: null | string
  }>(),
  {
    isDisabled: false,
    isLoading: false,
    isRequired: false,
    isTouched: false,
    hideControls: false,
    iconLeft: undefined,
    max: null,
    min: 0,
    placeholder: null,
  },
)

const emit = defineEmits<{
  blur: []
  focus: []
}>()

const model = defineModel<null | number>({
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
    <AppNumberInput
      :id="id"
      v-model="model"
      v-bind="otherAttrs"
      :is-invalid="isInvalid"
      :placeholder="props.placeholder"
      :is-disabled="props.isDisabled"
      :is-loading="props.isLoading"
      :icon-left="props.iconLeft"
      :min="props.min"
      :max="props.max"
      @focus="onFocus"
      @blur="onBlur"
    >
      <template #left>
        <slot name="left" />
      </template>

      <template #right>
        <slot name="right" />
      </template>
    </AppNumberInput>
  </FormElement>
</template>
