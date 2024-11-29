<script setup lang="ts">
import { computed, useAttrs } from 'vue'

import type { ButtonProps } from '@/components/button/button/button.props'
import { useIconButton } from '@/components/button/icon-button/iconButton.composable'
import type { IconButtonProps } from '@/components/button/icon-button/iconButton.props'
import Icon from '@/components/icon/Icon.vue'
import Spinner from '@/components/spinner/Spinner.vue'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import Tooltip from '@/components/tooltip/Tooltip.vue'

const props = withDefaults(defineProps<IconButtonProps>(), {
  testId: null,
  isDisabled: false,
  isLoading: false,
  isTooltipHidden: false,
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

const themeProviderContext = injectThemeProviderContext()

const attrs = useAttrs()

const {
  baseClasses,
  iconClasses,
  loaderBoxClasses,
  loaderClasses,
  tooltipClasses,
  onBlur,
  onClick,
  onFocus,
  onKeyDown,
  onKeyUp,
  onMouseDown,
  onMouseEnter,
  onMouseLeave,
  onMouseUp,
} = useIconButton({
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
  <Tooltip
    :is-arrow-hidden="true"
    :is-hidden="props.isTooltipHidden || props.isDisabled || props.isLoading"
    :popover-offset-in-px="4"
    popover-side="top"
  >
    <template #trigger>
      <button
        v-bind="attrs"
        :data-test-id="props.testId"
        :style="props.styleConfig"
        :type="props.type"
        :disabled="props.isDisabled"
        :aria-busy="props.isLoading"
        :aria-label="props.label"
        :class="[baseClasses, themeProviderContext.theme.value]"
        class="icon-button-default"
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
          :class="[
            iconClasses,
            {
              'opacity-0': props.isLoading,
            },
          ]"
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

    <template #content>
      <div
        :class="[tooltipClasses]"
        class="icon-button-default"
      >
        <span>
          {{ props.label }}
        </span>
      </div>
    </template>
  </Tooltip>
</template>
