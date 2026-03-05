<script setup lang="ts">
import DashboardPageContainer from '@/ui/page/DashboardPageContainer.vue'
</script>

<template>
  <DashboardPageContainer class="h-full overflow-y-auto py-4xl">
    <slot />
  </DashboardPageContainer>
</template>
