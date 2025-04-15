<script setup lang="ts">
import { useInjectSettingsContext } from '@/modules/settings/settings.context'

const {
  filteredCategories, searchTerm,
} = useInjectSettingsContext()
</script>

<template>
  <p
    v-if="filteredCategories.length === 0"
    class="text-tertiary text-sm break-words"
  >
    No results found for <span class="text-secondary font-medium">'{{ searchTerm }}'</span>.
  </p>
</template>
