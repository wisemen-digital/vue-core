# Tabs

A set of layered sections of content, known as tab panels, that are displayed one at a time.

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
      <VcTabsScrollToLeftButton />

      <VcTabsScrollContainer>
        <VcTabsList>
          <slot name="items" />

          <VcTabsIndicator />
        </VcTabsList>
      </VcTabsScrollContainer>

      <VcTabsScrollToRightButton />
    </VcTabsBase>

    <slot name="content" />
  </VcTabsRoot>
</template>
```

## Examples

### Variant

<ComponentPreview name="tabs/examples/variant" />

### Orientation

<ComponentPreview name="tabs/examples/orientation" />

<!-- @include: ./tabs-meta.md -->

<ClassConfig />