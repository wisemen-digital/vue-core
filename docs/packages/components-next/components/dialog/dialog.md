# Dialog

A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.

<ComponentPreview name="dialog/examples/main" />

## Anatomy

```vue
<script setup lang="ts">
import {
  VcDialogRoot,
  VcDialogPortal,
  VcDialogOverlay,
  VcDialogOverlayTransition,
  VcDialogContent,
  VcDialogContentTransition,
  VcDialogCloseButton,
} from '@wisemen/vue-core-components'
</script>

<template>
  <VcDialogRoot>
    <VcDialogPortal>
      <VcDialogOverlay>
        <VcDialogOverlayTransition />
      </VcDialogOverlay>

      <VcDialogContent>
        <VcDialogContentTransition>
          <slot />
        </VcDialogContentTransition>
      </VcDialogContent>
    </VcDialogPortal>
  </VcDialogRoot>
</template>
```