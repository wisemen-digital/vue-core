<script setup lang="ts">
import { VcBadge } from '@wisemen/vue-core-components'
</script>

<template>
  <VcBadge
    :is-removable="true"
    variant="translucent"
    color="brand"
    @remove="console.log('Remove')"
  >
    Badge
  </VcBadge>
</template>
