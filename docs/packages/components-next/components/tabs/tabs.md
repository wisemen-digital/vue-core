# Tabs

A set of layered sections of content, known as tab panels, that are displayed one at a time.

> ⚠️ Warning: In this component, you HAVE to use the content slot and the VcTabsContent component.
> This ensures that your tab trigger is linked to its correct content, for accessibility reasons.

<ComponentPreview name="tabs/examples/main" />

## Anatomy

```vue
<script setup lang="ts">
import {
  VcTabsRoot,
  VcTabsBase,
  VcTabsList,
  VcTabsIndicator,
} from '@wisemen/vue-core-components'
</script>

<template>
  <VcTabsRoot>
    <VcTabsBase>
      <VcTabsList>
        <slot name="items" />

        <VcTabsIndicator />
      </VcTabsList>
    </VcTabsBase>

    <slot name="content" />
  </VcTabsRoot>
</template>
```

<!-- @include: ./tabs-meta.md -->

## Examples

### Variant

<ComponentPreview name="tabs/examples/variant" />

### Orientation

<ComponentPreview name="tabs/examples/orientation" />

### Overflow

<ComponentPreview name="tabs/examples/overflow" />
