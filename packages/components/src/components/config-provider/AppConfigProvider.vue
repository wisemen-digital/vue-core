<script setup lang="ts">
import { computed } from 'vue'

import { provideConfigContext } from '@/components/config-provider/config.context'

const props = defineProps<{
  locale: string
  table?: {
    defaultLimit: number
  }
}>()

provideConfigContext({
  locale: computed<string>(() => props.locale),
  table: {
    defaultLimit: props.table?.defaultLimit,
  },
})
</script>

<template>
  <slot />
</template>
