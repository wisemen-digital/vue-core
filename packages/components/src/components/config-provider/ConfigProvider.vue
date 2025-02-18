<script setup lang="ts">
import { computed } from 'vue'

import { provideConfigContext } from '@/components/config-provider/config.context'

const props = defineProps<{
  /**
   * Whether the keyboard shortcut hints should be hidden.
   * @default false
   */
  areKeyboardShortcutHintsHidden?: boolean
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
}>()

defineSlots<{
  /**
   * Wrap your application in this component to provide configuration to all components.
   */
  default: () => void
}>()

provideConfigContext({
  areKeyboardShortcutHintsHidden: computed<boolean>(() => props.areKeyboardShortcutHintsHidden ?? false),
  googleMapsApiKey: props.googleMapsApiKey ?? null,
  locale: computed<string>(() => props.locale),
  pagination: {
    limit: props.pagination?.limit,
  },
  teleportTargetSelector: props.teleportTargetSelector ?? 'body',
})
</script>

<template>
  <slot />
</template>
