<script setup lang="ts">
import { computed, ref } from 'vue'

import {
  type AppButtonProps,
  appButtonPropsDefaultValues,
} from '@/components/button/button.props.js'
import { buttonStyle } from '@/components/button/button.style'
import AppIcon from '@/components/icon/AppIcon.vue'
import AppSpinner from '@/components/spinner/AppSpinner.vue'

const props = withDefaults(defineProps<AppButtonProps>(), appButtonPropsDefaultValues)

const emit = defineEmits<{
  click: []
}>()

defineSlots<{
  default: () => void
  iconLeft: () => void
  iconRight: () => void
}>()

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
  isLoading: props.isLoading,
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

const loaderBoxClasses = computed<string>(() => style.loaderBox({
  isActive: isActive.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const loaderClasses = computed<string>(() => style.loader({
  isActive: isActive.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const sizeClass = computed<null | string>(() => {
  if (props.size === 'sm') {
    return 'btn-sm'
  }

  return null
})

const variantClass = computed<null | string>(() => {
  if (props.variant === 'outline') {
    return 'btn-outline'
  }

  if (props.variant === 'ghost') {
    return 'btn-ghost'
  }

  if (props.variant === 'muted') {
    return 'btn-muted'
  }

  if (props.variant === 'destructive') {
    return 'btn-destructive'
  }

  return null
})

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

function onKeyDown(event: KeyboardEvent): void {
  if (event.key === ' ' || event.key === 'Enter') {
    isActive.value = true
  }
}

function onKeyUp(event: KeyboardEvent): void {
  if (event.key === ' ' || event.key === 'Enter') {
    isActive.value = false
  }
}

function onClick(): void {
  // According to WCAG, a button should not be disabled when loading
  if (props.isLoading) {
    return
  }

  emit('click')
}
</script>

<template>
  <button
    :type="props.type"
    :disabled="props.isDisabled"
    :aria-busy="props.isLoading"
    :class="[buttonClasses, sizeClass, variantClass]"
    @focus="onFocus"
    @blur="onBlur"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @mousedown="onMouseDown"
    @mouseup="onMouseUp"
    @keydown="onKeyDown"
    @keyup="onKeyUp"
    @click="onClick"
  >
    <slot
      v-if="props.iconLeft !== null"
      name="iconLeft"
    >
      <AppIcon
        :icon="props.iconLeft"
        :class="iconLeftClasses"
      />
    </slot>

    <span class="whitespace-nowrap">
      <slot />
    </span>

    <div
      v-if="props.isLoading"
      :class="loaderBoxClasses"
    >
      <AppSpinner :class="loaderClasses" />
    </div>

    <slot
      v-if="props.iconRight !== null"
      name="iconRight"
    >
      <AppIcon
        :icon="props.iconRight"
        :class="iconRightClasses"
      />
    </slot>
  </button>
</template>
