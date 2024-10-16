<script setup lang="ts">
import { computed, ref } from 'vue'

import {
  type AppButtonProps,
  appButtonPropsDefaultValues,
} from '@/components/button/button/button.props.js'
import { buttonStyle } from '@/components/button/button/button.style'
import AppIcon from '@/components/icon/AppIcon.vue'
import AppSpinner from '@/components/spinner/AppSpinner.vue'

const props = withDefaults(defineProps<AppButtonProps>(), appButtonPropsDefaultValues)

const emit = defineEmits<{
  click: []
}>()

defineSlots<{
  'default': () => void
  'icon-left': () => void
  'icon-right': () => void
  'left': () => void
  'loader': () => void
  'right': () => void
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

  if (props.size === 'lg') {
    return 'btn-lg'
  }

  if (props.size === 'xl') {
    return 'btn-xl'
  }

  if (props.size === '2xl') {
    return 'btn-2xl'
  }

  return null
})

const variantClass = computed<null | string>(() => {
  if (props.variant === 'secondary') {
    return 'btn-secondary-gray'
  }

  if (props.variant === 'secondary-color') {
    return 'btn-secondary-color'
  }

  if (props.variant === 'tertiary') {
    return 'btn-tertiary-gray'
  }

  if (props.variant === 'tertiary-color') {
    return 'btn-tertiary-color'
  }

  if (props.variant === 'destructive-primary') {
    return 'btn-destructive-primary'
  }

  if (props.variant === 'destructive-secondary') {
    return 'btn-destructive-secondary'
  }

  if (props.variant === 'destructive-tertiary') {
    return 'btn-destructive-tertiary'
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
  if (props.isLoading) {
    return
  }

  emit('click')
}
</script>

<template>
  <button
    :style="props.styleConfig"
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
    <slot name="left" />

    <slot
      v-if="props.iconLeft !== null"
      name="icon-left"
    >
      <AppIcon
        :icon="props.iconLeft"
        :class="iconLeftClasses"
      />
    </slot>

    <span class="whitespace-nowrap">
      <slot />
    </span>

    <Transition
      enter-from-class="opacity-0"
      leave-active-class="duration-150"
      enter-active-class="duration-150"
      leave-to-class="opacity-0"
    >
      <div
        v-if="props.isLoading"
        :class="loaderBoxClasses"
      >
        <slot name="loader">
          <AppSpinner :class="loaderClasses" />
        </slot>
      </div>
    </Transition>

    <slot
      v-if="props.iconRight !== null"
      name="icon-right"
    >
      <AppIcon
        :icon="props.iconRight"
        :class="iconRightClasses"
      />
    </slot>

    <slot name="right" />
  </button>
</template>
