
# Button

An element that triggers an action or event when clicked.

<ComponentPreview name="button/examples/main" />

## Anatomy

```vue
<script setup lang="ts">
import {
  VcButtonRoot,
  VcButtonLoader,
  VcButtonContent,
  VcButtonIconLeft,
  VcButtonIconRight,
} from '@wisemen/vue-core-components'
</script>

<template>
  <VcButtonRoot>
    <VcButtonLoader />

    <VcButtonContent>
      <VcButtonIconLeft />
      <slot />
      <VcButtonIconRight />
    </VcButtonContent>
  </VcButtonRoot>
</template>
```

<!-- @include: ./button-meta.md -->

## Examples

### Variant
<ComponentPreview name="button/examples/variant" />

### Size
<ComponentPreview name="button/examples/size" />

### Disabled
<ComponentPreview name="button/examples/disabled" />

### Icons
<ComponentPreview name="button/examples/icons" />

### Loading
<ComponentPreview name="button/examples/loading" />