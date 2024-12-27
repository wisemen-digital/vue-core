<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

import { useButton } from '@/components/button/button/button.composable'
import type { ButtonProps } from '@/components/button/button/button.props'
import type { RouterLinkButtonProps } from '@/components/button/router-link-button/routerLinkButton.props'
import Icon from '@/components/icon/Icon.vue'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import { ThemeUtil } from '@/utils/theme.util'

const props = withDefaults(defineProps<RouterLinkButtonProps>(), {
  dataTestId: null,
  iconLeft: null,
  iconRight: null,
  size: 'default',
  styleConfig: null,
  variant: 'default',
})

defineSlots<{
  'default': () => void
  'icon-left': () => void
  'icon-right': () => void
  'left': () => void
  'loader': () => void
  'right': () => void
}>()

const themeProviderContext = injectThemeProviderContext()

const {
  baseClasses,
  iconLeftClasses,
  iconRightClasses,
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
  isDisabled: computed<boolean>(() => false),
  isLoading: computed<boolean>(() => false),
  size: computed<ButtonProps['size']>(() => props.size),
  variant: computed<ButtonProps['variant']>(() => props.variant),
})
</script>

<template>
  <RouterLink
    :to="props.to"
    :style="props.styleConfig"
    :data-test-id="props.dataTestId"
    :class="[
      baseClasses,
      ThemeUtil.getClasses(themeProviderContext.theme.value, themeProviderContext.isDarkModeEnabled.value),
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
    <slot name="left" />

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

    <slot
      v-if="props.iconRight !== null"
      name="icon-right"
    >
      <Icon
        :icon="props.iconRight"
        :class="iconRightClasses"
      />
    </slot>

    <slot name="right" />
  </RouterLink>
</template>
