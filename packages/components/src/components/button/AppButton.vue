<script setup lang="ts">
import { computed, ref } from 'vue'

import {
  type AppButtonProps,
  appButtonPropsDefaultValues,
} from '@/components/button/button.props.js'
import { buttonStyle } from '@/components/button/button.style'
import AppIcon from '@/components/icon/AppIcon.vue'

const props = withDefaults(defineProps<AppButtonProps>(), appButtonPropsDefaultValues)

const style = buttonStyle()

const isFocused = ref<boolean>(false)
const isMouseOver = ref<boolean>(false)
const isActive = ref<boolean>(false)

const isHovered = computed<boolean>(() => isMouseOver.value && !props.isDisabled)

const buttonClasses = computed<string>(() => style.button({
  isActive: isActive.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const iconLeftClasses = computed<string>(() => style.iconLeft({
  isActive: isActive.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const iconRightClasses = computed<string>(() => style.iconRight({
  isActive: isActive.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

function onFocus(): void {
  isFocused.value = true
}

function onBlur(): void {
  isFocused.value = false
}

function onMouseEnter(): void {
  isMouseOver.value = true
}

function onMouseLeave(): void {
  isMouseOver.value = false
}

function onMouseDown(): void {
  isActive.value = true
}

function onMouseUp(): void {
  isActive.value = false
}
</script>

<template>
  <button
    :type="props.type"
    :disabled="props.isDisabled"
    :class="buttonClasses"
    @focus="onFocus"
    @blur="onBlur"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @mousedown="onMouseDown"
    @mouseup="onMouseUp"
  >
    <AppIcon
      v-if="props.iconLeft !== null"
      :icon="props.iconLeft"
      :class="iconLeftClasses"
    />

    <span class="whitespace-nowrap">
      <slot />
    </span>

    <AppIcon
      v-if="props.iconRight !== null"
      :icon="props.iconRight"
      :class="iconRightClasses"
    />
  </button>
</template>
