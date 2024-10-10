<script setup lang="ts">
import { useTextareaAutosize } from '@vueuse/core'
import { useId } from 'reka-ui'
import { computed, ref } from 'vue'

import {
  type AppTextareaProps,
  appTextareaPropsDefaultValues,
} from '@/components/input-field/text-area/textarea.props.js'
import { textareaStyle } from '@/components/input-field/text-area/textarea.style.js'

const props = withDefaults(defineProps<AppTextareaProps>(), appTextareaPropsDefaultValues)

const emit = defineEmits<{
  blur: []
  focus: []
}>()

const model = defineModel<null | string>({
  required: true,
})

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
    @focus="onFocus"
    @blur="onBlur"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  />
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
