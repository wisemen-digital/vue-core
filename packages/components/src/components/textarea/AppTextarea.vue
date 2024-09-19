<script setup lang="ts">
import { computed } from 'vue'

import {
  type TextareaStyleProps,
  useTextareaStyle,
} from '@/components/textarea/textarea.style'

const props = withDefaults(defineProps<{
  /**
   * The id of the input.
   * @default null
   */
  id?: null | string
  /**
   * The testId label.
   */
  testId?: string
  /**
   * Whether the input is disabled.
   * @default false
   */
  isDisabled?: boolean
  /**
   * Whether the input is invalid.
   * @default false
   */
  isInvalid?: boolean
  /**
   * The height class of the textarea.
   * @default null
   */
  heightClass?: null | string
  /**
   * The placeholder of the input.
   * @default null
   */
  placeholder?: null | string
  /**
   * The resize property of the textarea.
   * @default 'none'
   */
  resize?: TextareaStyleProps['resize']
}>(), {
  id: null,
  isDisabled: false,
  isInvalid: false,
  heightClass: null,
  placeholder: null,
  resize: 'none',
})

const emit = defineEmits<{
  blur: []
  focus: []
}>()

const model = defineModel<null | string>({
  required: true,
})

function onBlur(): void {
  emit('blur')
}

function onFocus(): void {
  emit('focus')
}

const textareaStyle = useTextareaStyle()

const textareaClasses = computed<string>(() => textareaStyle.textarea({
  isDisabled: props.isDisabled,
  isInvalid: props.isInvalid,
  class: props.heightClass,
  resize: props.resize,
}))
</script>

<template>
  <textarea
    :id="props.id ?? undefined"
    v-model="model"
    :aria-invalid="props.isInvalid"
    :disabled="props.isDisabled"
    :placeholder="props.placeholder ?? undefined"
    :class="textareaClasses"
    :style="{
      transitionProperty: 'border-color, background-color, box-shadow',
    }"
    :data-test-id="props.testId"
    @blur="onBlur"
    @focus="onFocus"
  />
</template>
