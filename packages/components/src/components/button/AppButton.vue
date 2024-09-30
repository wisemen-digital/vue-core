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

<style lang="scss">
:root {
  --button-bg-default: #007bff;
  --button-bg-hover: #006fe6;
  --button-bg-focus: #007bff;
  --button-bg-active: #0069da;
  --button-bg-disabled: #99c2ff; /* Lighter blue for disabled background */

  --button-text-default: #ffffff;
  --button-text-hover: #ffffff;
  --button-text-focus: #ffffff;
  --button-text-active: #ffffff;
  --button-text-disabled: #fafafa; /* Pale text color for disabled state */

  --button-border-default: #007bff;
  --button-border-hover: #007bff;
  --button-border-focus: #007bff;
  --button-border-active: #007bff;
  --button-border-disabled: #99c2ff; /* Match disabled border with background */

  --button-ring-default: #007bff;
  --button-ring-hover: #007bff;
  --button-ring-focus: #007bff;
  --button-ring-active: #007bff;
  --button-ring-disabled: #99c2ff; /* Same color for disabled ring */

  --button-shadow-default: 0px 0px 0px 0px #18181b;
  --button-shadow-hover: 0px 0px 0px 0px #18181b;
  --button-shadow-focus: 0px 0px 0px 0px #18181b;
  --button-shadow-active: 0px 0px 0px 0px #18181b;
  --button-shadow-disabled: 0px 0px 0px 0px #b3d4ff; /* Lighter shadow for disabled */

  --button-border-radius-default: 6px;

  --button-font-size-default: 14px;
  --button-font-weight-default: 500;
  --button-height-default: 40px;

  --button-padding-left-default: 12px;
  --button-padding-right-default: 12px;

  /* Icon */
  --button-icon-size-default: 14px;
  --button-icon-left-margin-right-default: 10px;
  --button-icon-right-margin-left-default: 10px;

  --button-icon-color-default: #ffffff;
  --button-icon-color-disabled: #fafafa; /* Pale icon color for disabled state */
  --button-icon-color-focus: #ffffff;
  --button-icon-color-active: #ffffff;
  --button-icon-color-hover: #ffffff;

  /* Loader */
  --button-loader-size-default: 18px;
  --button-loader-color-default: #ffffff;
  --button-loader-color-disabled: #fafafa; /* Pale loader color for disabled */
  --button-loader-color-focus: #ffffff;
  --button-loader-color-active: #ffffff;
  --button-loader-color-hover: #ffffff;
}

.btn-outline {
  --button-bg-default: transparent;
  --button-bg-hover: rgb(250, 250, 253);
  --button-bg-focus: rgb(250, 250, 253);
  --button-bg-active: rgb(246, 246, 250);
  --button-bg-disabled: transparent;

  --button-text-default: #007bff;
  --button-text-hover: #006fe6;
  --button-text-focus: #006fe6;
  --button-text-active: #0069da;
  --button-text-disabled: #99c2ff;

  --button-border-default: #007bff;
  --button-border-hover: #006fe6;
  --button-border-focus: #006fe6;
  --button-border-active: #0069da;
  --button-border-disabled: #99c2ff;

  --button-ring-default: #007bff;
  --button-ring-hover: #007bff;
  --button-ring-focus: #007bff;
  --button-ring-active: #007bff;
  --button-ring-disabled: #007bff;

  // Icon
  --button-icon-color-default: #007bff;
  --button-icon-color-hover: #006fe6;
  --button-icon-color-focus: #006fe6;
  --button-icon-color-active: #0069da;
  --button-icon-color-disabled: #99c2ff;

  // Loader
  --button-loader-color-default: #007bff;
  --button-loader-color-hover: #007bff;
  --button-loader-color-focus: #007bff;
  --button-loader-color-active: #007bff;
  --button-loader-color-disabled: #007bff;
  --button-loader-color-disabled: #007bff;
}

