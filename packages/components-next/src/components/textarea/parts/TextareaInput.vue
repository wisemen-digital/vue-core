<script setup lang="ts">
import { useTextareaAutosize } from '@vueuse/core'

import InteractableElement from '@/components/shared/InteractableElement.vue'
import PrimitiveElement from '@/components/shared/PrimitiveElement.vue'
import { useInjectTextareaContext } from '@/components/textarea/textarea.context'
import { mergeClasses } from '@/customClassVariants'

const {
  id,
  testId,
  isDisabled,
  isRequired,
  isSpellCheckEnabled,
  autocomplete,
  classConfig,
  customClassConfig,
  errors,
  modelValue,
  placeholder,
  resize,
  style,
  onBlur,
  onFocus,
} = useInjectTextareaContext()

const { textarea } = useTextareaAutosize({
  watch: () => {
    if (resize.value === 'auto-vertical') {
      return modelValue.value
    }

    return null
  },
})

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
      :aria-invalid="errors.length > 0"
      :autocomplete="autocomplete"
      :placeholder="placeholder"
      :spellcheck="isSpellCheckEnabled"
      :required="isRequired"
      @focus="onFocus"
      @blur="onBlur"
      @input="onInput"
    >
      <!-- Render two separate textareas to avoid an explicit height being set when -->
      <!-- auto-vertical is not used. -->
      <textarea
        v-if="resize === 'auto-vertical'"
        ref="textarea"
      />
      <textarea v-else />
    </InteractableElement>
  </PrimitiveElement>
</template>

<style>
/*
 * It's recommended to reset the scrollbar styles for the textarea
 * element to avoid incorrect height values for large amounts of text.
 */
textarea {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

textarea::-webkit-scrollbar {
  display: none;
}
</style>
