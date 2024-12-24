<script setup lang="ts">
import { useTextareaAutosize } from '@vueuse/core'
import { useId } from 'reka-ui'
import { computed, ref } from 'vue'

import InputField from '@/components/input-field/InputField.vue'
import type { TextareaProps } from '@/components/input-field/text-area/textarea.props'
import { textareaStyle } from '@/components/input-field/text-area/textarea.style'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import { useAriaDescribedBy } from '@/composables/aria-described-by/ariaDescribedBy.composable'

const props = withDefaults(defineProps<TextareaProps>(), {
  id: null,
  testId: null,
  isDisabled: false,
  isReadonly: false,
  isRequired: false,
  isSpellCheckEnabled: false,
  isTouched: false,
  errors: () => [],
  hint: null,
  label: null,
  placeholder: null,
  resize: 'none',
  styleConfig: null,
})

const emit = defineEmits<{
  blur: []
  focus: []
}>()

const model = defineModel<string | null>({
  required: true,
})

const themeProviderContext = injectThemeProviderContext()

const isFocused = ref<boolean>(false)
const isMouseOver = ref<boolean>(false)

const style = textareaStyle()

const inputId = props.id ?? useId()
const isHovered = computed<boolean>(() => isMouseOver.value && !props.isDisabled)
const hasError = computed<boolean>(() => props.isTouched && props.errors.length > 0)

const ariaDescribedBy = useAriaDescribedBy({
  id: inputId,
  hasErrors: hasError,
  hasHint: computed<boolean>(() => props.hint !== null),
})

const textareaClasses = computed<string>(() => style.textarea({
  hasError: hasError.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
  resizeMode: props.resize,
}))

const { textarea } = useTextareaAutosize({
  watch: () => {
    if (props.resize === 'auto-vertical') {
      return model.value
    }

    return null
  },
})

function onMouseEnter(): void {
  isMouseOver.value = true
}

function onMouseLeave(): void {
  isMouseOver.value = false
}

function onFocus(): void {
  isFocused.value = true
  emit('focus')
}

function onBlur(): void {
  isFocused.value = false
  emit('blur')
}
</script>

<template>
  <InputField
    :input-id="inputId"
    :label="props.label"
    :hint="props.hint"
    :is-touched="isTouched"
    :errors="props.errors"
    :is-required="props.isRequired"
    :style="props.styleConfig"
    :class="themeProviderContext.theme.value"
    class="textarea-default"
  >
    <template #label="{ label }">
      <slot
        :label="label"
        name="label"
      />
    </template>

    <template #error="{ errors }">
      <slot
        :errors="errors"
        name="error"
      />
    </template>

    <template #hint="{ hint }">
      <slot
        :hint="hint"
        name="hint"
      />
    </template>

    <template #bottom="{ errors, hint }">
      <slot
        :errors="errors"
        :hint="hint"
        name="bottom"
      />
    </template>

    <textarea
      :id="inputId"
      ref="textarea"
      v-model="model"
      :data-test-id="props.testId"
      :aria-describedby="ariaDescribedBy"
      :class="textareaClasses"
      :disabled="props.isDisabled"
      :readonly="props.isReadonly"
      :required="props.isRequired"
      :spellcheck="props.isSpellCheckEnabled"
      :placeholder="props.placeholder ?? undefined"
      :aria-invalid="props.errors !== undefined && props.errors !== null"
      @focus="onFocus"
      @blur="onBlur"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
    />
  </InputField>
</template>

<style>
/*
  It's recommended to reset the scrollbar styles for the textarea
  element to avoid incorrect height values for large amounts of text.
*/
textarea {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

textarea::-webkit-scrollbar {
  display: none;
}
</style>
