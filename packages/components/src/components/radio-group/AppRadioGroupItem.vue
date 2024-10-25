<script setup lang="ts" generic="TValue extends AcceptableValue">
import {
  type AcceptableValue,
  RadioGroupItem as RekaRadioGroupItem,
  useId,
} from 'reka-ui'
import { computed, ref } from 'vue'

import { injectRadioGroupContext } from '@/components/radio-group/radioGroup.context'
import { provideRadioGroupItemContext } from '@/components/radio-group/radioGroupItem.context'
import type { RadioGroupItem } from '@/types/radioGroup.type'

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

const context = injectRadioGroupContext()

const isDisabled = computed<boolean>(() => context.isDisabled.value || (props.item.isDisabled ?? false))
const isHovered = computed<boolean>(() => isMouseOver.value && !isDisabled.value)
const isChecked = computed<boolean>(() => context.isItemChecked(props.item))
const hasError = computed<boolean>(() => context.hasError.value)

const stringValue = computed<string>(() => JSON.stringify(props.item.value))

const inputId = computed<string>(() => props.id ?? useId())

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

provideRadioGroupItemContext({
  isChecked,
  isDisabled,
  isFocused: computed<boolean>(() => isFocused.value),
  isHovered,
})
</script>

<template>
  <RekaRadioGroupItem
    :id="inputId"
    :aria-describedby="`${inputId}-hint ${inputId}-error`"
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
