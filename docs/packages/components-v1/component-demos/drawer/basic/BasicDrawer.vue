<script setup lang="ts">
import {
  VcButton,
  VcDrawer,
  VcDrawerCloseButton,
  VcDrawerDescription,
  VcDrawerTitle,
} from '@wisemen/vue-core'
</script>

<template>
  <VcDrawer>
    <div class="px-3 py-2">
      <VcDrawerTitle>
        <p>
          Drawer Title
        </p>
      </VcDrawerTitle>
      <VcDrawerDescription>
        <p>
          This is a drawer description.
        </p>
      </VcDrawerDescription>
      <p class="py-2">
        And then this is the main content of the drawer.
      </p>

      <VcDrawerCloseButton>
        <VcButton
          variant="tertiary"
          size="sm"
        >
          Close
        </VcButton>
      </VcDrawerCloseButton>
    </div>
  </VcDrawer>
</template>
