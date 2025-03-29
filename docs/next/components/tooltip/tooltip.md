# Tooltip

A floating element that displays information related to an element when the user hovers over it.

<ComponentPreview name="tooltip/examples/main" />

## Anatomy

```vue
<script setup lang="ts">
import {
  TooltipRoot,
  TooltipTrigger,
  TooltipPortal,
  TooltipContent,
  TooltipContentTransition,
  TooltipInnerContent,
  TooltipArrow,
} from '@wisemen/vue-core-components'
</script>

<template>
  <TooltipRoot>
    <TooltipTrigger>
      <slot name="trigger" />
    </TooltipTrigger>

    <TooltipPortal>
      <TooltipContent>
        <TooltipContentTransition>
          <TooltipInnerContent>
            <slot name="content" />
          </TooltipInnerContent>

          <TooltipArrow />
        </TooltipContentTransition>
      </TooltipContent>
    </TooltipPortal>
  </TooltipRoot>
</template>
```

## Examples

### Delay

<ComponentPreview name="tooltip/examples/delay" />

### Disable close on trigger click

<ComponentPreview name="tooltip/examples/disable-close-on-trigger-click" />

### Disable hoverable content

<ComponentPreview name="tooltip/examples/disable-hoverable-content" />

### Disabled

<ComponentPreview name="tooltip/examples/disabled" />