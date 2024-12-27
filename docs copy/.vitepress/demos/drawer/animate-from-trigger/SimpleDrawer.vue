<script setup lang="ts">
import {
  VcDrawer,
  VcDrawerCloseButton,
  VcDrawerDescription,
  VcDrawerTitle,
} from '@wisemen/vue-core'
</script>

<template>
  <VcDrawer>
    <div class="relative w-[500px] p-8">
      <VcDrawerCloseButton class="!absolute right-4 top-4" />

      <VcDrawerTitle>
        <h1 class="text-2xl font-bold text-primary">
          Drawer title
        </h1>
      </VcDrawerTitle>

      <VcDrawerDescription>
        <p class="mt-md text-tertiary">
          This is a description of the vcdrawer.
        </p>
      </VcDrawerDescription>
    </div>
  </VcDrawer>
</template>