.btn-ghost {
  --button-bg-default: transparent;
  --button-bg-hover: #eeeef1;
  --button-bg-focus: #efefef;
  --button-bg-active: #e6e6e6;
  --button-bg-disabled: transparent;

  --button-text-default: #18181b;
  --button-text-hover: #18181b;
  --button-text-focus: #18181b;
  --button-text-active: #18181b;
  --button-text-disabled: rgb(164, 164, 167);

  --button-border-default: transparent;
  --button-border-hover: #f4f4f5;
  --button-border-focus: #f4f4f5;
  --button-border-active: #f4f4f5;
  --button-border-disabled: transparent;

  --button-ring-default: #18181b;
  --button-ring-hover: #18181b;
  --button-ring-focus: #18181b;
  --button-ring-active: #18181b;
  --button-ring-disabled: #18181b;

  // Icon
  --button-icon-color-default: #18181b;
  --button-icon-color-hover: #18181b;
  --button-icon-color-focus: #18181b;
  --button-icon-color-active: #18181b;
  --button-icon-color-disabled: rgb(164, 164, 167);
}

.btn-muted {
  --button-bg-default: #f4f4f5;
  --button-bg-hover: #eeeef1;
  --button-bg-focus: #efefef;
  --button-bg-active: #e6e6e6;
  --button-bg-disabled: rgb(244, 244, 245);

  --button-text-default: #18181b;
  --button-text-hover: #18181b;
  --button-text-focus: #18181b;
  --button-text-active: #18181b;
  --button-text-disabled: rgb(164, 164, 167);

  --button-border-default: #f4f4f5;
  --button-border-hover: #f4f4f5;
  --button-border-focus: #f4f4f5;
  --button-border-active: #f4f4f5;
  --button-border-disabled: #f4f4f5;

  --button-ring-default: #18181b;
  --button-ring-hover: #18181b;
  --button-ring-focus: #18181b;
  --button-ring-active: #18181b;
  --button-ring-disabled: #18181b;

  // Icon
  --button-icon-color-default: #18181b;
  --button-icon-color-hover: #18181b;
  --button-icon-color-focus: #18181b;
  --button-icon-color-active: #18181b;
  --button-icon-color-disabled: rgb(164, 164, 167);
}

.btn-destructive {
  --button-bg-default: #ff0202;
  --button-bg-hover: #f30000;
  --button-bg-focus: #f30000;
  --button-bg-active: #e50000;
  --button-bg-disabled: #ff9898;

  --button-text-default: #ffffff;
  --button-text-hover: #ffffff;
  --button-text-focus: #ffffff;
  --button-text-active: #ffffff;
  --button-text-disabled: #ffffff;

  --button-border-default: #ff0202;
  --button-border-hover: #f30000;
  --button-border-focus: #f30000;
  --button-border-active: #f30000;
  --button-border-disabled: #ff9898;

  --button-ring-default: #ff0202;
  --button-ring-hover: #ff0202;
  --button-ring-focus: #ff0202;
  --button-ring-active: #ff0202;
  --button-ring-disabled: #ff0202;

  // Icon
  --button-icon-color-default: #ffffff;
  --button-icon-color-hover: #ffffff;
  --button-icon-color-focus: #ffffff;
  --button-icon-color-active: #ffffff;
  --button-icon-color-disabled: #ffffff;

  // Loader
  --button-loader-color-default: #ffffff;
  --button-loader-color-hover: #ffffff;
  --button-loader-color-focus: #ffffff;
  --button-loader-color-active: #ffffff;
  --button-loader-color-disabled: #ffffff;
}

.btn-sm {
  --button-height-default: 32px;
  --button-font-size-default: 12px;
  --button-padding-left-default: 8px;
  --button-padding-right-default: 8px;

  --button-font-weight-default: 500;

  // Loader
  --button-loader-size-default: 14px;
}
</style>
