# Tabs

A set of layered sections of content, known as tab panels, that are displayed one at a time.

<ComponentPreview name="tabs/examples/main" />

## Anatomy

```vue
<script setup lang="ts">
import {
  TabsRoot,
  TabsBase,
  TabsList,
  TabsIndicator,
} from '@wisemen/vue-core-components'
</script>

<template>
  <TabsRoot>
    <TabsBase>
      <TabsList>
        <slot name="items" />
        <TabsIndicator />
      </TabsList>
    </TabsBase>

    <slot name="content" />
  </TabsRoot>
</template>
```

## Examples

### Variant

<ComponentPreview name="tabs/examples/variant" />

### Orientation

<ComponentPreview name="tabs/examples/orientation" />

<!-- @include: ./tabs-meta.md -->