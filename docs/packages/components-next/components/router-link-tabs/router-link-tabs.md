# Router link tabs

A set of layered sections of content, known as tab panels, that are displayed one at a time, with navigation linked to the Vue Router. Each tab corresponds to a specific route.

This component is build on top of the [Tabs](/packages/components-next/components/tabs/tabs.html) component.

<ComponentPreview name="router-link-tabs/examples/main" />

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
  </VcTabsRoot>
</template>
```

<!-- @include: ./router-link-tabs-meta.md -->

## Examples

### Variant
<ComponentPreview name="router-link-tabs/examples/variant" />
