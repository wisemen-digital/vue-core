<script setup lang="ts">
import { RouterLink } from 'vue-router'

import { useInjectTableContext } from '@/components/table/table.context'

const props = defineProps<{
  isFocusable: boolean
  data: any
}>()

const {
  rowAction,
} = useInjectTableContext()
</script>

<template>
  <RouterLink
    v-if="rowAction !== null && rowAction.type === 'link'"
    :to="rowAction.to(props.data)"
    :aria-hidden="!isFocusable"
    :tabindex="isFocusable ? 0 : -1"
    class="absolute inset-0 z-2 cursor-pointer outline-none"
  >
    <span class="sr-only">
      {{ rowAction.label(props.data) }}
    </span>
  </RouterLink>

  <button
    v-if="rowAction !== null && rowAction.type === 'button'"
    :aria-hidden="!isFocusable"
    :tabindex="isFocusable ? 0 : -1"
    class="absolute inset-0 z-2 cursor-pointer outline-none"
    @click="rowAction.onClick(props.data)"
  >
    <span class="sr-only">
      {{ rowAction.label(props.data) }}
    </span>
  </button>
</template>
