<script setup lang="ts">
import AppText from '../text/AppText.vue'
</script>

<template>
  <div class="rounded-md border border-solid border-border px-1 py-0.5 shadow-sm">
    <AppText variant="caption">
      <slot />
    </AppText>
  </div>
</template>
