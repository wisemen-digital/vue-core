<script setup lang="ts">
import { computed } from 'vue'

import { useInjectSelectContext } from '@/packages/@next/select/select.context'

const { filteredItems } = useInjectSelectContext()

const isEmpty = computed<boolean>(() => filteredItems.value.size === 0)
</script>

<template>
  <div v-if="isEmpty">
    Empty
  </div>
</template>
