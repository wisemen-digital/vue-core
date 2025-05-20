# Icon Button

Displays a button with only an icon.

<ComponentPreview name="icon-button/examples/main" />

## Anatomy

```vue
<script setup lang="ts">
import {
  VcIconButtonRoot,
  VcIconButtonLoader,
  VcIconButtonIcon,
} from '@wisemen/vue-core-components'
</script>

<template>
  <VcIconButtonRoot>
    <VcIconButtonLoader />
    <VcIconButtonIcon />
  </VcIconButtonRoot>
</template>
```

<!-- @include: ./icon-button-meta.md -->

## Examples

### Variant
<ComponentPreview name="icon-button/examples/variant" />

### Size
<ComponentPreview name="icon-button/examples/size" />

### Disabled
<ComponentPreview name="icon-button/examples/disabled" />

### Loading
<ComponentPreview name="icon-button/examples/loading" />
