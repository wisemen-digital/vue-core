<script setup lang="ts">
import { computed } from 'vue'

import { useButton } from '@/components/button/button/button.composable'
import type { ButtonProps } from '@/components/button/button/button.props'
import Icon from '@/components/icon/Icon.vue'
import Spinner from '@/components/spinner/Spinner.vue'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import { ThemeUtil } from '@/utils/theme.util'

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
   * Event handler for the click event
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

const {
  baseClasses,
  iconLeftClasses,
  iconRightClasses,
  loaderBoxClasses,
  loaderClasses,
  onBlur,
  onClick,
  onFocus,
  onKeyDown,
  onKeyUp,
  onMouseDown,
  onMouseEnter,
  onMouseLeave,
  onMouseUp,
} = useButton({
  isDisabled: computed<boolean>(() => props.isDisabled),
  isLoading: computed<boolean>(() => props.isLoading),
  size: computed<ButtonProps['size']>(() => props.size),
  variant: computed<ButtonProps['variant']>(() => props.variant),
  onClick: (event: Event) => {
    emit('click', event)
  },
})
</script>

<template>
  <button
    :style="props.styleConfig"
    :type="props.type"
    :disabled="props.isDisabled"
    :aria-busy="props.isLoading"
    :data-test-id="props.testId"
    :class="[
      baseClasses,
      ThemeUtil.getClasses(themeContext.theme.value, themeContext.isDarkModeEnabled.value),
    ]"
    class="button-default"
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
    <div
      :class="{
        'opacity-0': props.isLoading,
      }"
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
    </div>

    <span
      :class="{
        'opacity-0': props.isLoading,
      }"
      class="whitespace-nowrap"
    >
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

    <div
      :class="{
        'opacity-0': props.isLoading,
      }"
    >
      <slot
        v-if="props.iconRight !== null"
        name="icon-right"
      >
        <Icon
          :icon="props.iconRight"
          :class="iconRightClasses"
        />
      </slot>
    </div>
  </button>
</template>
