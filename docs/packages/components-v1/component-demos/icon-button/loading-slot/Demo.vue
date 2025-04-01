<script setup lang="ts">
import { VcIconButton, VcSpinner } from '@wisemen/vue-core'
</script>

<template>
  <VcIconButton
    :is-loading="true"
    icon="translate"
    label="Translate"
  >
    <template #loader>
      <div class="flex items-center gap-x-3">
        <VcSpinner class="size-4" />
      </div>
    </template>
  </VcIconButton>
</template>
