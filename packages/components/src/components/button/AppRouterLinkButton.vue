<script setup lang="ts">
import {
  computed,
  onMounted,
  ref,
} from 'vue'
import { RouterLink } from 'vue-router'

import {
  type ButtonStyleProps,
  useButtonStyle,
} from '@/components/button/button.style'
import AppIcon from '@/components/icon/AppIcon.vue'
import AppKeyboardShortcut from '@/components/keyboard/AppKeyboardShortcut.vue'
import type { KeyboardStyleProps } from '@/components/keyboard/keyboardKey.style'
import AppLoader from '@/components/loader/AppLoader.vue'
import { useKeyboardShortcut } from '@/composables/keyboardShortcut.composable'
import type { Icon } from '@/icons/icons'
import type { KeyboardShortcutConfig } from '@/types/keyboardShortcut.type'
import type {
  RouteLocationTyped,
  Routes,
} from '@/types/routes.type.js'

interface Props {
  /**
   * The icon to display on the left side of the button.
   * @default null
   */
  iconLeft?: Icon | null
  /**
   * The icon to display on the right side of the button.
   * @default null
   */
  iconRight?: Icon | null
  /**
   * The keyboard shortcut keys which trigger the button.
   * @default null
   */
  keyboardShortcut?: KeyboardShortcutConfig | null
  /**
   * The size of the button.
   * @default 'default'
   */
  size?: ButtonStyleProps['size']
  /**
   * The route to link to.
   */
  to: RouteLocationTyped<keyof Routes>
  /**
   * The variant of the button.
   * @default 'default'
   */
  variant?: ButtonStyleProps['variant']
}

const props = withDefaults(defineProps<Props>(), {
  // TODO: find out why defaulting these to `null` breaks the `Icon` prop type when using `declare module`.
  // iconLeft: undefined,
  isLoading: false,
  // iconRight: undefined,
  keyboardShortcut: null,
  size: 'default',
  type: 'button',
  variant: 'default',
})

const routerLinkRef = ref<InstanceType<any> | null>(null)
const buttonStyle = useButtonStyle()
const buttonClasses = computed<string>(() =>
  buttonStyle.button({
    size: props.size,
    variant: props.variant,
  }))

const buttonLeftIconClasses = computed<string>(() =>
  buttonStyle.buttonLeftIcon({
    isLoading: props.isLoading,
    size: props.size,
  }))

const buttonRightIconClasses = computed<string>(() =>
  buttonStyle.buttonRightIcon({
    isLoading: props.isLoading,
    size: props.size,
  }))

const buttonContentClasses = computed<string>(() =>
  buttonStyle.buttonContent({
    isLoading: props.isLoading,
  }))

const keyboardShortcutClasses = computed<string>(() =>
  buttonStyle.keyboardShortcut({
    isLoading: props.isLoading,
  }))

const buttonLoaderClasses = computed<string>(() => buttonStyle.loader())
const buttonLoaderContainerClasses = computed<string>(() => buttonStyle.loaderContainer())

const keyboardKeyVariant = computed<KeyboardStyleProps['variant']>(() => {
  if (props.variant === 'default' || props.variant === 'destructive') {
    return 'secondary'
  }

  if (props.variant === 'secondary') {
    return 'bordered'
  }

  return 'default'
})

function createKeyboardShortcut(): void {
  if (props.keyboardShortcut === null) {
    throw new Error('Keyboard shortcut config is required to create a keyboard shortcut')
  }

  useKeyboardShortcut({
    keys: props.keyboardShortcut.keys,
    onTrigger: () => {
      if (routerLinkRef.value !== null) {
        routerLinkRef.value.$el.click()
      }
    },
  })
}

onMounted(() => {
  if (props.keyboardShortcut !== null) {
    createKeyboardShortcut()
  }
})
</script>

<template>
  <RouterLink
    ref="routerLinkRef"
    :to="props.to"
    :class="buttonClasses"
  >
    <AppIcon
      v-if="props.iconLeft !== null && props.iconLeft !== undefined"
      :icon="props.iconLeft"
      :class="buttonLeftIconClasses"
    />

    <span :class="buttonContentClasses">
      <slot />
    </span>

    <div
      v-if="props.isLoading"
      :class="buttonLoaderContainerClasses"
    >
      <AppLoader
        :class="buttonLoaderClasses"
      />
    </div>

    <AppIcon
      v-if="props.iconRight !== null && props.iconRight !== undefined"
      :icon="props.iconRight"
      :class="buttonRightIconClasses"
    />

    <AppKeyboardShortcut
      v-if="props.keyboardShortcut !== null"
      :keys="props.keyboardShortcut.keys"
      :variant="keyboardKeyVariant"
      :class="keyboardShortcutClasses"
    />
  </RouterLink>
</template>
