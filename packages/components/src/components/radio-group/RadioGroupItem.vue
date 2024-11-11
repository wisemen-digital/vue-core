<script setup lang="ts" generic="TValue extends AcceptableValue">
import {
  type AcceptableValue,
  RadioGroupItem as RekaRadioGroupItem,
  useId,
} from 'reka-ui'
import {
  computed,
  ref,
  useAttrs,
} from 'vue'

import { injectRadioGroupContext } from '@/components/radio-group/radioGroup.context'
import { radioGroupStyle } from '@/components/radio-group/radioGroup.style'
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

const context = injectRadioGroupContext()

const attrs = useAttrs()

const isFocused = ref<boolean>(false)
const isMouseOver = ref<boolean>(false)

const style = radioGroupStyle()

const isDisabled = computed<boolean>(() => context.isDisabled.value || (props.item.isDisabled ?? false))
const isHovered = computed<boolean>(() => isMouseOver.value && !isDisabled.value)
const hasError = computed<boolean>(() => context.hasError.value)
const isChecked = computed<boolean>(() => context.isItemChecked(props.item))

const itemClasses = computed<string>(() => style.item({
  hasError: hasError.value,
  isChecked: isChecked.value,
  isDisabled: isDisabled.value,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
  class: attrs.class as string,
}))

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
    :value="stringValue"
    :disabled="isDisabled"
    :class="itemClasses"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @focus="onFocus"
    @blur="onBlur"
  >
    <slot />
  </RekaRadioGroupItem>
</template>
