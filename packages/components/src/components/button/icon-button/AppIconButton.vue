<script setup lang="ts">
import { computed, ref } from 'vue'

import { buttonStyle } from '@/components/button/button/button.style'
import {
  type AppIconButtonProps,
  appIconButtonPropsDefaultValues,
} from '@/components/button/icon-button/iconButton.props.js'
import { iconButtonStyle } from '@/components/button/icon-button/iconButton.style.js'
import AppIcon from '@/components/icon/AppIcon.vue'
import AppSpinner from '@/components/spinner/AppSpinner.vue'

const props = withDefaults(defineProps<AppIconButtonProps>(), appIconButtonPropsDefaultValues)

const emit = defineEmits<{
  click: []
}>()

const btnStyle = buttonStyle()
const iconBtnStyle = iconButtonStyle()

const isFocused = ref<boolean>(false)
const isMouseOver = ref<boolean>(false)
const isActive = ref<boolean>(false)

const isHovered = computed<boolean>(() => isMouseOver.value && !props.isDisabled)

const buttonClasses = computed<string>(() => iconBtnStyle.button({
  isActive: isActive.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
  isLoading: props.isLoading,
}))

const iconClasses = computed<string>(() => iconBtnStyle.icon({
  isActive: isActive.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const loaderBoxClasses = computed<string>(() => btnStyle.loaderBox({
  isActive: isActive.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const loaderClasses = computed<string>(() => btnStyle.loader({
  isActive: isActive.value,
  isDisabled: props.isDisabled,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
}))

const sizeClass = computed<null | string>(() => {
  if (props.size === 'sm') {
    return 'btn-sm icon-btn-sm'
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
    :aria-label="props.label"
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
    <AppIcon
      :icon="props.icon"
      :class="iconClasses"
    />

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
        <AppSpinner :class="loaderClasses" />
      </div>
    </Transition>
  </button>
</template>
