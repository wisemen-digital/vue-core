<script setup lang="ts">
import {
  useVcDialog,
  VcButton,
  VcDialogContent,
  VcDialogRoot,
} from '@wisemen/vue-core-components'

import LayoutStackItem from '@/modules/stacked-layout/parts/LayoutStackItem.vue'

const dialog = useVcDialog({
  component: () => import('./NestedDialog3.vue'),
})
</script>

<template>
  <VcDialogRoot>
    <VcDialogContent>
      <LayoutStackItem>
        <div class="flex h-[40rem] w-[60rem] items-center justify-center">
          <VcButton @click="dialog.open">
            Open
          </VcButton>
        </div>
      </LayoutStackItem>
    </VcDialogContent>
  </VcDialogRoot>
</template>
