# Autocomplete

An component that provides real-time suggestions when being typed.

This component is build on top of the [Select](/packages/components-next/components/select/select.html) component.

<ComponentPreview name="autocomplete/examples/main" />

## Anatomy

```vue
<script setup lang="ts">
import {
  Select,
  SelectItem,
} from '@wisemen/vue-core-components'
</script>

<template>
  <Select>
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
          <SelectItem />
        </template>
    </template>
  </Select>
</template>
```

<!-- @include: ./autocomplete-meta.md -->

## Examples

### Clear search term on select
<ComponentPreview name="autocomplete/examples/clear-search-term-on-select" />
