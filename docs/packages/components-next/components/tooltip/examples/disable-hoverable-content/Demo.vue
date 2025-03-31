<script setup lang="ts">
import { VcButton,
  VcTooltip } from '@wisemen/vue-core-components'
</script>

<template>
  <VcTooltip :disable-hoverable-content="true">
    <template #trigger>
      <VcButton variant="secondary">
        Hover me
      </VcButton>
    </template>

    <template #content>
      <p class="text-sm font-semibold text-primary py-xs px-lg">
        Extra information about the action.
      </p>
    </template>
  </VcTooltip>
</template>
