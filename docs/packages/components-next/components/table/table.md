# Table

<ComponentPreview name="table/examples/main" />

## Anatomy

```vue
<script setup lang="ts">
import {
  VcTableRoot,
  VcTableScrollContainer,
  VcTableContent,
  VcTableHeader,
  VcTableBody,
  VcTableEmptyOrLoadingState,
  VcTableHiddenResultsHint
} from '@wisemen/vue-core-components'
</script>

<template>
  <VcTableRoot>
    <slot name="top" />

    <VcTableScrollContainer>
      <VcTableContent>
        <VcTableHeader />
        <VcTableBody />
      </VcTableContent>

      <VcTableHiddenResultsHint />
    </VcTableScrollContainer>

    <VcTableEmptyOrLoadingState>
      <template #empty-state="{ activeFilterCount }">
        <slot
          :active-filter-count="activeFilterCount"
          name="empty-state"
        />
      </template>
    </VcTableEmptyOrLoadingState>

    <slot name="bottom" />
  </VcTableRoot>
</template>
```

<!-- @include: ./table-meta.md -->

## Examples

### No results

<ComponentPreview name="table/examples/no-results" />

### No data

<ComponentPreview name="table/examples/no-data" />

### Row action

<ComponentPreview name="table/examples/row-action" />

### Customize

<ComponentPreview name="table/examples/customize" />
