<script setup lang="ts">
import {
  computed,
  onMounted,
  ref,
} from 'vue'
import {
  type RouteLocationNamedRaw,
  RouterLink,
} from 'vue-router'

import type { ButtonStyleProps } from '@/components/button/button.style'
import { button, buttonIcon } from '@/components/button/button.style'
import AppIcon from '@/components/icon/AppIcon.vue'
import AppKeyboardShortcut from '@/components/keyboard/AppKeyboardShortcut.vue'
import type { KeyboardKeyStyleProps } from '@/components/keyboard/keyboardKey.style'
import AppLoader from '@/components/loader/AppLoader.vue'
import { useKeyboardShortcut } from '@/composables/keyboardShortcut.composable'
import type { Icon } from '@/icons/icons'
import type { KeyboardShortcutConfig } from '@/types/keyboardShortcut.type'

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
  to: RouteLocationNamedRaw
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

const buttonClasses = computed<string>(() =>
  button({
    size: props.size,
    variant: props.variant,
  }))

const buttonIconClasses = computed<string>(() =>
  buttonIcon({
    size: props.size,
  }))

const keyboardKeyVariant = computed<KeyboardKeyStyleProps['variant']>(() => {
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
      :class="[{
        'opacity-0': props.isLoading,
      }, buttonIconClasses]"
      class="mr-3"
    />

    <span
      :class="{
        'opacity-0': props.isLoading,
      }"
    >
      <slot />
    </span>

    <div
      v-if="props.isLoading"
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <AppLoader
        class="size-4"
      />
    </div>

    <AppIcon
      v-if="props.iconRight !== null && props.iconRight !== undefined"
      :icon="props.iconRight"
      :class="[{
        'opacity-0': props.isLoading,
      }, buttonIconClasses]"
      class="ml-3"
    />

    <AppKeyboardShortcut
      v-if="props.keyboardShortcut !== null"
      :keys="props.keyboardShortcut.keys"
      :variant="keyboardKeyVariant"
      class="ml-3 mt-px"
    />
  </RouterLink>
</template>
