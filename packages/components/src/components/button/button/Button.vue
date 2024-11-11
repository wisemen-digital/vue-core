<script setup lang="ts">
import { computed, ref } from 'vue'

import type { ButtonProps } from '@/components/button/button/button.props'
import { buttonStyle } from '@/components/button/button/button.style'
import Icon from '@/components/icon/Icon.vue'
import Spinner from '@/components/spinner/Spinner.vue'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'

const props = withDefaults(defineProps<ButtonProps>(), {
  testId: null,
  isDisabled: false,
  isLoading: false,
  iconLeft: null,
  iconRight: null,
  size: 'default',
  styleConfig: null,
  type: 'button',
  variant: 'default',
})

const emit = defineEmits<{
  /**
   * Emitted when the button is clicked
   */
  click: [event: Event]
}>()

defineSlots<{
  'default': () => void
  'icon-left': () => void
  'icon-right': () => void
  'loader': () => void
}>()

const themeContext = injectThemeProviderContext()

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
    :style="props.styleConfig"
    :type="props.type"
    :disabled="props.isDisabled"
    :aria-busy="props.isLoading"
    :class="[buttonClasses, sizeClass, variantClass, themeContext.theme.value]"
    :data-test-id="props.testId"
    class="button-variant-default icon-variant-default"
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
      name="icon-left"
    >
      <Icon
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
          <Spinner :class="loaderClasses" />
        </slot>
      </div>
    </Transition>

    <slot
      v-if="props.iconRight !== null"
      name="icon-right"
    >
      <Icon
        :icon="props.iconRight"
        :class="iconRightClasses"
      />
    </slot>
  </button>
</template>
