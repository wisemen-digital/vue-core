# Tooltip

A floating element that displays information related to an element when the user hovers over it.

<ComponentPreview name="tooltip/examples/main" />

## Anatomy

```vue
<script setup lang="ts">
import {
  VcTooltipRoot,
  VcTooltipTrigger,
  VcTooltipPortal,
  VcTooltipContent,
  VcTooltipContentTransition,
  VcTooltipInnerContent,
  VcTooltipArrow,
} from '@wisemen/vue-core-components'
</script>

<template>
  <VcTooltipRoot>
    <VcTooltipTrigger>
      <slot name="trigger" />
    </VcTooltipTrigger>

    <VcTooltipPortal>
      <VcTooltipContent>
        <VcTooltipContentTransition>
          <VcTooltipInnerContent>
            <slot name="content" />
          </VcTooltipInnerContent>

          <VcTooltipArrow />
        </VcTooltipContentTransition>
      </TooltipContent>
    </VcTooltipPortal>
  </VcTooltipRoot>
</template>
```

<!-- @include: ./tooltip-meta.md -->

## Examples

### Delay

<ComponentPreview name="tooltip/examples/delay" />

### Disable close on trigger click

<ComponentPreview name="tooltip/examples/disable-close-on-trigger-click" />

### Disable hoverable content

<ComponentPreview name="tooltip/examples/disable-hoverable-content" />

### Disabled

<ComponentPreview name="tooltip/examples/disabled" />
