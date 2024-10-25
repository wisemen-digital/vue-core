<script setup lang="ts">
import { injectTableRowContext } from '@/components/table/tableRow.context'
import AppToggle from '@/components/toggle/AppToggle.vue'

const tableRowContext = injectTableRowContext()
</script>

<template>
  <AppToggle v-model="tableRowContext.isExpanded.value">
    <slot />
  </AppToggle>
</template>
