# Autocomplete

A component that provides real-time suggestions when being typed.

This component is build on top of the [Select](/packages/components-next/components/select/select.html) component.

<ComponentPreview name="autocomplete/examples/main" />

## Usage
```vue
<script setup lang="ts">
import { VcAutocomplete } from '@wisemen/vue-core-components'

const value = ref<string | null>(null)
const items = ref<string[]>([])
const isFetchingItems = ref<boolean>(false)

function onSearch(searchTerm: string): void {
  ...
}
</script>

<template>
  <VcAutocomplete
    v-model="value"
    :items="items"
    :display-fn="(v) => v"
    :is-loading="isFetchingItems"
    label="Autocomplete"
    @search="onSearch"
  />
</template>
```

## Examples

### Clear search term on select

<ComponentPreview name="autocomplete/examples/clear-search-term-on-select" />

### Customize

`base`, `baseMultiple`, `baseSingle`, `content`, `empty`, `group`, `groupLabel`, `iconLeft`, `iconRight`, `inlineSearchInput`, `item`, `itemIndicator`, `loader`, `root`, `searchInput`, `separator`

<ComponentPreview name="autocomplete/examples/customize" />

<!-- @include: ./autocomplete-meta.md -->