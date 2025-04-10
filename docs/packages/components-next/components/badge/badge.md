# Badge

<ComponentPreview name="badge/examples/main" />

## Anatomy

```vue
<script setup lang="ts">
import {
  VcBadgeRoot,
  VcBadgeIcon,
  VcBadgeCloseButton
} from '@wisemen/vue-core-components'
</script>

<template>
  <VcBadgeRoot>
    <VcBadgeIcon />
    <slot name="left" />
    <slot />
    <slot name="right" />
    <VcBadgeRemoveButton />
  </VcBadgeRoot>
</template>
```

## Examples

### Variant

<ComponentPreview name="badge/examples/variant" />

### Color

<ComponentPreview name="badge/examples/color" />

### Size

<ComponentPreview name="badge/examples/size" />

### Icon

<ComponentPreview name="badge/examples/icon" />

### Removable

<ComponentPreview name="badge/examples/removable" />

<!-- @include: ./badge-meta.md -->