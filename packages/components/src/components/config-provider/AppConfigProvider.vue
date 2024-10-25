<script setup lang="ts">
import { computed } from 'vue'

import { provideConfigContext } from '@/components/config-provider/config.context'

const props = defineProps<{
  locale: string
}>()

provideConfigContext({
  locale: computed<string>(() => props.locale),
})
</script>

<template>
  <slot />
</template>
