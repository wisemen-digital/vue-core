# Address Autocomplete

A component that provides an autocomplete functionality for addresses using the Google Maps API.

This component is build on top of the [Autocomplete](/packages/components-next/components/autocomplete/autocomplete.html) component.

<ComponentPreview name="address-autocomplete/examples/main" />

## Anatomy

```vue
<script setup lang="ts">
import {
  VcAutocomplete,
  VcSelectItem,
} from '@wisemen/vue-core-components'
</script>

<template>
  <VcAutocomplete>
    <template #item>
      <VcSelectItem />
    </template>
  </VcAutocomplete>
</template>
```

<!-- @include: ./address-autocomplete-meta.md -->
