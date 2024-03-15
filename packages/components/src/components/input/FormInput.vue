<script setup lang="ts">
import type { Icon } from '@/icons/icons'
import type { FormFieldErrors } from '@/types/formFieldErrors.type'

import FormInputContainer from '../form-input-container/FormInputContainer.vue'
import AppInput from '../input/AppInput.vue'

const props = withDefaults(
  defineProps<{
    /**
     * The errors associated with the input.
     */
    errors: FormFieldErrors
    /**
     * The left icon of the input.
     * @default null
     */
    iconLeft?: Icon | null
    /**
     * The right icon of the input.
     * @default null
     */
    iconRight?: Icon | null
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
     * The label of the input.
     */
    label: string
    /**
     * The placeholder of the input.
     * @default null
     */
    placeholder?: null | string
    /**
     * The type of the input.
     * @default 'text'
     */
    type?: 'date' | 'datetime-local' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url'
  }>(),
  {
    iconLeft: undefined,
    iconRight: undefined,
    isDisabled: false,
    isLoading: false,
    isRequired: false,
    isTouched: false,
    placeholder: null,
    type: 'text',
  },
)

const emit = defineEmits<{
  blur: []
  focus: []
}>()

const model = defineModel<null | string>({
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
  <FormInputContainer
    v-slot="{ isInvalid, id }"
    :errors="props.errors"
    :is-required="props.isRequired"
    :is-touched="props.isTouched"
    :is-disabled="props.isDisabled"
    :placeholder="placeholder"
    :label="props.label"
  >
    <AppInput
      :id="id"
      v-model="model"
      :is-invalid="isInvalid"
      :placeholder="props.placeholder"
      :is-disabled="props.isDisabled"
      :type="props.type"
      :is-loading="props.isLoading"
      :icon-left="props.iconLeft"
      :icon-right="props.iconRight"
      @focus="onFocus"
      @blur="onBlur"
    >
      <template #left>
        <slot name="left" />
      </template>

      <template #right>
        <slot name="right" />
      </template>
    </AppInput>
  </FormInputContainer>
</template>
