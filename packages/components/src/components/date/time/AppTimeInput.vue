<script setup lang="ts">
import { vMaska } from 'maska/vue'

import AppInput from '@/components/input/AppInput.vue'
import type { Icon } from '@/icons/icons.js'

const props = withDefaults(defineProps<{
  /**
   * The id of the input.
   * @default null
   */
  id?: null | string
  /**
   * The test id of the input.
   * @default null
   */
  testId?: null | string
  /**
   * Disables the input.
   */
  isDisabled?: boolean
  /**
   * Set an invalid state to the input.
   */
  isInvalid?: boolean
  /**
   * Whether the input is loading.
   * @default false
   */
  isLoading?: boolean
  /**
   * Sets the input in readonly state.
   */
  isReadonly?: boolean
  /**
   * The left icon of the input.
   * @default 'clock'
   */
  iconLeft?: Icon | null
  /**
   * Placeholder of the input.
   * @default null
   */
  placeholder?: null | string
}>(), {
  id: null,
  testId: null,
  hasClearButton: false,
  isDisabled: false,
  isInvalid: false,
  isLoading: false,
  iconLeft: 'clock',
  placeholder: null,
})

const modelValue = defineModel<null | string>({
  required: true,
})

function isValidTime(time: string): boolean {
  // HH:MM
  const timeRegex = /^(?:[01]?\d|2[0-3]):[0-5]\d$/

  return timeRegex.test(time)
}

function onInputBlur(): void {
  if (modelValue.value === null) {
    return
  }

  const isValid = isValidTime(modelValue.value)

  if (isValid) {
    return
  }

  modelValue.value = null
}
</script>

<template>
  <AppInput
    :id="props.id"
    v-model="modelValue"
    :test-id="props.testId"
    :is-invalid="props.isInvalid"
    :is-disabled="props.isDisabled"
    :is-loading="props.isLoading"
    :placeholder="props.placeholder"
    :icon-left="props.iconLeft"
    :is-readonly="props.isReadonly"
    v-maska="'##:##'"
    @blur="onInputBlur"
  >
    <template #right>
      <slot name="right" />
    </template>
  </AppInput>
</template>
