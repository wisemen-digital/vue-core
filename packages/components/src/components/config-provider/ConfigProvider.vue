<script setup lang="ts">
import { computed } from 'vue'

import { provideConfigContext } from '@/components/config-provider/config.context'

const props = defineProps<{
  areKeyboardShortcutHintsHidden?: boolean
  googleMapsApiKey?: string
  locale: string
  pagination?: {
    limit?: number
  }
  teleportTargetSelector?: string
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
