<script setup lang="ts">
import { useTextareaAutosize } from '@vueuse/core'
import { useId } from 'reka-ui'
import { computed, ref } from 'vue'

import AppCollapsable from '@/components/collapsable/AppCollapsable.vue'
import {
  type AppTextareaProps,
  appTextareaPropsDefaultValues,
} from '@/components/input-field/text-area/textarea.props.js'
import { textareaStyle } from '@/components/input-field/text-area/textarea.style.js'
import AppInputFieldError from '@/components/input-field-error/AppInputFieldError.vue'
import AppInputFieldHint from '@/components/input-field-hint/AppInputFieldHint.vue'
import AppInputFieldLabel from '@/components/input-field-label/AppInputFieldLabel.vue'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'

const props = withDefaults(defineProps<AppTextareaProps>(), appTextareaPropsDefaultValues)

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
    class="text-field-variant-default"
  >
    <slot
      v-if="props.label !== null"
      :input-id="inputId"
      name="label"
    >
      <AppInputFieldLabel
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
      <AppCollapsable>
        <div v-if="hasError">
          <slot name="error">
            <AppInputFieldError
              :errors="props.errors"
              :class="errorClasses"
              :input-id="inputId"
            />
          </slot>
        </div>

        <div v-else-if="props.hint !== null">
          <slot name="hint">
            <AppInputFieldHint
              :hint="props.hint"
              :class="hintClasses"
              :input-id="inputId"
            />
          </slot>
        </div>
      </AppCollapsable>
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
