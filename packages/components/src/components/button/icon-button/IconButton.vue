<script setup lang="ts">
import { computed, ref } from 'vue'

import { buttonStyle } from '@/components/button/button/button.style'
import type { IconButtonProps } from '@/components/button/icon-button/iconButton.props'
import { iconButtonStyle } from '@/components/button/icon-button/iconButton.style'
import Icon from '@/components/icon/Icon.vue'
import Spinner from '@/components/spinner/Spinner.vue'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'

const props = withDefaults(defineProps<IconButtonProps>(), {
  testId: null,
  isDisabled: false,
  isLoading: false,
  size: 'default',
  styleConfig: null,
  type: 'button',
  variant: 'default',
})

const emit = defineEmits<{
  click: [event: Event]
}>()

const themeProviderContext = injectThemeProviderContext()

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
    return 'icon-btn-sm'
  }

  if (props.size === 'lg') {
    return 'icon-btn-lg'
  }

  if (props.size === 'xl') {
    return 'icon-btn-xl'
  }

  if (props.size === '2xl') {
    return 'icon-btn-2xl'
  }

  return null
})

const variantClass = computed<string>(() => {
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

  return 'btn-primary'
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

function onClick(event: Event): void {
  if (props.isLoading) {
    return
  }

  emit('click', event)
}
</script>

<template>
  <button
    :data-test-id="props.testId"
    :style="props.styleConfig"
    :type="props.type"
    :disabled="props.isDisabled"
    :aria-busy="props.isLoading"
    :aria-label="props.label"
    :class="[buttonClasses, sizeClass, variantClass, themeProviderContext.theme.value]"
    class="button-variant-default icon-button-variant-default icon-variant-default"
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
    <Icon
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
        <Spinner :class="loaderClasses" />
      </div>
    </Transition>
  </button>
</template>
