<script setup lang="ts">
import FormControl from '@/components/shared/FormControl.vue'
import PrimitiveElement from '@/components/shared/PrimitiveElement.vue'
import { useInjectTextFieldContext } from '@/components/text-field/textField.context'
import { mergeClasses } from '@/customClassVariants'

const {
  id,
  testId,
  isDisabled,
  isLoading,
  isRequired,
  isSpellCheckEnabled,
  autocomplete,
  classConfig,
  customClassConfig,
  errorMessage,
  modelValue,
  placeholder,
  style,
  type,
  onBlur,
  onFocus,
} = useInjectTextFieldContext()

function onInput(event: InputEvent): void {
  modelValue.value = (event.target as HTMLInputElement).value
}
</script>

<template>
  <PrimitiveElement
    :id="id"
    :test-id="testId"
  >
    <FormControl
      :value="modelValue"
      :is-loading="isLoading"
      :is-disabled="isDisabled"
      :is-invalid="errorMessage !== null"
      :is-required="isRequired"
      :described-by="`${id}-error ${id}-hint`"
      :class="style.input({
        class: mergeClasses(customClassConfig.input, classConfig?.input),
      })"
      :type="type"
      :autocomplete="autocomplete"
      :placeholder="placeholder"
      :spellcheck="isSpellCheckEnabled"
      as="input"
      @focus="onFocus"
      @blur="onBlur"
      @input="onInput"
    />
  </PrimitiveElement>
</template>
