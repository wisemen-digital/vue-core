<script setup lang="ts">
import { VcTooltip } from '@wisemen/vue-core'
</script>

<template>
  <VcTooltip
    :style-config="{
      '--tooltip-bg-color-default': '#8794a8',
      '--tooltip-border-color-default': '#8794a8',
      '--tooltip-text-color-default': '#fff',
    }"
  >
    <template #trigger>
      <p>This is a very unclear text</p>
    </template>

    <template #content>
      <div class="px-3 py-2">
        <p>Here is the explanation</p>
      </div>
    </template>
  </VcTooltip>
</template>
