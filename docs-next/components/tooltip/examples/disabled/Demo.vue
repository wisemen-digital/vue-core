<script setup lang="ts">
import { 
  VcTooltip, 
  VcButton 
} from '@wisemen/vue-core-components'
</script>

<template>
  <VcTooltip :is-disabled="true">
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