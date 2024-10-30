<script setup lang="ts">
import { computed } from 'vue'

import { provideConfigContext } from '@/components/config-provider/config.context'

const props = defineProps<{
  locale: string
  table: {
    pagination: {
      limit: number
      offset: number
    }
  }
}>()

provideConfigContext({
  locale: computed<string>(() => props.locale),
  table: {
    pagination: {
      limit: props.table.pagination.limit,
      offset: props.table.pagination.offset,
    },
  },
})
</script>

<template>
  <slot />
</template>
