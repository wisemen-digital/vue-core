<script setup lang="ts">
import { injectTableRowContext } from '@/components/table/tableRow.context'
import Toggle from '@/components/toggle/Toggle.vue'

const tableRowContext = injectTableRowContext()
</script>

<template>
  <Toggle v-model="tableRowContext.isExpanded.value">
    <slot />
  </Toggle>
</template>
