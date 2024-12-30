<script setup lang="ts">
import { VcButton, VcSpinner } from '@wisemen/vue-core'
</script>

<template>
  <VcButton :is-loading="true">
    With loading slot

    <template #loader>
      <div class="flex items-center gap-x-3">
        <VcSpinner class="size-4" />
        <span>Loading</span>
      </div>
    </template>
  </VcButton>
</template>