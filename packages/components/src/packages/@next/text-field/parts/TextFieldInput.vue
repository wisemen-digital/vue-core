<script setup lang="ts">
import { mergeClasses } from '@/customClassVariants'
import InteractableElement from '@/packages/@next/shared/InteractableElement.vue'
import PrimitiveElement from '@/packages/@next/shared/PrimitiveElement.vue'
import { useInjectTextFieldContext } from '@/packages/@next/text-field/textField.context'

const {
  id,
  testId,
  isDisabled,
  isLoading,
  isSpellCheckEnabled,
  autocomplete,
  classConfig,
  customClassConfig,
  modelValue,
  placeholder,
  style,
  type,
} = useInjectTextFieldContext()
</script>

<template>
  <PrimitiveElement
    :id="id"
    :test-id="testId"
  >
    <InteractableElement
      v-model="modelValue"
      :is-disabled="isDisabled"
      :class="style.input({
        class: mergeClasses(customClassConfig.input, classConfig?.input),
      })"
      :aria-busy="isLoading"
      :type="type"
      :autocomplete="autocomplete"
      :placeholder="placeholder"
      :spellcheck="isSpellCheckEnabled"
      as="input"
    >
      <slot />
    </InteractableElement>
  </PrimitiveElement>
</template>
