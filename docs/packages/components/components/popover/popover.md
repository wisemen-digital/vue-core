# Popover

A popover is a floating element that displays information or content in a non-intrusive way.

<ComponentPreview name="popover/examples/main" />

## Anatomy

```vue
<script setup lang="ts">
import {
  VcPopoverRoot,
  VcPopoverAnchor,
  VcPopoverTrigger,
  VcPopoverPortal,
  VcPopoverContent,
  VcPopoverContentTransition,
  VcPopoverArrow,
} from '@wisemen/vue-core-components'
</script>

<template>
  <VcPopoverRoot>
    <slot>
      <VcPopoverAnchor>
        <VcPopoverTrigger>
          <slot name="trigger" />
        </VcPopoverTrigger>
      </VcPopoverAnchor>
    </slot>

    <VcPopoverPortal>
      <VcPopoverContent>
        <VcPopoverContentTransition>
          <slot name="content" />

          <VcPopoverArrow />
        </VcPopoverContentTransition>
      </VcPopoverContent>
    </VcPopoverPortal>
  </VcPopoverRoot>
</template>
```

<!-- @include: ./popover-meta.md -->

## Examples

### Side

<ComponentPreview name="popover/examples/side" />

### Align

<ComponentPreview name="popover/examples/align" />

### Container

<ComponentPreview name="popover/examples/container" />

### Offset

<ComponentPreview name="popover/examples/offset" />

### Width

<ComponentPreview name="popover/examples/width" />

### No arrow

<ComponentPreview name="popover/examples/arrow" />

### Anchor reference

<ComponentPreview name="popover/examples/anchor-reference" />
