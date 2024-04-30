<script setup lang="ts">
import AppText from '@/components/text/AppText.vue'
</script>

<template>
  <AppText
    class="truncate"
    variant="subtext"
  >
    <slot />
  </AppText>
</template>
