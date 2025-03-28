# Popover

A popover is a floating element that displays information or content in a non-intrusive way.

<ComponentPreview name="popover/examples/main" />

## Usage
```vue
<script setup lang="ts">
import { VcPopover, VcButton } from '@wisemen/vue-core-components'
</script>

<template>
  <VcPopover>
    <template #trigger>
      <VcButton>
        <!-- ... -->
      </VcButton>
    </template>

    <template #content>
      <!-- ... -->
    </template>
  </VcPopover>
</template>
```

## Anatomy

```vue
<script setup lang="ts">
import {
  PopoverRoot,
  PopoverAnchor,
  PopoverTrigger,
  PopoverPortal,
  PopoverContent,
  PopoverContentTransition,
  PopoverInnerContent,
  PopoverArrow,
} from '@wisemen/vue-core-components'
</script>

<template>
  <PopoverRoot>
    <slot>
      <PopoverAnchor>
        <PopoverTrigger>
          <slot name="trigger" />
        </PopoverTrigger>
      </PopoverAnchor>
    </slot>

    <PopoverPortal>
      <PopoverContent>
        <PopoverContentTransition>
          <PopoverInnerContent>
            <slot name="content" />
          </PopoverInnerContent>

          <PopoverArrow />
        </PopoverContentTransition>
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
```

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

### Arrow

<ComponentPreview name="popover/examples/arrow" />

### Anchor reference

<ComponentPreview name="popover/examples/anchor-reference" />