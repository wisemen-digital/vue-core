# Autocomplete

An component that provides real-time suggestions when being typed.

This component is build on top of the [Select](/packages/components/components/select/select.html) component.

<ComponentPreview name="autocomplete/examples/main" />

## Anatomy

```vue
<script setup lang="ts">
// Only those components can be imported
import {
  VcSelect,
  VcSelectItem,
} from '@wisemen/vue-core-components'
</script>

<template>
  <VcSelect>
    <template #base>
      </template>
    <template #left>
      </template>
    <template #right>
      </template>
    <template #loader>
      </template>

    <template #items>
      <template #item>
          <VcSelectItem />
        </template>
    </template>
  </VcSelect>
</template>
```

<!-- @include: ./autocomplete-meta.md -->

## Examples

### Clear search term on select
<ComponentPreview name="autocomplete/examples/clear-search-term-on-select" />

### With popover props
<ComponentPreview name="autocomplete/examples/popover-props" />
