<script setup lang="ts">
import { useTextareaAutosize } from '@vueuse/core'
import { useId } from 'reka-ui'
import { computed, ref } from 'vue'

import Collapsable from '@/components/collapsable/Collapsable.vue'
import type { TextareaProps } from '@/components/input-field/text-area/textarea.props'
import { textareaStyle } from '@/components/input-field/text-area/textarea.style'
import InputFieldError from '@/components/input-field-error/InputFieldError.vue'
import InputFieldHint from '@/components/input-field-hint/InputFieldHint.vue'
import InputFieldLabel from '@/components/input-field-label/InputFieldLabel.vue'
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
  errors: null,
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

const model = defineModel<null | string>({
  required: true,
})

const themeProviderContext = injectThemeProviderContext()

const isFocused = ref<boolean>(false)
const isMouseOver = ref<boolean>(false)

const style = textareaStyle()

const inputId = computed<string>(() => props.id ?? useId())
const isHovered = computed<boolean>(() => isMouseOver.value && !props.isDisabled)
const hasError = computed<boolean>(() => props.errors !== undefined && props.isTouched && props.errors !== null)

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

const hintClasses = computed<string>(() => style.hint({
  hasError: hasError.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const label = computed<string>(() => style.label({
  hasError: hasError.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const errorClasses = computed<string>(() => style.error())

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
  <div
    :style="props.styleConfig"
    :class="themeProviderContext.theme.value"
    class="textarea-default input-field-label-default input-field-error-default input-field-hint-default icon-default"
  >
    <slot
      v-if="props.label !== null"
      :input-id="inputId"
      name="label"
    >
      <InputFieldLabel
        :for="inputId"
        :label="props.label"
        :is-required="props.isRequired"
        :class="label"
      />
    </slot>

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

    <slot name="bottom">
      <Collapsable>
        <div v-if="hasError">
          <slot name="error">
            <InputFieldError
              :errors="props.errors"
              :class="errorClasses"
              :input-id="inputId"
            />
          </slot>
        </div>

        <div v-else-if="props.hint !== null">
          <slot name="hint">
            <InputFieldHint
              :hint="props.hint"
              :class="hintClasses"
              :input-id="inputId"
            />
          </slot>
        </div>
      </Collapsable>
    </slot>
  </div>
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
