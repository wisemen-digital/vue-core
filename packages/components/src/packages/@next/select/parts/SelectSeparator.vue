<script setup lang="ts">
import { useInjectSelectContext } from '@/packages/@next/select/select.context'

const { allItems, filteredItems } = useInjectSelectContext()
</script>

<template>
  <div
    v-if="allItems.size === filteredItems.size"
    aria-hidden="true"
    class="h-px bg-quaternary"
  />
</template>
