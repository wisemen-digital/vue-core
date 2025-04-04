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

## Examples

### Prevent click outside

<ComponentPreview name="dialog/examples/prevent-click-outside" />

### Prevent escape key

<ComponentPreview name="dialog/examples/prevent-esc" />

### Custom overlay

<ComponentPreview name="dialog/examples/custom-overlay" />

### Drawer

<ComponentPreview name="dialog/examples/drawer" />

<!-- @include: ./dialog-meta.md -->