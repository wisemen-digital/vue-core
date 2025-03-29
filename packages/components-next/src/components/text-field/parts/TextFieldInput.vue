<script setup lang="ts">
import InteractableElement from '@/components/shared/InteractableElement.vue'
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
  errors,
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
    <InteractableElement
      :value="modelValue"
      :is-disabled="isDisabled"
      :class="style.input({
        class: mergeClasses(customClassConfig.input, classConfig?.input),
      })"
      :describedby="`${id}-error ${id}-hint`"
      :aria-busy="isLoading"
      :aria-invalid="errors.length > 0"
      :type="type"
      :autocomplete="autocomplete"
      :placeholder="placeholder"
      :spellcheck="isSpellCheckEnabled"
      :required="isRequired"
      as="input"
      @focus="onFocus"
      @blur="onBlur"
      @input="onInput"
    />
  </PrimitiveElement>
</template>
