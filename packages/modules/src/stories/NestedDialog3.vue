<script setup lang="ts">
import {
  VcDialogContent,
  VcDialogRoot,
} from '@wisemen/vue-core-components'

import LayoutStackItem from '@/modules/stacked-layout/parts/LayoutStackItem.vue'
</script>

<template>
  <VcDialogRoot>
    <VcDialogContent>
      <LayoutStackItem>
        <div class="h-[40rem] w-[60rem]">
          <slot />
        </div>
      </LayoutStackItem>
    </VcDialogContent>
  </VcDialogRoot>
</template>
