<script setup lang="ts">
import {
  VcButton,
  VcTooltip,
} from '@wisemen/vue-core-components'
</script>

<template>
  <VcTooltip>
    <template #trigger>
      <VcButton variant="secondary">
        Hover me
      </VcButton>
    </template>

    <template #content>
      <p class="text-primary py-xs px-lg text-sm font-semibold">
        Extra information about the action.
      </p>
    </template>
  </VcTooltip>
</template>
