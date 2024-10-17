<script setup lang="ts" generic="TValue extends AcceptableValue">
import {
  type AcceptableValue,
  RadioGroupItem as RekaRadioGroupItem,
  useId,
} from 'reka-ui'
import { computed, ref } from 'vue'

import type { RadioGroupItem } from '@/types/radioGroup.type'

import { useRadioGroupContext } from './radioGroup.context'

const props = defineProps<{
  id?: string
  item: RadioGroupItem<TValue>
}>()

const emit = defineEmits<{
  blur: []
  focus: []
}>()

const isFocused = ref<boolean>(false)
const isMouseOver = ref<boolean>(false)

const context = useRadioGroupContext<TValue>()

const isDisabled = computed<boolean>(() => context.isDisabled.value || (props.item.isDisabled ?? false))
const isHovered = computed<boolean>(() => isMouseOver.value && !isDisabled.value)
const isChecked = computed<boolean>(() => context.isItemChecked(props.item))
const hasError = computed<boolean>(() => context.hasError.value)

const stringValue = computed<string>(() => JSON.stringify(props.item.value))

const inputId = computed<string>(() => useId())

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
  <RekaRadioGroupItem
    :id="inputId"
    :value="stringValue"
    :disabled="isDisabled"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @focus="onFocus"
    @blur="onBlur"
  >
    <slot
      :is-checked="isChecked"
      :is-disabled="isDisabled"
      :is-hovered="isHovered"
      :has-error="hasError"
      :is-focused="isFocused"
    />
  </RekaRadioGroupItem>
</template>
