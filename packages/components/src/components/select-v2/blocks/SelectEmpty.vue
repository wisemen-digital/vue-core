<script setup lang="ts">
import { injectSelectContext } from '@/components/select-v2/select.context'

const selectContext = injectSelectContext()
</script>

<template>
  <div v-if="selectContext.isEmpty.value">
    <slot />
  </div>
</template>
