<script setup lang="ts">
import RowLayout from '@/ui/row-layout/RowLayout.vue'
</script>

<template>
  <nav>
    <RowLayout
      align="center"
    >
      <slot />
    </RowLayout>
  </nav>
</template>
