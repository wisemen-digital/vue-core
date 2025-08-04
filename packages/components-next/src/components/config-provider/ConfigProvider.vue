<script setup lang="ts">
import { computed } from 'vue'

import { useProvideConfigContext } from '@/components/config-provider/config.context'
import type { ToastPosition } from '@/components/toast/toast.composable'

const props = defineProps<{
  /**
   * Whether the keyboard shortcut hints should be hidden.
   * @default false
   */
  areKeyboardShortcutHintsHidden?: boolean
  /**
   * Whether to automatically close toast notifications after a certain time.
   * @default false
   */
  autoCloseToast?: boolean
  /**
   * The Google Maps API key (used for example to validate addresses using the AddressAutocomplete component).
   * @default null
   */
  googleMapsApiKey?: string
  /**
   * The locale to use for localization.
   */
  locale: string
  /**
   * Define the default pagination limit used in the usePagination composable.
   */
  pagination?: {
    limit?: number
  }
  /**
   * The selector for the teleport target.
   * @default 'body'
   */
  teleportTargetSelector?: string
  /**
   * The position of the toast notifications.
   * @default 'bottom-right'
   */
  toastPosition?: ToastPosition
}>()

defineSlots<{
  /**
   * Wrap your application in this component to provide configuration to all components.
   */
  default: () => void
}>()

useProvideConfigContext({
  areKeyboardShortcutHintsHidden: computed<boolean>(() => props.areKeyboardShortcutHintsHidden ?? false),
  autoCloseToast: computed<boolean>(() => props.autoCloseToast ?? false),
  googleMapsApiKey: props.googleMapsApiKey ?? null,
  locale: computed<string>(() => props.locale),
  pagination: {
    limit: props.pagination?.limit,
  },
  teleportTargetSelector: props.teleportTargetSelector ?? 'body',
  toastPosition: props.toastPosition,
})
</script>

<template>
  <slot />
</template>
