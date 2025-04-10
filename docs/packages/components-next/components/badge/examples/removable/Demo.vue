<script setup lang="ts">
import { VcBadge } from '@wisemen/vue-core-components'
</script>

<template>
  <VcBadge
    :is-removable="true"
    variant="brand"
    @remove="console.log('Remove')"
  >
    Badge
  </VcBadge>
</template>
